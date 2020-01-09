import React, { useState } from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Favourites from "./Favourites";
import UploadMeme from "../views/UploadMeme";
import RandomMeme from "./randomMeme";
import ErrorBoundary from "./randomMeme/ErrorBoundary";
import "./css/app.css";

const App = () => {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/SearchMemes"></Route>
          <Route exact path="/UploadMeme">
            <UploadMeme />
          </Route>
          <Route exact path="/Favourites">
            {/* <Favourites /> */}
          </Route>
        </Switch>
      </Router>
  );
};
export default App;
