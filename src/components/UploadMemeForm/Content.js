import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import useStyles from "./styles";

export default function SimpleDialog(props) {

  const classes = useStyles();

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');

  const { onClose, selectedValue, open, value } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  console.log("value: " + props.value);

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} aria-labelledby="max-width-dialog-title" maxWidth={maxWidth} fullWidth={fullWidth}>
      <DialogTitle id="simple-dialog-title">Your meme</DialogTitle>
      <div className={classes.content}>
        {" "}
        {/* <img src="https://i.imgflip.com/3lif8t.jpg"></img> */}
        <img src={value}></img>
        <p>
          <Button variant="contained" color="primary" href={value}>
            Share Your meme
          </Button>
        </p>
      </div>
    </Dialog>
  );
}

