import React from "react";
import Layout from "../layouts/index";

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

                <div className="entry-body">
                  <p>
                    팽박사의 한글 교실은 한글을 배우고자 하는 전세계인을 위한
                    무료 한글 교육 서비스입니다.
                  </p>
                  <p>
                    이메일을 등록하면 한글로 된 좋은 글들, 공부하기 좋은
                    자료들과 한글 단어들을 보내드립니다.
                  </p>
                  <hr />
                  <p>
                    운영자 블로그:{" "}
                    <a href="https://dongeun.co">https://dongeun.co</a>
                  </p>
                  <hr />
                  <p>한글을 배우세요. 그리고 한국에 놀러오세요!</p>
                </div>
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
