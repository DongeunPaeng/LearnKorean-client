import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

export default class PayPalBtn extends React.Component {
  render() {
    return (
      <PayPalButton
        amount="1"
        currency="USD"
        shippingPreference="NO_SHIPPING"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID
            })
          });
        }}
        options={{
          clientId:
            "AUObFM4MpyAuxnhGanuWGWJ_HF9uSf-bnuQlPqLpHOuAcygfz5cm7vrAzGB7wSnrTOyVrYraD15j6mKg"
        }}
      />
    );
  }
}
