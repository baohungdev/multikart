import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "./product";
import Paper from "@material-ui/core/Paper";
import ProductDesc from "./productDesc";
import history from "../history";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "5.25%",
    flexGrow: 1,
  },
  paper: {
    height: 400,
    width: 280,
  },
  control: {
    padding: theme.spacing(4),
  },
}));

// cart price not updating correctly on deleting the item from cart
// useEffect/component did mount not able to cal correct cart price as it's getting empty arry on cal price ////function while on rendering it has cart array ??
//cart menu from tabs and cart page should work synchronously

//update deatils in tabs section
// list view of product to added in theme
//badge bumber for cart icon should update according to number of items in cart
//notification on del and adding item to cart

//theme and color for complete product

export default function SpacingGrid() {
  const classes = useStyles();
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    localStorage.setItem(
      "Products",
      JSON.stringify([
        {
          id: "1",
          Rating: "2",
          ProductName: " Blooming Beauty Tiered Maxi Skirt",
          Price: "500",
          ProductImg:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4914118/2018/6/7/55487e87-b14b-49a8-a0ac-f7d88b78a5051528372773678-HERENOW-Women-Skirts-1971528372773513-1.jpg",
        },
        {
          id: "2",
          Rating: "5",
          ProductName: "Men Red & Blue Checked Casual Shirt",
          Price: "1000",
          ProductImg:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2042528/2017/9/28/11506599316866-Mast--Harbour-Men-Red--Blue-Regular-Fit-Checked-Casual-Shirt-7991506599316924-1.jpg",
        },
        {
          id: "3",
          Rating: "3",
          ProductName: "Men White Accessory Gift Set",
          Price: "400",
          ProductImg:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/3/20/e20d710c-d888-456e-9fef-cf9dd23c0aff1553021518562-1.jpg",
        },
        {
          id: "4",
          Rating: "1.5",
          ProductName: "Wool hat",
          Price: "350",
          ProductImg:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/8/17/a2f2149a-bd12-478a-9d7e-2b2e18cca2771565998886320-1.jpg",
        },
        {
          id: "5",
          Rating: "3",
          ProductName: "Unisex Oval Sunglasses ",
          Price: "200",
          ProductImg:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2384020/2018/3/29/11522322669960-Mast--Harbour-Unisex-Sunglasses-4101522322669856-1.jpg",
        },
        {
          id: "6",
          Rating: "4.2",
          ProductName: "Women Maroon Lace Top ",
          Price: "1500",
          ProductImg:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6543994/2018/6/14/88f12dec-cb1c-4728-9da2-cba4ac0fd4091528970770917-Style-Quotient-Women-Maroon-Solid-Top-4121528970770715-1.jpg",
        },
      ])
    );
    setProducts(JSON.parse(localStorage.getItem("Products")));
  }, []);

  // const SelectProduct = (cardId) => {
  //   history.push({
  //     pathname: `/Productdetail`,
  //   });
  //   window.location.reload();
  // };

  return (
    <>
      <ProductDesc />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={8}>
            {Products.map((ProductObj) => (
              <Grid key={ProductObj.id} item>
                <Paper
                  // onClick={() => SelectProduct(ProductObj.id)}
                  className={classes.paper}
                >
                  <Link to={`/Productdetail/?id=${ProductObj.id}`}>
                    <Product ProductObject={ProductObj} />
                  </Link>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
