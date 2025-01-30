"use strict";

require("dotenv").load();
const express = require("express");
const path = require("path");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "views")));

const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: process.env.RZP_KEY_ID,
  key_secret: process.env.RZP_KEY_SECRET,
});

app.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

app.get("/api/v1/rzp_capture/:payment_id", (req, res) => {
  const { payment_id } = req.params;

  instance.payments
    .capture(payment_id, FIXED_AMOUNT)
    .then((data) => {
      // Perform any action after successful payment
      console.log("Payment successful:", data);

      // Example: Save payment details to database or send confirmation email
      // savePaymentToDB(data);
      // sendEmailConfirmation(data.email);

      res.json({
        success: true,
        message: "Payment captured successfully",
        data,
      });
    })
    .catch((error) => {
      console.error("Payment capture failed:", error);
      res
        .status(500)
        .json({ success: false, message: "Payment capture failed", error });
    });
});

app.listen("3000", () => console.log("Listening on port 3000"));
