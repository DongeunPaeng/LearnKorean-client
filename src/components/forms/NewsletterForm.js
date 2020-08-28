import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";

class NewsletterForm extends Component {
  state = {
    success: undefined
  };

  sendAndRegisterEmail = e => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    axios
      .post(`https://learnkorean.cc/registerEmail`, {
        email,
        pro: this.props.pro ? 1 : 0
      })
      .then(res => {
        console.log("Successfully registered!");
      })
      .catch(err => console.log(err));
    e.target.elements[0].value = "";
    this.setState(() => ({ success: "메일이 전송되었습니다!" }));
  };

  render() {
    const { className, submit, from } = this.props;
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
              value={submit}
            />
          </div>
        </form>
        <p style={{ marginLeft: "15px", marginTop: "5px", fontSize: "15px" }}>
          하루 한 번, 한글 실력을 키우세요.
        </p>
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
