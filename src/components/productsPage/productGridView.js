import React from "react";
import StarRatings from "react-star-ratings";
import { makeStyles } from "@material-ui/core/styles";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

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
  const themeColor = props.themeColor;

  console.log(" checking theme color inside each card", themeColor);

  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };
  return (
    <>
      <CardMedia
        className={classes.media}
        image={props.ProductObject.ProductImg}
        title="Paella dish"
      />
      <CardContent>
        <StarRatings
          rating={parseInt(props.ProductObject.Rating)}
          starDimension="18px"
          starSpacing="8px"
          starRatedColor="orange"
        />
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ color: themeColor }}
        >
          {props.ProductObject.ProductName}
        </Typography>
        <Typography variant="h5" component="h3" style={{ color: themeColor }}>
          $ {props.ProductObject.Price}.00
        </Typography>
      </CardContent>
    </>
  );
}
