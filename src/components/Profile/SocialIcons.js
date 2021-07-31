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
  Icons: {
    fontSize: "40px",
  },
  popularity: {
    margin: 0,
    marginTop: "10px",
  },
}));

export default function SocialIcons(props) {
  const classes = useStyles();
  return (
    <div className={classes.IconContainer}>
      {props.Facebook ? (
        <div className={classes.platformData}>
          <a href={props.Facebook} target="_blank" rel="noreferrer">
            <FacebookIcon className={classes.Icons} />
          </a>
          <p className={classes.popularity}>
            <b>{props.Facebook.Followers}</b>
          </p>
        </div>
      ) : (
        <div className={classes.platformData}>
          <FacebookIcon className={classes.Icons} />
        </div>
      )}

      {props.LinkedIn ? (
        <div className={classes.platformData}>
          <a href={props.LinkedIn} target="_blank" rel="noreferrer">
            <LinkedInIcon className={classes.Icons} />
          </a>
          <p className={classes.popularity}>
            <b>{props.LinkedIn.Followers}</b>
          </p>
        </div>
      ) : (
        <div className={classes.platformData}>
          <LinkedInIcon className={classes.Icons} />
        </div>
      )}
      {props.Twitter ? (
        <div className={classes.platformData}>
          <a href={props.Twitter} target="_blank" rel="noreferrer">
            <TwitterIcon className={classes.Icons} />
          </a>
          <p className={classes.popularity}>
            <b>{props.Twitter.Followers}</b>
          </p>
        </div>
      ) : (
        <div className={classes.platformData}>
          <TwitterIcon className={classes.Icons} />
        </div>
      )}
      {props.Instagram ? (
        <div className={classes.platformData}>
          <a href={props.Instagram} target="_blank" rel="noreferrer">
            <InstagramIcon className={classes.Icons} />
          </a>
          <p className={classes.popularity}>
            <b>{props.Instagram.Followers}</b>
          </p>
        </div>
      ) : (
        <div className={classes.platformData}>
          <InstagramIcon className={classes.Icons} />
        </div>
      )}

      {props.YouTube ? (
        <div className={classes.platformData}>
          <a href={props.YouTube} target="_blank" rel="noreferrer">
            <YouTubeIcon className={classes.Icons} />
          </a>
          <p className={classes.popularity}>
            <b>{props.YouTube.Subscribers}</b>
          </p>
        </div>
      ) : (
        <div className={classes.platformData}>
          <YouTubeIcon className={classes.Icons} />
        </div>
      )}
    </div>
  );
}
