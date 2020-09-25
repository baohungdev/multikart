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
  mediaBig: {
    height: 160,
    paddingTop: "80.25%", // 16:9
  },
  mediaSmall: {
    marginTop: 20,
    height: 215,
    width: 180,
  },
  paper: {
    height: 700,
    width: 380,
  },
  control: {
    padding: theme.spacing(4),
  },
}));

export default function ProductDetail(props) {
  const classes = useStyles();

  const { id } = queryString.parse(props.location.search);

  const product = JSON.parse(localStorage.getItem("Products"))[[id - 1]];
  const [image, setImage] = useState(1);

  // to switch between image
  function switchImage(imageNumber) {
    setImage(imageNumber);
  }

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                {image === 1 ? (
                  <CardMedia
                    className={classes.mediaBig}
                    image={product.ProductImg}
                  />
                ) : (
                  <CardMedia
                    className={classes.mediaBig}
                    image="https://c8.alamy.com/comp/RAB9R0/writing-note-showing-we-ll-be-back-soon-business-photo-showcasing-taking-a-short-break-out-of-work-coming-back-in-a-few-blank-seal-with-shadow-for-la-RAB9R0.jpg"
                  />
                )}

                <div style={{ display: "flex" }}>
                  <CardMedia
                    style={{ cursor: "pointer" }}
                    className={classes.mediaSmall}
                    image="https://c8.alamy.com/comp/RAB9R0/writing-note-showing-we-ll-be-back-soon-business-photo-showcasing-taking-a-short-break-out-of-work-coming-back-in-a-few-blank-seal-with-shadow-for-la-RAB9R0.jpg"
                    onClick={() => switchImage(2)}
                  />
                  <CardMedia
                    style={{ marginLeft: "30px", cursor: "pointer" }}
                    className={classes.mediaSmall}
                    image={product.ProductImg}
                    onClick={() => switchImage(1)}
                  />
                </div>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <ProductDetailRightSide
                  product={product}
                  themeColor={props.themeColor}
                  setCart={props.setNoOfItems}
                />
              </Paper>
            </Grid>
          </Grid>
          <ProdutTabs themeColor={props.themeColor} />
        </Grid>
      </Grid>
    </>
  );
}
