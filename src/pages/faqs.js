import React from "react";
import Layout from "../layouts/index";

const FaqsPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">FAQ's</h1>
                </header>

                <div className="entry-body" style={{ wordBreak: "keep-all" }}>
                  <h3>한글 공부는 얼마인가요?</h3>
                  <p>기본적으로 무료 서비스입니다.</p>
                  <p>
                    1개월에 1달러($1/month)를 내면 한글 교정 서비스를 추가로
                    받을 수 있습니다.
                  </p>
                  <hr />
                  <h3>한글 교정 서비스는 어떻게 받나요?</h3>
                  <p>
                    PayPal로 결제를 하면, PayPal에 등록된 이메일로 한글 교정
                    서비스 등록 코드가 발급됩니다. (예: 홍길동전용코드)
                  </p>
                  <p>
                    해당 코드를 service@learnkorean.cc로 보내주시면, 저희가
                    답변을 드리고, 무제한 한글 교정 서비스가 시작됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default FaqsPage;
