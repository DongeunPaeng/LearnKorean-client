import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import axios from "axios";

class PostForm extends Component {
  state = { success: undefined, data: undefined };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const post = event.target.elements[0].value;
    console.log(post);
    axios
      .post("http://localhost:9000/api/registerPost", {
        post
      })
      .then(res => {
        console.log("Successfully registered!");
      })
      .catch(err => console.log(err));
    event.target.elements[0].value = "";
    this.setState({ success: "전송 완료" });
  }

  handleClick() {
    axios
      .get("http://localhost:9000/api/registerPost")
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <MDBInput type="textarea" label="Post" rows="5" />
          <input
            className="button button-primary button-shadow button-block"
            type="submit"
            value="Save"
          />
        </form>
        {this.state.success && (
          <p>
            <br />
            {this.state.success}
          </p>
        )}
        <br />
        <button
          className="button button-primary button-shadow button-block"
          onClick={this.handleClick}
        >
          Bring
        </button>
        {this.state.data && (
          <p style={{ whiteSpace: "pre-line", fontSize: "15px" }}>
            <br />
            {this.state.data}
          </p>
        )}
      </div>
    );
  }
}

export default PostForm;
