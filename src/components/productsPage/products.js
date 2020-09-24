import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProductGrid from "./productGridView";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import ProductList from "./productListView";

const setHeight = (noOfItems) => {
  //switch case or Hashmap could be used for this
  if (noOfItems === 2) {
    return 600;
  }
  if (noOfItems === 3) {
    return 500;
  }
  if (noOfItems === 4) {
    return 400;
  }
};

const setWidth = (noOfItems) => {
  if (noOfItems === 2) {
    return 600;
  }
  if (noOfItems === 3) {
    return 400;
  }
  if (noOfItems === 4) {
    return 300;
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "5.25%",
    flexGrow: 1,
  },
  paperGrid: {
    height: setHeight,
    width: setWidth,
  },
  paperList: {
    height: 300,
    width: 1300,
  },
  control: {
    padding: theme.spacing(4),
  },
}));

export default function Products(props) {
  const classes = useStyles(props.noOfItems);
  const [Products, setProducts] = useState([]);
  const [changeView, setChangeView] = useState();

  useEffect(() => {
    setChangeView(props.noOfItems);
    if (changeView) {
      setHeight(changeView);
    }
    if (changeView) {
      setWidth(changeView);
    }
  }, [props.noOfItems]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("Products")));
  }, []);

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          {props.view === "Grid" ? (
            <Grid container justify="center" spacing={6}>
              {Products.map((ProductObj) => (
                <Grid key={ProductObj.id} item>
                  <Paper
                    // onClick={() => SelectProduct(ProductObj.id)}
                    className={classes.paperGrid}
                  >
                    <Link
                      to={`/Productdetail/?id=${ProductObj.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <ProductGrid
                        ProductObject={ProductObj}
                        themeColor={props.themeColor}
                      />
                    </Link>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container justify="center" spacing={8}>
              {Products.map((ProductObj) => (
                <Grid key={ProductObj.id} item>
                  <Paper
                    // onClick={() => SelectProduct(ProductObj.id)}
                    className={classes.paperList}
                  >
                    <Link
                      to={`/Productdetail/?id=${ProductObj.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <ProductList
                        ProductObject={ProductObj}
                        themeColor={props.themeColor}
                      />
                    </Link>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
}
