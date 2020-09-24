import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "../productDetailPage/productDetailRightSide.css";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 380,
  },
  media: {
    height: 130,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [Qty, setQty] = useState(1);
  const themeColor = props.themeColor;

  console.log("check theme color buttons ", themeColor);

  const handleIncrease = () => {
    if (Qty < 6) {
      setQty(Qty + 1);
    }
  };
  const handleDecrease = () => {
    if (Qty > 1) {
      setQty(Qty - 1);
    }
  };

  const addToCart = () => {
    if (localStorage.getItem("cartArray") === null) {
      const arr = props.product;
      arr.qty = Qty;
      arr.totalPrice = props.product.Price * Qty;
      let myCart = [];
      myCart.push(arr);

      localStorage.setItem("cartArray", JSON.stringify(myCart));
      alert("ADDED TO CART, alert box will be soon replaced by modal ");
    } else {
      const arr = props.product;
      arr.qty = Qty;
      arr.totalPrice = props.product.Price * Qty;
      let mycart = JSON.parse(localStorage.getItem("cartArray"));
      console.log("check cart items ", mycart);

      let needTopush = true;

      mycart.map((item) => {
        if (item.id == props.product.id) {
          needTopush = false;
          item.qty = item.qty + props.product.qty;
          console.log("check my cart", mycart);
          return;
        }
      });
      if (needTopush) {
        mycart.push(arr);
      }

      localStorage.setItem("cartArray", JSON.stringify(mycart));
      alert("ADDED TO CART, alert box will be soon replaced by modal ");
    }
  };

  return (
    <>
      <CardContent>
        <Typography variant="h4" component="h4" align="left">
          {props.product.ProductName}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          component="h7"
          align="left"
          style={{ color: themeColor }}
        >
          <del>{props.product.Price * 2}</del> 50% off
        </Typography>
        <Typography variant="h5" component="h5" align="left">
          {props.product.Price}
        </Typography>
        <Divider Hard />
        <Typography variant="h7" component="h7">
          Select Size
        </Typography>
        <Typography variant="h6" component="h6">
          L M S
        </Typography>
        <Typography variant="h7" component="h7" style={{ color: themeColor }}>
          In Stock
        </Typography>
        <Typography variant="h6" component="h6">
          Quantity
        </Typography>
        <div style={{ display: "flex", height: "40px" }}>
          <Button
            variant="contained"
            onClick={handleIncrease}
            style={{ color: themeColor }}
          >
            <p
              style={{
                fontFamily: "Monospace ,Courier New",
                fontSize: "40px",
              }}
            >
              +
            </p>
          </Button>
          <input
            style={{
              width: "40px",
              height: "17px",
              marginTop: "1px",
              textAlign: "center",
            }}
            value={Qty}
          />
          <Button
            style={{ color: themeColor }}
            variant="contained"
            onClick={handleDecrease}
            style={{ marginRight: "20px" }}
          >
            <p
              style={{
                fontFamily: "Monospace ,Courier New",
                fontSize: "40px",
              }}
            >
              -
            </p>
          </Button>
        </div>
        <Divider Hard style={{ marginTop: "10px" }} />
        <div style={{ marginTop: "10px" }}>
          <Button
            variant="contained"
            style={{ color: themeColor }}
            onClick={addToCart}
          >
            Add to cart
          </Button>
          <Link to={`/checkout`} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ color: themeColor, marginLeft: "10px" }}
            >
              Buy Now
            </Button>
          </Link>
        </div>
        <Divider Hard Hard style={{ marginTop: "10px" }} />
        <Typography variant="h5" component="h5" style={{ color: themeColor }}>
          Product Details
        </Typography>
        <Typography variant="p" component="p">
          <p
            style={{
              fontFamily: "Monospace ,Courier New",
            }}
          >
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem,
          </p>
        </Typography>
        <Divider Hard />
        <Typography variant="h5" component="h5" style={{ color: themeColor }}>
          Share It
        </Typography>
        <Typography>
          <FacebookIcon style={{ color: "blue" }} />
          <TwitterIcon style={{ color: "skyblue" }} />
          <GTranslateIcon style={{ color: "red" }} />
          <InstagramIcon style={{ color: "pink" }} />
        </Typography>
      </CardContent>
    </>
  );
}
