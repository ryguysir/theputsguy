import "./App.css";
import Header from "./components/header/Header";
import AboutUs from "./components/aboutUs/AboutUs";
import Blog from "./components/blog/Blog";
import FAQ from "./components/faq/FAQ";
import FullPageBlog from "./components/blog/FullPageBlog";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  const [selectedLink, setSelectedLink] = useState(0);

  return (
    <div>
      <ParallaxProvider>
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
            <Route path="/blog/:id" exact component={FullPageBlog} />
            <Route
              path="/blog"
              render={(props) => <Blog {...props} setSelectedLink={setSelectedLink} />}
            />
            <Route
              path="/faq"
              exact
              render={(props) => <FAQ {...props} setSelectedLink={setSelectedLink} />}
            />
          </Switch>
        </Router>
      </ParallaxProvider>
    </div>
  );
}

export default App;
