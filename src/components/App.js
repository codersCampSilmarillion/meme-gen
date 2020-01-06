import React, { useState } from "react";
import NavBar from "./NavBar";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import MemesList from "./MemesList";
// import Favourites from "./Favourites";
// import UploadMeme from "./UploadMeme";
import "./css/app.css";

const App = () => {
  const [memes, setMemes] = useState([]);
  const onSearchSubmit = async term => {
    try {
      const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "9zdu5qM9hpvnV2VpvxbWEsBUt5bIxQJg",
          q: term
        }
      });
      setMemes(response.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact to="/SearchMemes">
          <div className="main">
            <div className="header">
              <Typography variant="h1">GIF SEARCHER</Typography>
              <Typography variant="h4">
                Insert a phrase, press Enter and search for your favorite GIF!
              </Typography>
              <SearchBar onSubmit={onSearchSubmit} />
            </div>
            <MemesList memes={memes} />
          </div>
        </Route>
        <Route exact to="/UploadMeme">
          {/* <UploadMeme /> */}
        </Route>
        <Route exact to="/Favourites">
          {/* <Favourites /> */}
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
