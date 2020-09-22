import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ProductDesc from "./productDesc";
import ProductsList from "./productsThemeBox";
import Products from "./products";

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

export default function SpacingGrid() {
  const classes = useStyles();
  const [view, setView] = useState("Grid");
  const [noOfItems, setNoOfItems] = useState(4);

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
        {
          id: "7",
          Rating: "1.2",
          ProductName: "Women Maroon Lace Top ",
          Price: "1200",
          ProductImg:
            "https://react.pixelstrap.com/assets/images/fashion/product/2.jpg",
        },
        {
          id: "8",
          Rating: "2.2",
          ProductName: "Women Maroon Lace Top ",
          Price: "1800",
          ProductImg:
            "https://react.pixelstrap.com/assets/images/fashion/product/15.jpg",
        },
        {
          id: "9",
          Rating: "5",
          ProductName: " Campus Women's Alexa Navy",
          Price: "1300",
          ProductImg:
            "https://m.media-amazon.com/images/I/41KELU5hOHL._AC_SR250,230_.jpg",
        },
        {
          id: "10",
          Rating: "4",
          ProductName: "Wristband Band Straps",
          Price: "1000",
          ProductImg:
            "https://images-na.ssl-images-amazon.com/images/I/31-lmcH9SyL.jpg",
        },
        {
          id: "11",
          Rating: "3",
          ProductName: "Music Headphones Black Headset",
          Price: "400",
          ProductImg:
            "https://images-na.ssl-images-amazon.com/images/I/4123vWyzvYL.jpg",
        },
        {
          id: "12",
          Rating: "1.8",
          ProductName: "eWools Women's Winterwear ",
          Price: "350",
          ProductImg:
            "https://images-na.ssl-images-amazon.com/images/I/71b1qKWINNL._UX569_.jpg",
        },
        {
          id: "13",
          Rating: "3",
          ProductName: "aarbee Women's Cardigan",
          Price: "800",
          ProductImg:
            "https://images-na.ssl-images-amazon.com/images/I/71UxWG7-GML._UL1500_.jpg",
        },
        {
          id: "14",
          Rating: "4.4",
          ProductName: "Kalt Women's Acrylic V-Neck ",
          Price: "1700",
          ProductImg:
            "https://images-na.ssl-images-amazon.com/images/I/71uzrRGTiQL._UY741_.jpg",
        },
        {
          id: "15",
          Rating: "3.2",
          ProductName: "OPPO A5 2020",
          Price: "12000",
          ProductImg:
            "https://images-na.ssl-images-amazon.com/images/I/71wPwmxo2NL._SX679_.jpg",
        },
        {
          id: "16",
          Rating: "2.2",
          ProductName: "Lenovo 82C7A006IH V15 ADA Laptop ",
          Price: "40000",
          ProductImg:
            "https://images-na.ssl-images-amazon.com/images/I/51nA6K9URBL._SL1000_.jpg",
        },
      ])
    );
  }, []);

  return (
    <>
      <ProductDesc />
      <ProductsList view={view} setView={setView} setNoOfItems={setNoOfItems} />
      <Products view={view} noOfItems={noOfItems} />
    </>
  );
}
