// React
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// Components
import Header from "../components/Header";
import Post from "../pages/Post";
// Global Styles
import GlobalStyles from "../assets/styles/globalStyles";

const App = () => (
  <Router>
    <GlobalStyles />
    <Header />
    <Switch>
      <Route exact path="" component={Post} />
    </Switch>
  </Router>
);

export default App;
