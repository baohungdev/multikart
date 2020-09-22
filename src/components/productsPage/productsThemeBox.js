import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Divider } from "@material-ui/core";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ListIcon from "@material-ui/icons/List";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Filter2Icon from "@material-ui/icons/Filter2";
import Filter3Icon from "@material-ui/icons/Filter3";
import Filter4Icon from "@material-ui/icons/Filter4";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: "30.25%", // 16:9
  },
  paper: {
    height: 130,
    width: 1300,
  },

  control: {
    padding: theme.spacing(4),
  },

  avatar: {
    fontFamily: "-apple-system",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 100,
  },
}));

export default function ProductsThemeBox(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={8}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          <Grid item>
            <Paper className={classes.paper}>
              <p style={{ marginLeft: "550px", fontSize: "25px" }}>
                Showing Products
              </p>
              <Divider />

              <Grid container alignItems="center" className={classes.root}>
                <ViewComfyIcon
                  style={{ marginLeft: "20px", height: "70px" }}
                  onClick={() => props.setView("Grid")}
                />
                <ListIcon
                  style={{ marginLeft: "20px", height: "70px" }}
                  onClick={() => props.setView("List")}
                />
                {props.view === "Grid" ? (
                  <>
                    <Filter2Icon
                      style={{ marginLeft: "380px", height: "70px" }}
                      onClick={() => props.setNoOfItems(2)}
                    />
                    <Filter3Icon
                      style={{ marginLeft: "4px", height: "70px" }}
                      onClick={() => props.setNoOfItems(3)}
                    />
                    <Filter4Icon
                      style={{ marginLeft: "4px", height: "70px" }}
                      onClick={() => props.setNoOfItems(4)}
                    />
                  </>
                ) : null}
                {props.view === "Grid" ? (
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{ marginLeft: "40px" }}
                  />
                ) : (
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{ marginLeft: "500px" }}
                  />
                )}

                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={10}
                  style={{
                    width: "695px",
                    height: "72px",
                    marginLeft: "10px",
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Price :High To Low</MenuItem>
                  <MenuItem value={20}>Price :Low To High</MenuItem>
                  <MenuItem value={30}>Newest Items</MenuItem>
                  <MenuItem value={20}>Sort By Name A-Z</MenuItem>
                  <MenuItem value={30}>Sort By Name Z-A</MenuItem>
                </Select>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
