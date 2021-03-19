import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Battlelog from "./Battlelog";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/player/:playerID" exact component={Profile} />
          <Route
            path="/player/:playerID/battlelog"
            exact
            component={Battlelog}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
