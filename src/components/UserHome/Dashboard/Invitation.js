import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import imgsrc from "./Image.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 380,
    maxHeight: 410,
    // opacity: "0.3",
  },
  media: {
    height: "200px",
    width: "200px",
    margin: "auto",
    borderRadius: "100%",
    marginTop: "1rem",
  },

  master: {
    position: "relative",
  },
  underDev: {
    zIndex: "1",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "1.5rem",
  },
});

export default function Invitations() {
  const classes = useStyles();

  return (
    <div className={classes.master}>
      {/* <div className={classes.underDev}>
        <p style={{ textAlign: "center" }}>
          <b>Under developement</b>
        </p>
      </div> */}
      <Card className={classes.root}>
        <h4 style={{ textAlign: "center", paddingTop: "0.5rem" }}>
          Invitations for you
        </h4>
        <CardActionArea disabled>
          <CardMedia className={classes.media} image={imgsrc} title="img" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Daksh
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              I would like to collab with you in my upcoming video. Please let
              me know if you are interested.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            See More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
