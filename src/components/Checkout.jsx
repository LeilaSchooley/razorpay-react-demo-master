import React, { Component } from "react";
import "./App.css"; // Import global styles

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vinNumber: "",
      email: "",
      payment_amount: 500, // Fixed amount
    };
    this.paymentHandler = this.paymentHandler.bind(this);
  }

  paymentHandler(e) {
    e.preventDefault();

    const { vinNumber, email, payment_amount } = this.state;
    if (!vinNumber || !email) {
      alert("Please enter both VIN number and Email.");
      return;
    }

    const options = {
      key: process.env.RAZOR_PAY_TEST_KEY,
      amount: payment_amount * 100,
      name: "Fixed Product",
      description: "Payment for a fixed product",
      prefill: {
        email: email,
      },
      notes: {
        vinNumber: vinNumber,
      },
      theme: {
        color: "#9D50BB",
      },
      handler(response) {
        console.log("Payment successful:", response);
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  render() {
    const { vinNumber, email, payment_amount } = this.state;

    return (
      <div className="wrapper">
        <div className="payments">
          <div className="payments-title">
            <h1>
              Get CARFAX accident, damage & service information no one else has
            </h1>
          </div>

          <div className="payments-form">
            <form onSubmit={this.paymentHandler}>
              <p>
                <label htmlFor="vinNumber">VIN Number</label>
              </p>
              <input
                type="text"
                value={vinNumber}
                placeholder="Enter VIN Number"
                onChange={(e) => this.setState({ vinNumber: e.target.value })}
              />

              <input
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />

              <button id="pay" type="submit">Pay Now</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
