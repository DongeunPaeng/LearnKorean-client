import React from "react";
import Layout from "../layouts/index";

const ThanksPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h3 className="entry-title mt-0">
                    PRO SERVICE 가입을 축하합니다.
                  </h3>
                </header>
                <div className="entry-body" style={{ wordBreak: "keep-all" }}>
                  <p>향후 서비스 내용:</p>
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
                    <li>이전까지의 이메일 PRO 버전을 확인할 수 있습니다.</li>
                    <li>언제든지 취소가 가능합니다.</li>
                  </ul>
                </div>
                <br />
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

export default ThanksPage;
