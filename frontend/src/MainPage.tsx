import React from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function MainPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
