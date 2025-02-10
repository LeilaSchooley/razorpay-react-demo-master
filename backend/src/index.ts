import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import Razorpay from "razorpay";
import supabase from "./supabaseClient"; // Ensure your supabaseClient is TS or has declaration files
import { sendEmail } from "./emailService";

dotenv.config();

const app = express();
const PORT: number | string = process.env.PORT || 3000;

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(process.cwd(), "views")));

// Define a fixed payment amount
const FIXED_AMOUNT: number = 500; // Adjust as needed

// Define a type for the payment data
interface PaymentData {
  email: string;
  transactionId?: string;
}

// An async function to save payment details to Supabase
async function savePaymentToDB(
  paymentData: PaymentData
): Promise<{ success: boolean; data?: any; error?: any }> {
  try {
    // Insert the payment details into the 'carfax' table in Supabase
    const { data, error } = await supabase.from("carfax").insert([
      {
        email: paymentData.email,
        status: "completed",
      },
    ]);

    if (error) {
      console.error("Error inserting payment:", error);
      return { success: false, error: error };
    }
    return { success: true, data: data };
  } catch (err) {
    console.error("Exception in savePaymentToDB:", err);
    return { success: false, error: err };
  }
}

// Route to send an email with a PDF link manually
app.post("/api/send-email", async (req: Request, res: Response) => {
  const { email, pdf_link } = req.body;

  if (!email || !pdf_link) {
    return res
      .status(400)
      .json({ error: "Missing email or pdf_link in request body" });
  }

  try {
    const emailResponse = await sendEmail(email, pdf_link);
    if (emailResponse.success) {
      return res.json({ success: true, message: "Email sent successfully" });
    } else {
      return res
        .status(500)
        .json({ success: false, error: emailResponse.error });
    }
  } catch (error) {
    console.error("❌ Error in sending email:", error);
    return res.status(500).json({ success: false, error });
  }
});
app.post("/api/save-payment", async (req: Request, res: Response) => {
  try {
    // Assume the frontend sends a JSON object that matches PaymentData
    const paymentData: PaymentData = req.body;

    // Call the function to save payment details
    const result = await savePaymentToDB(paymentData);

    if (!result.success) {
      return res.status(500).json({
        success: false,
        message: "Payment captured, but error saving payment details",
        error: result.error,
      });
    }

    res.status(200).json({
      success: true,
      message: "Payment captured successfully and saved to database",
      data: result.data,
    });
  } catch (err) {
    console.error("Error in /api/save-payment endpoint:", err);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred",
      error: err,
    });
  }
});

// Initialize Razorpay instance
const instance = new Razorpay({
  key_id: process.env.RZP_KEY_ID!,
  key_secret: process.env.RZP_KEY_SECRET!,
});

// Route for home page (if using a view engine)
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // For example, if you have a view engine configured:
  // res.render("index", { title: "Express" });
  // Otherwise, send a simple message:
  res.send("Hello from Express with TypeScript!");
});

// Route to capture payment using Razorpay
app.get(
  "/api/v1/rzp_capture/:payment_id",
  async (req: Request, res: Response) => {
    const { payment_id } = req.params;

    try {
      // Capture the payment using Razorpay's API
      const data = await instance.payments.capture(
        payment_id,
        FIXED_AMOUNT,
        "INR"
      );
      console.log("Payment successful:", JSON.stringify(data, null, 2));

      // Fetch payment details to get the user's email
      const paymentDetails = await instance.payments.fetch(payment_id);
      console.log("Payment Details:", JSON.stringify(paymentDetails, null, 2));
      // Build a paymentData object based on your response and/or your application's logic.
      // Here we assume that `data.id` is the transaction ID and that your system knows the email.
      const paymentData: PaymentData = {
        email: data.email || "unknown@example.com", // Adjust based on your data source
        transactionId: data.id,
      };

      console.log(paymentData);
      // Save payment details to Supabase
      const result = await savePaymentToDB(paymentData);
      if (!result.success) {
        return res.status(500).json({
          success: false,
          message: "Payment captured, but error saving payment details",
          error: result.error,
        });
      }

      // Optionally, send an email confirmation here.
      // e.g., sendEmailConfirmation(paymentData.email);

      res.json({
        success: true,
        message: "Payment captured successfully and saved to database",
        data: data,
      });
    } catch (error) {
      console.error("Payment capture failed:", error);
      res.status(500).json({
        success: false,
        message: "Payment capture failed",
        error: error,
      });
    }
  }
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
