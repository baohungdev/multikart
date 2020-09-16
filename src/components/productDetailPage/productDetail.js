import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import queryString from "query-string";
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

export default function SpacingGrid({ location }) {
  const classes = useStyles();

  const { id } = queryString.parse(location.search);
  const product = JSON.parse(localStorage.getItem("Products"))[[id - 1]];
  console.log("products", product);

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image={product.ProductImg}
                />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <ProductDetailRightSide product={product} />
              </Paper>
            </Grid>
          </Grid>
          <ProdutTabs />
        </Grid>
      </Grid>
    </>
  );
}
