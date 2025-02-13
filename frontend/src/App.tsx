// App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
import RefundCancellationShippingPolicy from "./RefundCancellationShippingPolicy";
import ThankYou from "./ThankYou";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/refunds" element={<RefundCancellationShippingPolicy />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}
