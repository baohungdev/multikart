import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProductGrid from "./productGridView";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

import ProductList from "./productListView";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "5.25%",
    flexGrow: 1,
  },
  paperGrid: {
    height: 400,
    width: 280,
  },
  paperList: {
    height: 300,
    width: 1080,
  },
  control: {
    padding: theme.spacing(4),
  },
}));

export default function Products(props) {
  const classes = useStyles();
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("Products")));
  }, []);
  console.log("checking my view props", props);

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          {props.view === "Grid" ? (
            <Grid container justify="center" spacing={8}>
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
                      <ProductGrid ProductObject={ProductObj} />
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
                      <ProductList ProductObject={ProductObj} />
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
