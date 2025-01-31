import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionActions from "@mui/material/AccordionActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const faqs = [
  {
    question: "Can I order a single report for a classic car?",
    answer:
      "Not from our website, no. Unfortunately, cars made before 1981 are not recognized by our database and are not found in regular vehicle records.",
  },
  {
    question: "Do CARFAX USA have Canada Information?",
    answer:
      "Yes, we obtain data from all over the United States and Canada. If the vehicle has been in Canada, we will report its national history, including registration, service, recalls, and damage history. However, Carfax Canada has unique lien information and access to a private insurance registry, which Carfax.com does not have.",
  },
  {
    question: "Does my report contain ICBC information?",
    answer:
      "If the report is titled 'CLAIMS BC VEHICLE HISTORY REPORT' or 'VERIFIED BC VEHICLE HISTORY REPORT' and is free of disclaimers above the Report Summary, all ICBC damage, estimate, and insurance information shared by ICBC has been included in your report.",
  },
  {
    question: "Do I need a VIN to order a report?",
    answer:
      "Yes. Make sure you use the same VIN when submitting your order and redeeming your report. We cannot offer refunds if you submit an invalid VIN or license plate number. CARFAX only checks VIN numbers for vehicles from North America (USA/Canada).",
  },
  {
    question: "Do I need to be the owner of the car to order a Carfax report?",
    answer:
      "No, anyone can order a CARFAX report. To order, you’ll need a valid email address and a credit card or PayPal account. A VIN is required to generate the report, but you can place an order first and add the VIN later.",
  },
  {
    question: "How do I get my report?",
    answer:
      "Once you complete your order, you will receive an order completion email within 5 to 45 minutes. The email will provide instructions to generate the report using a one-time password. We also send an order confirmation and receipt to your email.",
  },
  {
    question: "What is a classic vehicle/classic car?",
    answer:
      "Carfax classifies a 'classic' car as any passenger car or light truck manufactured before 1981. The VIN structure for classic vehicles is not recognized by our system, so you will likely encounter an error when ordering a CARFAX report.",
  },
  {
    question: "What is a VIN?",
    answer:
      "The Vehicle Identification Number (VIN) is a unique 17-character serial number. It identifies a car’s year, make, model, and history. VINs do not contain the letters I, O, or Q.",
  },
  {
    question: "Where can I find the VIN number?",
    answer:
      "For most cars, the VIN is on the VIN plate under the windshield or in the driver’s side door jamb. It can also be found on insurance and registration documents.",
  },
  {
    question: "Why didn't I receive a receipt for my order?",
    answer:
      "If you didn’t receive a receipt, check your spam/junk folder. You should receive a receipt from PayPal or Stripe as well as an order confirmation email from us.",
  },
  {
    question: "Is there a CARFAX vehicle report alternative?",
    answer:
      "Although other services like Vinaudit, AutoCheck, VinCheck, and VINSmart exist, we recommend Carfax for the most reliable and complete vehicle history reports.",
  },
  {
    question: "What is NMVTIS?",
    answer:
      "NMVTIS (National Motor Vehicle Title Information System) is a database that tracks vehicle title history. It is used by auto recyclers, salvage yards, and junkyards to verify vehicle histories before accepting them into inventory.",
  },
  {
    question: "Who is this for?",
    answer:
      "People looking for auto check, VIN check, or motor vehicle title history, including used car buyers, private sellers, car dealerships, insurance companies, law enforcement, and independent mechanics.",
  },
];

export default function AccordionUsage() {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <Accordion key={index} defaultExpanded={index === 0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography component="span">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
