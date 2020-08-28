import React, { Component } from "react";
import Layout from "../layouts/index";
import PayPalBtn from "../components/layout/PayPalButton";
import NewsletterForm from "../components/forms/NewsletterForm";
import { setupScrollReveal } from "../assets/js/main.js";

<<<<<<< HEAD
class PremiumPage extends Component {
  componentDidMount() {
    setupScrollReveal();
  }

  render() {
    return (
      <Layout>
        <article className="entry">
          <div className="container">
            <div className="entry-inner">
              <div className="entry-content">
                <div className="container-sm">
                  <header className="entry-header">
                    <h3 className="entry-title mt-0">PRO SERVICE</h3>
                  </header>
                  <div className="entry-body" style={{ wordBreak: "keep-all" }}>
                    <p>PRO 가입 절차:</p>
                    <ul style={{ fontSize: "16px" }}>
                      <li>
                        PRO SERVICE는 1개월에 1달러입니다. (
                        <strong>$1/month</strong>)
                      </li>
                      <li>
                        PayPal 결제를 누르면 구독 서비스(subscription) 가입
                        절차가 시작됩니다.
                      </li>
                      <li>
                        결제가 완료되면 해당 이메일 주소는 즉시 PRO 계정이
                        됩니다.
                      </li>
                    </ul>
                    <p>PRO 부가 혜택:</p>
                    <ul style={{ fontSize: "16px" }}>
                      <li>
                        매주 2회 발송되는 한글 문장과 더불어,{" "}
                        <strong>단어와 표현에 대한 설명이 추가</strong>됩니다.
                      </li>
                      <li>
                        발송된 문장을{" "}
                        <strong>쉬운 문장으로 바꾸어 해석을 제공</strong>합니다.
                      </li>
                      <li>
                        PRO 가입자는 service@learnkorean.cc로 메일을 보내{" "}
                        <strong>더 자세한 설명을 요청</strong>할 수 있습니다.
                      </li>
                      <li>언제든지 취소가 가능합니다.</li>
                    </ul>
                  </div>
                  <br />
                  <span style={{ fontSize: "30px", color: "black" }}>
                    <strong>$1.00 </strong>
                  </span>
                  <span>USD</span>
                  <br />
                  <span style={{ fontSize: "15px" }}>Every month</span>

                  <hr />
                  <NewsletterForm
                    pro={1}
                    className="hero-form"
                    submit="가입"
                  />
                  <PayPalBtn />
=======
const PremiumPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h3 className="entry-title mt-0">PRO SERVICE</h3>
                </header>
                <div className="entry-body" style={{ wordBreak: "keep-all" }}>
                  <p>
                    부담 없는 PRO SERVICE로 한글 실력을 쉽게 향상시켜보세요.
                    <br />
                    PRO SERVICE는 1개월에 1달러입니다. (
                    <strong>$1/month</strong>)
                  </p>
                  <p>
                    PayPal 결제를 누르면 구독 서비스(subscription) 가입 절차가
                    시작됩니다.
                    <br />
                    결제가 완료된 이용자에게는 PRO SERVICE 이메일이 발송됩니다.
                  </p>
                  <p>
                    PRO SERVICE 이용자는 무료 이용자와 달리, 매주 발송되는
                    이메일에 학습 내용이 추가됩니다.
                  </p>
                  <p>
                    [추가 서비스] 단어, 표현에 대한 설명뿐 아니라, '한글 공부' 운영진에게
                    첨삭(paper review/comment service)을 요청할 수도 있습니다.
                  </p>
>>>>>>> 172bec4fa07263605905a78ea76ba21b74f4fcc6
                </div>
              </div>
              <div className="entry-media">
                <img
                  src="https://images.unsplash.com/photo-1506809211073-d0785aaad75e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
                  alt=""
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  }}
                />
              </div>
            </div>
          </div>
        </article>
      </Layout>
    );
  }
}

export default PremiumPage;
