import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
//7046
//g
import Paper from "@material-ui/core/Paper";
import ProdutTabs from "./productDetailTab";
import ProductDetailRightSide from "./productDetailRightSide";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 160,
    paddingTop: "80.25%", // 16:9
  },
  paper: {
    height: 700,
    width: 380,
  },
  control: {
    padding: theme.spacing(4),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image="https://react.pixelstrap.com/assets/images/fashion/product/24.jpg"
                />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <ProductDetailRightSide />
              </Paper>
            </Grid>
          </Grid>
          <ProdutTabs />
        </Grid>
      </Grid>
    </>
  );
}
