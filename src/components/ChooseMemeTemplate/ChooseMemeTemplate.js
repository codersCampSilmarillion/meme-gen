import React, { useState, useEffect } from "react";
import {
  GridList,
  Container,
  Typography,
  useMediaQuery,
  GridListTile,
  GridListTileBar
} from "@material-ui/core";
import useStyles from "./styles";

const ChooseMemeTemplate = ({ selectedTemplate, setSelectedTemplate }) => {
  const [templates, setTemplates] = useState([]);

  const classes = useStyles();

  const tiles = templates.map(tile => {
    return (
      <GridListTile
        key={tile.id}
        className={classes.tile}
        onClick={() => setSelectedTemplate(tile)}
      >
        <img className={classes.image} src={tile.url} alt={tile.name} />
        <GridListTileBar title={tile.name} className={classes.titleBar} />
      </GridListTile>
    );
  });

  const fetchTemplates = async () => {
    const url = "https://api.imgflip.com/get_memes";
    try {
      const response = await fetch(url);
      const json = await response.json();
      setTemplates(json.data.memes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  const mediaQueryMax550 = useMediaQuery("(max-width: 550px)");

  const imagesInList = () => {
    if (mediaQueryMax550) return 2;
    return 3;
  };
  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={imagesInList()}>
          {tiles}
        </GridList>
        <div className={classes.selected}>
          <Typography variant="h6" className={classes.selectedTitle}>
            {selectedTemplate.name}
          </Typography>
          <img
            className={classes.selectedImage}
            alt={selectedTemplate.name}
            src={selectedTemplate.url}
          />
        </div>
      </div>
    </Container>
  );
};

export default ChooseMemeTemplate;
