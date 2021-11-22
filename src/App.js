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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
          borderTop: "1px solid grey",
          marginTop: "0.5rem",
        }}
      >
        <p>Created by Lovelyo Yeremia</p>
        <div className="footer">
          <a
            className="fab fa-github"
            href="https://github.com/lovelyoyrmia"
            target="_blank"
          />
          <a
            className="fab fa-instagram"
            href="https://instagram.com/lovelyoyrmia"
            target="_blank"
          />
          <a
            className="fab fa-linkedin"
            href="https://www.linkedin.com/in/lovelyo-mokalu-a831aa175/"
            target="_blank"
          />
        </div>
      </div>
    </>
  );
}

export default App;
