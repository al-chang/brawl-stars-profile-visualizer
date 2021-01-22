import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Player from "./Player";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/player/:playerID" component={Player} />
          <Route render={() => <h3>Not Found</h3>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
