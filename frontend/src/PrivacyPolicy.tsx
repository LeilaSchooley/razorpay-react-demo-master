import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6">Last updated: February 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p className="mb-2">
          Welcome to CARFAX Report (“we”, “us”, or “our”). We are committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, and safeguard your personal information when you use our website
          and services.
        </p>
        <p>
          By accessing or using our services, you agree to the collection and
          use of information in accordance with this policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-2">
          When you use our service, we may collect the following types of
          personal information:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>
            <strong>Email Address:</strong> Used for account creation,
            communication, order confirmations, and sending updates regarding
            your service.
          </li>
          <li>
            <strong>VIN (Vehicle Identification Number):</strong> Collected to
            generate a detailed Carfax report on the vehicle you inquire about.
          </li>
          <li>
            <strong>Payment Details:</strong> Payment information is processed
            securely by our trusted payment provider. We do not store your
            sensitive payment data on our servers.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p className="mb-2">We use your personal information to:</p>
        <ul className="list-disc list-inside mb-2">
          <li>Provide and maintain our services.</li>
          <li>
            Process your requests for Carfax reports based on the VIN you
            provide.
          </li>
          <li>Communicate with you about your account and our services.</li>
          <li>
            Ensure secure payment processing through our payment provider.
          </li>
          <li>Improve our services based on user feedback and usage trends.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sharing Your Information</h2>
        <p className="mb-2">
          We do not sell or rent your personal information. However, we may
          share your information with:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>
            <strong>Payment Providers:</strong> Your payment details are
            processed by our payment provider, and no sensitive information is
            stored on our servers.
          </li>
          <li>
            <strong>Service Providers:</strong> Trusted third parties who assist
            us in delivering our services.
          </li>
          <li>
            <strong>Legal Authorities:</strong> In cases required by law,
            regulation, or legal process.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Data Security & Retention
        </h2>
        <p className="mb-2">
          We implement robust security measures to protect your personal
          information. However, no method of transmission over the internet is
          100% secure.
        </p>
        <p className="mb-2">
          We retain your data only as long as necessary to fulfill the purposes
          outlined in this Privacy Policy, or as required by law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <p className="mb-2">
          Depending on your location, you may have the right to access, correct,
          or delete your personal information. If you have any questions
          regarding your personal data or wish to exercise your rights, please
          contact us.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. Your
          continued use of our services after any changes signifies your
          acceptance of the updated Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-2">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <p>
          <strong>Email:</strong> support@carfaxreport.com
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
