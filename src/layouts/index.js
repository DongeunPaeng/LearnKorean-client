import React from 'react';

import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import Footer from '../components/layout/Footer';

const Layout = (props) => {
  return (
    <div className="body-wrap boxed-container">
      <Header title="한글 공부" />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </div>
  )
}

export default Layout;
