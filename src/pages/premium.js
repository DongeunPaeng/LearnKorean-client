import React, { Component } from "react";
import Layout from "../layouts/index";
import PayPalBtn from "../components/layout/PayPalButton";
import NewsletterForm from "../components/forms/NewsletterForm";
import { setupScrollReveal } from "../assets/js/main.js";

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
                        PRO SERVICE는 1개월에 2달러입니다. (
                        <strong>$2/month</strong>)
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
                    <strong>$2.00 </strong>
                  </span>
                  <span>USD</span>
                  <br />
                  <span style={{ fontSize: "15px" }}>Every month</span>

                  <hr />
                  <NewsletterForm pro={1} className="hero-form" submit="가입" />
                  <PayPalBtn />
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
