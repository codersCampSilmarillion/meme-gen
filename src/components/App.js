import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ChooseMemeTemplate from "./ChooseMemeTemplate";

const App = () => {
    return (
        <Router>
            <NavBar />
            <ChooseMemeTemplate />
            <Switch>
                {/* <Route exact to="/SearchMemes">
          <SearchMemes />
        </Route>
        <Route exact to="/UploadMeme">
          <UploadMeme />
        </Route>
        <Route exact to="/Favourites">
          <Favourites />
        </Route> */}
            </Switch>
        </Router>
    );
};

export default App;