import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";
import PayPalBtn from "../layout/PayPalButton";

class NewsletterForm extends Component {
  state = {
    success: undefined
  };

  paymentHandler = (details, data) => {
    alert("Transaction Completed");
  };

  sendAndRegisterEmail = emailAddress => {
    const email = emailAddress;
	  axios.get('https://learnkorean.cc/registerEmail').then(res => console.log(res)).catch(err => console.log(err));
    axios
      .post(`https://learnkorean.cc/registerEmail`, {
        email
      })
      .then(res => {
        console.log("successfully registered!");
      })
      .catch(err => console.log(err));
  };

  render() {
    const { className } = this.props;
    const classNames = classnames(
      "contact-form field field-grouped is-revealing",
      className
    );

    return (
      <div>
        <form className={classNames} onSubmit={this.sendAndRegisterEmail}>
          <div className="control control-expanded">
            <input
              className="input"
              type="email"
              name="user_email"
              placeholder="메일 주소를 입력하세요."
            />
          </div>
          <div className="control">
            <input
              className="button button-primary button-block button-shadow"
              type="submit"
              value="메일로 한글 배우기"
            />
          </div>
        </form>
        {this.state.success && (
          <div>
            <br />
            <p className="hero-paragraph" style={{ color: "blue" }}>
              {this.state.success}
            </p>
          </div>
        )}
        <br />
        <div className={"hero-form"}>
          <PayPalBtn
            amount={1}
            currency={"USD"}
            onSucceess={this.paymentHandler}
          />
        </div>
      </div>
    );
  }
}

export default NewsletterForm;
