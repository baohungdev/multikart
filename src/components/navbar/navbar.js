import React, { useState, useEffect } from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import ListItemText from "@material-ui/core/ListItemText";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Cart from "../cart/cartPage";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import RemoveTwoToneIcon from "@material-ui/icons/RemoveTwoTone";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  paperGridColor: {
    height: 40,
    width: 40,
  },

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [CartItems, setCartItems] = useState(10);
  const [expand, setExpand] = useState([false, false, false, false, false]);
  const [colorsArray, setColorsArray] = useState([]);
  const themeColor = props.themeColor;

  const theme = useTheme();

  const isMenuOpen = Boolean(anchorEl);

  useEffect(() => {
    setColorsArray([
      "blue",
      "red",
      "yellow",
      "black",
      "purple",
      "green",
      "brown",
      "skyblue",
      "lightgreen",
      "orange",
      "pink",
      "Magenta",
    ]);
  }, []);

  const changeCartItems = () => {};

  const setExpandTab = (index) => {
    let arr = expand;
    arr[index] = !arr[index];
    setExpand(arr);
    console.log("check expand array", expand);
  };

  const handleProfileMenuOpen = (event) => {
    console.log("event", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleCartPage = () => {};

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Cart cart={true} changeCartItems={changeCartItems} />
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: themeColor }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Multikart theme
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              onClick={handleProfileMenuOpen}
            >
              <Badge badgeContent={CartItems} color="secondary">
                <ShoppingCartIcon onClick={handleCartPage} />
              </Badge>
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
              style={{ marginLeft: "20px" }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMenu}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <p style={{ fontSize: "20px", fontFamily: "Georgia" }}>Close</p>
        </div>
        <Divider />
        <List>
          {["Color Option", "Layout", "Shop"].map((text, index) => (
            <>
              {!expand[index] ? (
                <ListItem button key={text} onClick={() => setExpandTab(index)}>
                  <ListItemText primary={text} />
                  <AddCircleOutlineTwoToneIcon style={{ marginLeft: "20px" }} />
                </ListItem>
              ) : (
                <>
                  <ListItem
                    button
                    key={text}
                    onClick={() => setExpandTab(index)}
                  >
                    <ListItemText primary={text} />
                    <RemoveTwoToneIcon style={{ marginLeft: "20px" }} />
                  </ListItem>
                  <Grid item>
                    <Paper>
                      <Grid container justify="center" spacing={2}>
                        {colorsArray.map((color, i) => (
                          <Grid key={i} item>
                            <Paper
                              onClick={() =>
                                props.setThemeColor(colorsArray[i])
                              }
                              className={classes.paperGridColor}
                              style={{
                                backgroundColor: color,
                                cursor: "pointer",
                              }}
                            ></Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </Paper>
                  </Grid>
                </>
              )}
            </>
          ))}
        </List>
        <Divider />
        <List>
          {[
            "Purchase Multikart Now !",
            "Multikart Angular",
            "Multikart HTML",
            "MMultikart Shopify",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
