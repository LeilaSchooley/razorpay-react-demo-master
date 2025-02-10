import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export function Hero() {
  const [vinNumber, setVinNumber] = useState("");
  const [email, setEmail] = useState("");
  const payment_amount = 400; // $4 in cents

  const paymentHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!vinNumber || !email) {
      alert("Please enter both VIN number and Email.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZOR_PAY_TEST_KEY,
      amount: payment_amount,
      name: "CARFAX Vehicle History Report",
      description: "Complete vehicle history report",
      prefill: {
        email: email,
      },
      notes: {
        vinNumber: vinNumber,
      },
      theme: {
        color: "#14b8a6",
      },
      handler(response: any) {
        console.log("Payment successful:", response);
        // Here you can add logic to handle successful payment,
        console.log(options);
        console.log(options.prefill.email);
        // such as redirecting to a success page or showing a modal

        // Define your payment data
        const paymentData = {
          email: options.prefill.email, // Replace with the actual user email
          // Add any other fields required by your PaymentData interface, e.g.:
          // transactionId: "txn_123456789"
        };

        // Make a POST request using fetch
        fetch("http://localhost:3000/api/save-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                "Network response was not ok " + response.statusText
              );
            }
            return response.json();
          })
          .then((data) => {
            console.log("Response from server:", data);
            // Handle success, e.g., show a confirmation message to the user
          })
          .catch((error) => {
            console.error("Error saving payment:", error);
            // Handle the error, e.g., display an error message to the user
          });

        console.log(vinNumber);
        submitVIN(vinNumber);
      },
    };
    async function checkTaskStatus(taskId: any) {
      for (let attempt = 1; attempt <= 20; attempt++) {
        console.log(`Checking status (Attempt ${attempt})...`);

        try {
          const response = await fetch(
            `http://127.0.0.1:4000/api/task/${taskId}`
          );
          const taskData = await response.json();
          if (taskData.status === "completed") {
            console.log("Done");

            console.log(taskData);
            window.location.href = taskData.pdf_path; // Redirect to S3 file
            console.log(taskData.pdf_link);

            sendEmailRequest(options.prefill.email, taskData.pdf_path);

            return;
          }
        } catch (error) {
          console.error("Error:", error);
        }

        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    }
    // Call python backend on port 4000
    async function submitVIN(vin: string) {
      const response = await fetch("http://127.0.0.1:4000/api/scrape-vin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vin }),
      });

      const data = await response.json();
      checkTaskStatus(data.task_id); // Start checking status
    }

    async function sendEmailRequest(email: string, pdfLink: any) {
      const response = await fetch("http://127.0.0.1:3000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, pdf_link: pdfLink }),
      });

      const data = await response.json();
      console.log("Server Response:", data);
    }

    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  return (
    <section className="bg-gradient-to-b from-muted/50 to-muted py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="hero-title text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                Get Your <span className="gradient-text">CARFAX</span> Vehicle
                History Report
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl font-inter">
                Complete vehicle history report for only $4. Make an informed
                decision with our detailed reports.
              </p>
            </div>
            <form onSubmit={paymentHandler} className="space-y-4">
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="flex-1">
                  <Input
                    placeholder="Enter VIN Number"
                    className="h-12 font-inter"
                    value={vinNumber}
                    onChange={(e) => setVinNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    className="h-12 font-inter"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 font-medium w-full"
              >
                Check Now
              </Button>
            </form>
            <p className="text-sm text-muted-foreground font-inter">
              Check VIN before buying a report. All reports include complete
              vehicle history.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Card className="relative overflow-hidden rounded-xl border-2">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-outfit font-bold gradient-text">
                      $4
                    </div>
                    <div className="text-sm text-muted-foreground font-inter">
                      per report
                    </div>
                  </div>
                  <ul className="grid gap-2.5 text-sm font-inter">
                    <li className="flex items-center gap-2">
                      ✓ Complete ownership history
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Accident & damage reports
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Service records
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Mileage verification
                    </li>
                    <li className="flex items-center gap-2">
                      ✓ Title information
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
