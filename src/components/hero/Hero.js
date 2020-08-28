import React, { Component } from "react";
import { setupScrollReveal } from "../../assets/js/main.js";
import NewsletterForm from "../forms/NewsletterForm";

class Hero extends Component {
  componentDidMount() {
    setupScrollReveal();
  }

  render() {
    const { title } = this.props;
    const Illustration = this.props.illustration;

    return (
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy" style={{ paddingTop: "15px" }}>
              <div className="container-sm">
                <h1 className="hero-title h2-mobile mt-0 is-revealing">
                  {title}
                </h1>
                <span
                  style={{ wordBreak: "keep-all" }}
                  className="hero-paragraph is-revealing"
                >
                  <p>
                    메일을 등록하고, 매일 아침 책 속의 좋은 한글 문장들을
                    받아보세요.
                  </p>
                  <p>
                    <strong>한글 공부 200% 사용법</strong>
                  </p>
                  <ul>
                    <li key={1}>메일 주소를 등록한다.</li>
                    <li key={2}>문장을 따라 읽고, 궁금한 점은 메일로 물어본다.</li>
                    <li key={3}>
                      <strong>(PRO)</strong> 5줄 이상, 단어와 고급 표현에 대한
                      설명이 포함된 글로 실력을 한 단계 상승한다.
                    </li>
                  </ul>
                </span>
              </div>

              <NewsletterForm className="hero-form" submit="가입 (무료)" />
            </div>

            <div className="hero-illustration">
              <Illustration />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
