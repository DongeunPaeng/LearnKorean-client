import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

class PayPalBtn extends React.Component {
  render() {
    const { amount, onSuccess, currency } = this.props;
    return (
      <PayPalButton
        amount={amount}
        currency={currency}
        onSuccess={(details, data) => onSuccess(details, data)}
        options={{
          clientId: "ATSQlgjK7gxTkbKtqvY8hvufgP9uZyWAL8zSFLdfw56gIrR_I5X2vRMeFmXRHXwSP8vgmhnK5_iB8kEO"
        }}
      />
    );
  }
}
export default PayPalBtn;
