import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, History, Car, FileCheck } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      title: "Comprehensive History",
      description:
        "Get detailed information about previous owners, accidents, and service records",
      icon: History,
    },
    {
      title: "Verified Information",
      description:
        "All data is collected from trusted sources and verified for accuracy",
      icon: Shield,
    },
    {
      title: "Vehicle Details",
      description:
        "Access complete specifications, features, and maintenance history",
      icon: Car,
    },
    {
      title: "Instant Reports",
      description: "Receive your report immediately after purchase via email",
      icon: FileCheck,
    },
  ];

  return (
    <section className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why Choose Our Reports
        </h2>
        <p className="mt-4 text-muted-foreground">
          Make informed decisions with comprehensive vehicle history reports
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Card key={index}>
            <CardHeader>
              <benefit.icon className="h-12 w-12 text-teal-600" />
              <CardTitle>{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
