import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import QueueIcon from "@material-ui/icons/Queue";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  element: {
    padding: "1.5rem",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
  },
  carousel: {
    display: "inline-block",
    padding: "1rem 2rem",
  },
  aboutTypo: {
    display: "inline-block",
  },
  socialTypo: {
    display: "inline-block",
  },
  Underline: {
    width: "5rem",
    height: "0.625rem",
    borderRadius: "100px",
    backgroundColor: "#457b9d",
  },
  socialOuter: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    alignItems: "space-around",
  },
  socialType: {
    display: "inline",
  },
}));
export default function About(props) {
  const classes = useStyles();
  return (
    <div className={classes.element}>
      <div className={classes.carousel}>
        <Typography
          variant="h4"
          className={classes.aboutTypo}
          gutterbox
          component="h4"
        >
          <PersonIcon />
          About
        </Typography>
      </div>
      <div className={classes.carousel}>
        <Typography variant="h4" className={classes.socialTypo} component="h4">
          <QueueIcon />
          Social
          <div className={classes.Underline}></div>
        </Typography>
      </div>
      <Divider />
      <div className={classes.socialOuter}>
        <div className={classes.SocialLink}>
          <LinkedInIcon />
          <h5 className={classes.socialType}>LinkedIn</h5>
          <Button variant="contained" disableElevation>
            Connected
          </Button>
        </div>

        <div className={classes.SocialLink}>
          <YouTubeIcon />
          <h5 className={classes.socialType}>Youtube</h5>
          <Button variant="contained" disableElevation>
            Connected
          </Button>
        </div>
        <div className={classes.SocialLink}>
          <InstagramIcon />
          <h5 className={classes.socialType}>Instagram</h5>
          <Button variant="contained" disableElevation>
            Connected
          </Button>
        </div>
      </div>
    </div>
  );
}
