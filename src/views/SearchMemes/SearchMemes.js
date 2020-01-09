import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import MemesList from "../../components/MemesList";
import axios from "axios";
import "../../components/css/app.css";
import Typography from "@material-ui/core/Typography";

const SearchMemes = () => {
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
  );
};

export default SearchMemes;
