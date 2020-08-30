import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ContactPage from "./pages/contact";
import PremiumPage from "./pages/premium";
import TermsPage from "./pages/terms";
import IndexPage from "./pages";
import ThanksPage from "./pages/thanks";
import ByePage from "./pages/bye";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/premium" component={PremiumPage} />
          <Route exact path="/terms" component={TermsPage} />
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/thanks" component={ThanksPage} />
          <Route exact path="/bye" component={ByePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
