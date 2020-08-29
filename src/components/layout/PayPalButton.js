import React, { Component } from "react";

export default class PayPalBtn extends Component {
  makePayPalButton = () => {
    window.paypal
      .Buttons({
        style: {
          shape: "rect",
          color: "blue",
          layout: "vertical",
          label: "subscribe"
        },
        createSubscription: function(data, actions) {
          return actions.subscription.create({
            plan_id: "P-8BG03646BY414914GL5FDVAY"
          });
        },
        onApprove: function(data, actions) {
          alert(data.subscriptionID);
        }
      })
      .render("#paypal-button-container");
  };
  componentDidMount() {
    this.makePayPalButton();
  }
  render() {
    return (
      <div>
        <div id="paypal-button-container"></div>
      </div>
    );
  }
}
