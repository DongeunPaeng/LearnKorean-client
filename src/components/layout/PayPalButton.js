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
            "ATSQlgjK7gxTkbKtqvY8hvufgP9uZyWAL8zSFLdfw56gIrR_I5X2vRMeFmXRHXwSP8vgmhnK5_iB8kEO"
        }}
      />
    );
  }
}
