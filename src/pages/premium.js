import React from "react";
import Layout from "../layouts/index";
import PayPalBtn from "../components/layout/PayPalButton";

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
                </div>
                <br />
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
};

export default PremiumPage;
