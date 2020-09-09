import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: "30.25%", // 16:9
  },
  paper: {
    height: 500,
    width: 1000,
  },
  control: {
    padding: theme.spacing(4),
  },
  avatar: {
    fontFamily: "-apple-system",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 100,
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={8}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={8}>
          <Grid item>
            <Paper className={classes.paper}>
              <CardMedia
                className={classes.media}
                image="http://themes.pixelstrap.com/multikart/assets/images/mega-menu/2.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="h4" color="textSecondary" component="h5">
                  Fashion
                </Typography>
                <Typography variant="h5" component="h5" color="textSecondary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  className={classes.avatar}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
