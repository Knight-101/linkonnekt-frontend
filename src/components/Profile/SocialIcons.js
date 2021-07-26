import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  IconContainer: {
    display: "flex",
    flex: "row",
    textAlign: "center",
    padding: "1rem 3rem",
    justifyContent: "space-evenly",
  },
  Icons: {
    color: "#274659",
    fontSize: "60px",
  },
}));

export default function SocialIcons() {
  const classes = useStyles();
  return (
    <div className={classes.IconContainer}>
      <FacebookIcon className={classes.Icons} />
      <LinkedInIcon className={classes.Icons} />
      <TwitterIcon className={classes.Icons} />
      <InstagramIcon className={classes.Icons} />
      <YouTubeIcon className={classes.Icons} />
    </div>
  );
}
