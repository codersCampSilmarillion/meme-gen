import React, { useState, useEffect } from "react";
import {
  GridList,
  Container,
  Typography,
  useMediaQuery,
  GridListTile,
  GridListTileBar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const ChooseMemeTemplate = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState([]);
  const mediaQueryMax320 = useMediaQuery("(max-width:320px)");
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      marginTop: "80px",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid rgba(0, 0, 0, 0.12)",
      padding: "10px"
    },
    gridList: {
      flexWrap: "nowrap",
      transform: "translateZ(0)"
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
    },
    tile: {
      cursor: "pointer"
    },
    selectedImage: {
      marginBottom: "30px",
      maxWidth: mediaQueryMax320 ? "270px" : "80%",
      border: "1px solid rgba(0, 0, 0, 0.12)"
    },
    selected: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px"
    }
  }));
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

  const FetchTemplates = async () => {
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
    FetchTemplates();
  }, []);

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={4}>
          {tiles}
        </GridList>
        <div className={classes.selected}>
          <Typography variant="h6">{selectedTemplate.name}</Typography>
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
