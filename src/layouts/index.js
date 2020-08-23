import React from 'react';

import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import Footer from '../components/layout/Footer';

const Layout = (props) => {
  return (
    <div className="body-wrap boxed-container">
      <Header title="팽박사 한글 교실" />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </div>
  )
}

export default Layout;
