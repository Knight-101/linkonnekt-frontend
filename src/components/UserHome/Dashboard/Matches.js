import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useHistory } from "react-router";
import "./Matches.css";

const useStyles = makeStyles({
  design_h3: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: "2rem",
  },
  design_h4: {
    // fontWeight: "bold",
  },
  media: {
    height: "180px",
    width: "250px",
    borderRadius: "100px",
  },
  flex: {
    display: "flex",
    borderRadius: "30px",
    alignItems: "flex-start",
    padding: "1rem",
    maxWidth: 600,
  },
  YouTube: {
    "&:hover": {
      color: "#FF0000",
    },
  },
  Facebook: {
    "&:hover": {
      color: "#4267B2",
    },
  },
  Twitter: {
    "&:hover": {
      color: "#1DA1F2",
    },
  },
  Instagram: {
    "&:hover": {
      background:
        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
      borderRadius: "5px",
    },
  },
  LinkedIn: {
    "&:hover": {
      color: "#0077b5",
    },
  },
  message: {
    width: "40px",
    height: "40px",
    marginBottom: "10px",
    backgroundColor: "#274659",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Matches(props) {
  const classes = useStyles();
  const history = useHistory();
  const cardClick = () => {
    history.push(`/profile/${props.username}`);
  };

  return (
    <div
      style={{
        margin: 10,
        border: "1px solid black",
        width: "600px",
        height: "auto",
        borderRadius: "30px",
      }}
    >
      <Card className={classes.flex} style={{ backgroundColor: "#a8dadc" }}>
        <CardMedia className={classes.media} image={props.image} title="img" />
        <CardActionArea onClick={cardClick}>
          <CardContent>
            <h3 className={classes.design_h3}> {props.name} </h3>
            {/* <h4 className={classes.design_h4}> DU CIC </h4> */}
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              overflow="hidden"
              className="cardAbout"
            >
              {props.about}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className={classes.icon_flex}>
            {/* <div className={classes.message}>
              <ChatIcon htmlColor="#ffffff"></ChatIcon>
            </div> */}

            {props.YouTube && (
              <div className={classes.message}>
                <a href={props.YouTube} target="__blank">
                  <YouTubeIcon
                    className={classes.YouTube}
                    htmlColor="#ffffff"
                  ></YouTubeIcon>
                </a>
              </div>
            )}

            {props.Instagram && (
              <div className={classes.message}>
                <a href={props.Instagram} target="__blank">
                  <InstagramIcon
                    className={classes.Instagram}
                    htmlColor="#ffffff"
                  ></InstagramIcon>
                </a>
              </div>
            )}

            {props.Facebook && (
              <div className={classes.message}>
                <a href={props.Facebook} target="__blank">
                  <FacebookIcon
                    className={classes.Facebook}
                    htmlColor="#ffffff"
                  ></FacebookIcon>
                </a>
              </div>
            )}

            {props.LinkedIn && (
              <div className={classes.message}>
                <a href={props.LinkedIn} target="__blank">
                  <LinkedInIcon
                    className={classes.LinkedIn}
                    htmlColor="#ffffff"
                  ></LinkedInIcon>
                </a>
              </div>
            )}
            {props.Twitter && (
              <div className={classes.message}>
                <a href={props.Twitter} target="__blank">
                  <TwitterIcon
                    className={classes.Twitter}
                    htmlColor="#ffffff"
                  ></TwitterIcon>
                </a>
              </div>
            )}
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
