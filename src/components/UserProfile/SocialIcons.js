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
  Icons: {
    fontSize: "40px",
  },
  YouTube: {
    color: "#FF0000",
    fontSize: "40px",
  },
  Facebook: {
    color: "#4267B2",
    fontSize: "40px",
  },
  Twitter: {
    color: "#1DA1F2",
    fontSize: "40px",
  },
  Instagram: {
    background:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
    borderRadius: "5px",
    color: "white",
    fontSize: "40px",
  },
  LinkedIn: {
    color: "#0077b5",
    fontSize: "40px",
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

export default function SocialIcons(props) {
  const classes = useStyles();
  return (
    <div className={classes.IconContainer}>
      {props.Facebook ? (
        <div className={classes.platformData}>
          <a href={props.Facebook.url} target="_blank" rel="noreferrer">
            <FacebookIcon className={classes.Facebook} />
          </a>
          <p className={classes.popularity}>
            <b>{props.Facebook.Followers}</b>
          </p>
        </div>
      ) : (
        <div className={classes.platformData}>
          <FacebookIcon className={classes.Icons} disabled />
        </div>
      )}

      {props.LinkedIn ? (
        <div className={classes.platformData}>
          <a href={props.LinkedIn.url} target="_blank" rel="noreferrer">
            <LinkedInIcon className={classes.LinkedIn} />
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
          <a href={props.Twitter.url} target="_blank" rel="noreferrer">
            <TwitterIcon className={classes.Twitter} />
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
          <a href={props.Instagram.url} target="_blank" rel="noreferrer">
            <InstagramIcon className={classes.Instagram} />
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
          <a href={props.YouTube.url} target="_blank" rel="noreferrer">
            <YouTubeIcon className={classes.YouTube} />
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
