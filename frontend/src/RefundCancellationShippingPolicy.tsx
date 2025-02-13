import React from "react";

const RefundCancellationShippingPolicy: React.FC = () => {
  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Refund, Cancellation, and Shipping Policy
      </h1>
      <p className="text-sm text-gray-600 mb-6">Last updated: February 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Refund & Cancellation Policy
        </h2>
        <p className="mb-2">
          Once a report has been generated and delivered, refunds will not be
          issued. It is essential that you provide a valid and correct email
          address when placing your order.
        </p>
        <ul className="list-disc list-inside">
          <li>No refunds are available after the report has been delivered.</li>
          <li>
            Cancellation requests made after the report has been generated will
            not be honored.
          </li>
          <li>
            The customer must ensure that the email provided is correct; an
            incorrect email address will result in the report not being
            received, and no refund or reissue will be possible.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Shipping Policy</h2>
        <p className="mb-2">
          Our vehicle reports are delivered digitally via email. Once your order
          is processed, the report is generated and sent immediately to the
          email address you provided.
        </p>
        <ul className="list-disc list-inside">
          <li>
            Reports are typically generated and sent within minutes of order
            completion.
          </li>
          <li>
            In the event of any technical delays, please contact our support
            team for assistance.
          </li>
          <li>
            If an incorrect email address is provided, the report cannot be
            re-sent or refunded.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-2">
          For any questions or concerns regarding our refund, cancellation, or
          shipping policies, please contact us:
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

export default RefundCancellationShippingPolicy;
