import React from 'react';
import Layout from '../layouts/index';

const SupportPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">Support</h1>
                </header>

                <div className="entry-body">
                  <p>궁금한 게 있으시면 언제든 연락 주세요.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default SupportPage;
