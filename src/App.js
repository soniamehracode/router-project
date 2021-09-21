import React from "react";
import Nav from "./components/nav/Nav";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Company from "./components/company/Company";
import Shop from "./components/shop/Shop";
import OnlineTraining from "./components/online/OnlineTraining";
import Login from "./components/login/Login";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/OnlineTraining">
            <OnlineTraining />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
