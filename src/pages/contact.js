import React from "react";
import Layout from "../layouts/index";

const ContactPage = () => {
  return (
    <Layout className="footer-gray-color">
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h3 className="entry-title">Contact Us</h3>
                </header>

                <div className="entry-body">
                  <p>
                    <strong>service@learnkorean.cc</strong>로 무엇이든
                    물어보세요.
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

export default ContactPage;
