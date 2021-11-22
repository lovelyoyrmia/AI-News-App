import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Error,
  LatestNews,
  NewsByCategories,
  NewsBySources,
  NewsByTerms,
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/latest-news" component={LatestNews} />
          <Route path="/news-by-categories" component={NewsByCategories} />
          <Route path="/news-by-sources" component={NewsBySources} />
          <Route path="/News-by-terms" component={NewsByTerms} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
