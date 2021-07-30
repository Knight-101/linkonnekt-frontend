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
    padding: "2.5rem 3rem 1.5rem 3rem",
    justifyContent: "space-evenly",
  },
  Youtube: {
    color: "red",
    fontSize: "45px",
  },
  Facebook: {
    color: "blue",
    fontSize: "45px",
  },
  Twitter: {
    color: "blue",
    fontSize: "45px",
  },
  Insta: {
    color: "orange",
    fontSize: "45px",
  },
  Linkedin: {
    color: "blue",
    fontSize: "45px",
  },

  platformData: {
    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
    },
  },
  popularity: {
    margin: 0,
    marginTop: "10px",
  },
}));

export default function SocialIcons() {
  const classes = useStyles();
  return (
    <div className={classes.IconContainer}>
      <div className={classes.platformData}>
        <FacebookIcon className={classes.Facebook} />
        <p className={classes.popularity}>
          <b>50k</b>
        </p>
      </div>
      <div className={classes.platformData}>
        <LinkedInIcon className={classes.Linkedin} />
      </div>
      <div className={classes.platformData}>
        <TwitterIcon className={classes.Twitter} />
      </div>
      <div className={classes.platformData}>
        <InstagramIcon className={classes.Insta} />
      </div>
      <div className={classes.platformData}>
        <YouTubeIcon className={classes.Youtube} />
      </div>
    </div>
  );
}
