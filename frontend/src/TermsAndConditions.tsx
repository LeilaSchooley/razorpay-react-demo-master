import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-sm text-gray-600 mb-6">Last updated: February 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to our website. By accessing and using our services, you agree
          to these terms and conditions. Please read them carefully. We strive
          to provide timely and accurate vehicle reports; however, by using our
          service, you acknowledge and accept these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Service Delivery & Chargebacks
        </h2>
        <p>
          Our primary goal is to deliver detailed vehicle reports quickly and
          accurately. Chargebacks may occur if:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>
            The report is not delivered fast enough or there is a significant
            delay, prompting the customer to file a complaint or even purchase a
            second report.
          </li>
          <li>
            The email address provided is incorrect, resulting in the report not
            being delivered.
          </li>
        </ul>
        <p>
          We continuously work on improving our systems to minimize such
          occurrences. However, please note that while we implement robust
          measures to ensure prompt and reliable delivery, we cannot fully
          prevent chargebacks that are initiated simply "just because" a
          customer decides to file one.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Payment Gateways & Dispute Resolution
        </h2>
        <p>
          Payment processing for our service is handled by reputable third-party
          providers. We are aware that some payment gateways (e.g., PayPal) may
          impose bans or restrictions if customer disputes arise, particularly
          if the product delivered does not match the seller’s business
          description.
        </p>
        <p>
          We regularly review and update our payment processing methods to
          ensure compliance and service reliability. By using our service, you
          acknowledge that any payment disputes or chargebacks will be managed
          according to the policies of the respective payment gateway.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">General Terms</h2>
        <p>[Additional general terms and conditions content goes here...]</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p>
          If you have any questions or concerns about these terms, please
          contact us at:
        </p>
        <p>
          <strong>Email:</strong> support@carfaxreport.com
        </p>
        <p>
          <strong>Phone:</strong> 1-800-CAR-FAXX
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
