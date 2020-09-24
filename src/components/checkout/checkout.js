import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import BillDetails from "../checkout/billingDetails/billingDetails";
import Paper from "@material-ui/core/Paper";
import CartSummary from "./cartSummary/cartSummary";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 200,
  },
  paper: {
    height: 700,
    width: 550,
  },
  control: {
    padding: theme.spacing(4),
  },
}));

export default function Checkout(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                <BillDetails themeColor={props.themeColor} />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <CartSummary themeColor={props.themeColor} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
