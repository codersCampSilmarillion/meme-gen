import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

export default function SimpleDialog({ onClose, selectedValue, open, value }) {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="lg" fullWidth={true}>
      <DialogTitle>Your meme</DialogTitle>
      <div className={classes.content}>
        {loading ? <Typography variant="h6">Loading...</Typography> : null}
        <img
          src={value}
          alt="your meme"
          className={classes.image}
          onLoad={() => setLoading(false)}
          style={loading ? { display: "none" } : {}}
        />
        <p>
          <Button variant="contained" color="primary" href={value}>
            Share Your meme
          </Button>
        </p>
      </div>
    </Dialog>
  );
}
