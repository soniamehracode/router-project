import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import About from "./pages/about/About";
import Blog from "./pages/Blog";
import Contact from "./pages/contact/Contact";
import SinglePost from "./pages/singlepost/SinglePost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/blogData">
            <Blog />
            <SinglePost />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
