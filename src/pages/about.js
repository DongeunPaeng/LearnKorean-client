import React from "react";
import Layout from "../layouts/index";
import PayPalBtn from "../components/layout/PayPalButton"

const AboutPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">About</h1>
                </header>
                <div className="entry-body" style={{ wordBreak: "keep-all" }}>
                  <p>
                    한글 공부는 한글을 배우고자 하는 사람들을 위한 무료 한글
                    메일 발송 서비스입니다.
                  </p>
                  <p>
                    이메일을 등록하면 일주일에 두 번, 한글로 된 짧은 글들을
                    보내드립니다.
                  </p>
                  <hr />
                  <h3>유료 서비스 안내</h3>
                  <p>1개월에 1달러($1/month)를 내고, 한글 교정 서비스가 포함된 유료 서비스에 가입해보세요.</p>
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

export default AboutPage;
