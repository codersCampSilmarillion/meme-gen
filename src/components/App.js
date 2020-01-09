import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Favourites from "./Favourites";
import UploadMeme from "../views/UploadMeme";
import "./css/app.css";
import SearchMemes from "../views/SearchMemes";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/SearchMemes">
          <SearchMemes />
        </Route>
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
