import React from "react";
import Layout from "../layouts/index";

const ByePage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h3 className="entry-title mt-0">
                    PRO SERVICE가 해지되었습니다.
                  </h3>
                </header>
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

export default ByePage;
