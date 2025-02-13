import React from "react";

const ThankYou: React.FC = () => {
  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Purchase!</h1>
      <p className="text-lg mb-4">
        We appreciate your business and are working on preparing your report.
        Please leave this page open and it should appear both here and in your
        email.
      </p>
      <p className="mb-4">
        If you have entered your email address correctly, you will receive your
        vehicle report within a few minutes. Please check your inbox and spam
        folder for our email.
      </p>
      <p className="mb-4">
        If you do not receive your report within a few minutes, please wait a
        little longer. Should the issue persist, feel free to contact our
        support team for assistance.
      </p>
      <p className="text-lg font-semibold">
        Support Email: support@carfaxreport.com
      </p>
      <p className="text-sm text-gray-600 mt-4">
        Our team is dedicated to ensuring you receive your report promptly and
        will assist you with any issues.
      </p>
    </div>
  );
};

export default ThankYou;
