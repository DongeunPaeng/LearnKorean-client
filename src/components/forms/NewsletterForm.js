import React, { Component } from "react";
import classnames from "classnames";
import emailjs from "emailjs-com";
import axios from "axios";

class NewsletterForm extends Component {
  state = {
    success: undefined
  };

  registerEmail = emailAddress => {
    const email = emailAddress;
    axios
      .post(`http://13.209.5.57:9000/registerEmail`, { email })
      .then(res => {
        console.log("successfully registered!");
      })
      .catch(err => console.log(err));
  };

  sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_RVgqp81o",
        e.target,
        "user_ehGiMflWhsbYuKhxjASx8"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    const email = e.target.elements[0].value;
    e.target.elements[0].value = "";
    this.setState(() => ({
      success: "메일이 전송되었습니다!"
    }));
    this.registerEmail(email);
  };

  render() {
    const { className } = this.props;
    const classNames = classnames(
      "contact-form field field-grouped is-revealing",
      className
    );

    return (
      <div>
        <form className={classNames} onSubmit={this.sendEmail}>
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
      </div>
    );
  }
}

export default NewsletterForm;
