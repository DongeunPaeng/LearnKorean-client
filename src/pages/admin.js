import React from "react";
import PostForm from "../components/forms/PostForm"

const AdminPage = () => {
  return (
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <PostForm />
              </div>
            </div>
          </div>
        </div>
      </article>
  );
};

export default AdminPage;
