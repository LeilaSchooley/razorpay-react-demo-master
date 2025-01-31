import React from "react";
import Checkout from "./Checkout"; // Import the Checkout component
import "./App.css"; // Keep global styles
import Header from "./Header";
import AccordionUsage from "./faq";
function App() {
  return (
    <div>
      <Header />
      <Checkout />
      <AccordionUsage />
    </div>
  );
}

export default App;
