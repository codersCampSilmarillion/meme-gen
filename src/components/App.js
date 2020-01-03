import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact to="/SearchMemes">
          <SearchMemes />
        </Route>
        <Route exact to="/UploadMeme">
          <UploadMeme />
        </Route>
        <Route exact to="/Favourites">
          <Favourites />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
