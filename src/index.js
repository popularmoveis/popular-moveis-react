import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// NAVIGATION
import Nav from "./components/nav/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact/ContactPage";
import Product from "./pages/Product/Product";

// COMPONENTS
import Footer from "./components/footer/Footer";

import "./index.css";

const App = () => (
  <div>
    <Nav />
    <div className="container">
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exaxt path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/product" component={Product} />
      </Switch>
    </div>
    <Footer />
  </div>

);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);