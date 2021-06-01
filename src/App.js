import "./App.css";
import Header from "./components/header/Header";
import AboutUs from "./components/aboutUs/AboutUs";
import Blog from "./components/blog/Blog";
import FAQ from "./components/faq/FAQ";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [selectedLink, setSelectedLink] = useState(0);
  const scrollHandler = () => {
    if (document.getElementsByClassName("basics-textbox-container")[0] === undefined) {
      return;
    }
    let elem = document.getElementsByClassName("basics-textbox-container")[0];

    elem.style.transform = "translateY(" + window.scrollY * 0.5 + "px)";
  };
  window.addEventListener("scroll", function () {
    window.requestAnimationFrame(scrollHandler);
  });

  return (
    <div>
      <Router>
        <Header selectedLink={selectedLink} />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <AboutUs {...props} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
            )}
          />

          <Route
            path="/blog"
            exact
            render={(props) => <Blog {...props} setSelectedLink={setSelectedLink} />}
          />
          <Route
            path="/faq"
            exact
            render={(props) => <FAQ {...props} setSelectedLink={setSelectedLink} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
