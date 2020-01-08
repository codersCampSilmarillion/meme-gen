import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Content from "./Content.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    margin: "5px"
  },
  btn: {
    width: "200px",
    marginRight: "auto",
    marginLeft: "auto"
  }
});

const objToQuery = obj => {
  const data = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + data.join("&");
};
function UploadMemeForm({ selectedTemplate }) {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [open, setOpen] = useState(false);
  const [memeUrl, setMemeUrl] = useState();
  const classes = useStyles();

  const memeData = {
    template_id: selectedTemplate,
    text0: topText,
    text1: bottomText,
    username: "silmarillion",
    password: "1silmarillion23"
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = value => {
    setOpen(false);
    setMemeUrl();
  };
  return (
    <div>
      <form
        className={classes.form}
        onSubmit={async e => {
          e.preventDefault();
          try {
            const response = await fetch(
              `https://api.imgflip.com/caption_image${objToQuery(memeData)}`
            );
            const json = await response.json();
            setMemeUrl(json.data.url);
            console.log(memeUrl);
          } catch (error) {
            console.error(error);
          }
        }}
        autoComplete="off"
      >
        <TextField
          label="Top text"
          variant="outlined"
          type="text"
          name="topText"
          onChange={e => setTopText(e.target.value)}
          className={classes.input}
        />
        <TextField
          label="Bottom text"
          variant="outlined"
          type="text"
          name="bottomText"
          onChange={e => setBottomText(e.target.value)}
          className={classes.input}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={handleClickOpen}
          className={classes.btn}
        >
          Generate meme
        </Button>
        <Content open={open} onClose={handleClose} value={memeUrl} />
      </form>
    </div>
  );
}
export default UploadMemeForm;
