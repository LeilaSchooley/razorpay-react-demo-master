"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_dotenv = __toESM(require("dotenv"));
var import_express = __toESM(require("express"));
var import_helmet = __toESM(require("helmet"));
var import_cors = __toESM(require("cors"));
var import_cookie_parser = __toESM(require("cookie-parser"));
var import_morgan = __toESM(require("morgan"));
var import_razorpay = __toESM(require("razorpay"));
import_dotenv.default.config();
var app = (0, import_express.default)();
app.use((0, import_morgan.default)("dev"));
app.use(import_express.default.json());
app.use(import_express.default.urlencoded({ extended: false }));
app.use((0, import_helmet.default)());
app.use((0, import_cookie_parser.default)());
app.use((0, import_cors.default)());
var instance = new import_razorpay.default({
  key_id: process.env.RZP_KEY_ID,
  key_secret: process.env.RZP_KEY_SECRET
});
app.get("/", function(req, res, next) {
  res.json("API is running");
});
app.get("/api/v1/rzp_capture/:payment_id", (req, res) => {
  const { payment_id } = req.params;
  instance.payments.capture(payment_id, FIXED_AMOUNT).then((data) => {
    console.log("Payment successful:", data);
    res.json({
      success: true,
      message: "Payment captured successfully",
      data
    });
  }).catch((error) => {
    console.error("Payment capture failed:", error);
    res.status(500).json({ success: false, message: "Payment capture failed", error });
  });
});
app.listen("3000", () => console.log("Listening on port 3000"));
//# sourceMappingURL=index.js.map