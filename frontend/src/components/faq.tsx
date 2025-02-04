import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What information does the CARFAX report provide?",
      answer:
        "Our reports include ownership history, accident records, service history, mileage verification, title information, and more. All information is gathered from reliable sources to give you a complete picture of the vehicle's history.",
    },
    {
      question: "How do I find the VIN number?",
      answer:
        "The Vehicle Identification Number (VIN) can typically be found in several locations: on the dashboard near the windshield, driver's side door jamb, registration documents, or insurance paperwork.",
    },
    {
      question: "Do I need to be the vehicle owner to get a report?",
      answer:
        "No, anyone can purchase a CARFAX report. You just need the VIN number of the vehicle you're interested in, a valid email address, and a payment method.",
    },
    {
      question: "How quickly will I receive my report?",
      answer:
        "Reports are generated instantly and sent to your email address immediately after purchase. You'll also receive a confirmation email with your order details.",
    },
  ];

  return (
    <section className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-muted-foreground">
          Find answers to common questions about our vehicle history reports
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
