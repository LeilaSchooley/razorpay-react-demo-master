import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Define email transport
const transporter = nodemailer.createTransport({
  service: "gmail", // Use 'gmail', 'outlook', or configure SMTP
  auth: {
    user: process.env.EMAIL_USER as string, // Your email
    pass: process.env.EMAIL_PASS as string, // App password (not normal email password)
  },
});

/**
 * Sends an email with the PDF report link.
 * @param email - Recipient's email address.
 * @param pdfLink - Link to the generated PDF report.
 * @returns A promise indicating success or failure.
 */
export async function sendEmail(email: string, pdfLink: string): Promise<{ success: boolean; message?: string; error?: any }> {
  const mailOptions = {
    from: process.env.EMAIL_USER as string,
    to: email,
    subject: "Your Carfax Report is Ready!",
    text: `Hello,\n\nYour Carfax report is ready.\nDownload it here: ${pdfLink}\n\nThank you!`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return { success: false, error };
  }
}
