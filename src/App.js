import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Error } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Error} />
        </Switch>
      </Router>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
          borderTop: "1px solid grey",
          marginTop: "1rem",
        }}
      >
        <p>
          Created by Lovelyo Yeremia <i className="fas fa-facebook" />
        </p>
      </div>
    </>
  );
}

export default App;
