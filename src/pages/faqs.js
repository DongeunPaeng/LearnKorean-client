import React from 'react';
import Layout from '../layouts/index';

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

                <div className="entry-body">
                  <h3>얼마인가요?</h3>
                  <p>무료입니다.</p>
                  <h3>어떤 서비스인가요?</h3>
                  <p>메일로 공부하기 좋은 한글 기사와 문장을 보내드립니다.</p>
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
