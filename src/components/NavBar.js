import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const StyledLinkLight = styled(Link)({
  textDecoration: "none",
  color: "#ffffff"
});

const StyledLinkDark = styled(Link)({
  textDecoration: "none",
  color: "rgba(0, 0, 0, 0.87)"
});

const menuItems = ["Search Memes", "Upload Meme", "Favourites"];

const menuItemsButtons = menuItems.map(text => {
  return (
    <Button key={text}>
      <StyledLinkLight to={`/${text.replace(/ +/g, "")}`}>
        {text}
      </StyledLinkLight>
    </Button>
  );
});

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const mediaQuery = useMediaQuery("(max-width:550px)");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const hamburger = (
    <IconButton
      edge="end"
      color="inherit"
      aria-label="menu"
      onClick={handleDrawerOpen}
    >
      <MenuIcon />
    </IconButton>
  );

  return (
    <AppBar>
      <StyledToolbar>
        <Typography variant="h6">
          <StyledLinkLight to="/">Meme-Gen</StyledLinkLight>
        </Typography>
        {mediaQuery ? hamburger : <div>{menuItemsButtons}</div>}
        <Drawer open={open} onClose={handleDrawerClose}>
          <List>
            {menuItems.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText>
                  <StyledLinkDark
                    to={`/${text.replace(/ +/g, "")}`}
                    onClick={handleDrawerClose}
                  >
                    {text}
                  </StyledLinkDark>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
