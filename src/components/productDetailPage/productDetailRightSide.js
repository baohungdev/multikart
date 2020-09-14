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

  return (
    <>
      {console.log("check classes ")}
      <CardContent>
        <Typography variant="h4" component="h4" align="left">
          Trench Dress
        </Typography>
        <Typography variant="h7" color="error" component="h7" align="left">
          <del>$660</del> 50% off
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          align="left"
          color="textSecondary"
        >
          $300
        </Typography>
        <Divider Hard />
        <Typography variant="h7" component="h7">
          Select Size
        </Typography>
        <Typography variant="h6" component="h6">
          L M S
        </Typography>
        <Typography variant="h7" component="h7" color="error">
          In Stock
        </Typography>
        <Typography variant="h6" component="h6" color="textSecondary">
          Quantity
        </Typography>
        <div>
          <button onClick={handleIncrease}>+</button>
          <input value={Qty} />
          <button onClick={handleDecrease}>-</button>
        </div>
        <Divider Hard />
        <button>Add to cart</button>
        <Link to={`/checkout`}>
        <button>Buy Now</button>  
        </Link>
        <Divider Hard />
        <Typography variant="h6" component="h6">
          Product Details
        </Typography>
        <Typography variant="p" component="p" color="textSecondary">
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem,
        </Typography>
        <Divider Hard />
        <Typography variant="h6" component="h6">
          share It
        </Typography>
        <Typography variant="h6" component="h6">
          <FacebookIcon />
          <TwitterIcon />
          <GTranslateIcon />
          <InstagramIcon />
        </Typography>
      </CardContent>
    </>
  );
}
