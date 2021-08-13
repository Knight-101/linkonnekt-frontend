import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SocialIcons from "./SocialIcons";
import Button from "@material-ui/core/Button";
// import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Divider from "@material-ui/core/Divider";
import SendMailModal from "./SendMailModal";
import SendInviteModal from "./SendInviteModal";

const useStyles = makeStyles((theme) => ({
  element: {
    padding: "1.5rem",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
  },
  name: {
    display: "inline-block",
    margin: "0.5rem 2rem",
    fontSize: "1.8rem",
  },
  place: {
    fontSize: "0.75rem",
    margin: "0.5rem 2rem",
    display: "inline-block",
  },
  vocation: {
    margin: "0.5rem 2rem",
    color: "#5db3b6",
    fontSize: "1rem",
  },
  platforms: {
    textAlign: "center",
    marginTop: "1rem",
  },
  ButtonContainer: {
    display: "flex",
    flex: "row",
    textAlign: "center",
    justifyContent: "space-evenly",
    margin: "1.2rem 2rem",
  },
  buttonFirst: {
    backgroundColor: "#457b9d",
    color: "#f8f8f8",
  },
  buttonSecond: {
    color: "black",
  },
  buttonThird: {
    color: "#E63946",
  },
}));

export default function MainContent(props) {
  const classes = useStyles();
  const socialObj = { ...props.creator.profileInfo.categories.Platforms };
  const userPlatformsArray = [];
  for (const key in socialObj) {
    socialObj[key].Platform &&
      userPlatformsArray.push({
        ...socialObj[key],
        url: props.creator.profileInfo.socialLinks[socialObj[key].Platform],
      });
  }

  const YouTube = () => {
    for (let i = 0; i < userPlatformsArray.length; i++) {
      const item = userPlatformsArray[i];
      if (item.Platform === "YouTube") {
        return {
          url: item.url,
          Subscribers: item.Subscribers,
        };
      }
    }
  };
  const LinkedIn = () => {
    for (let i = 0; i < userPlatformsArray.length; i++) {
      const item = userPlatformsArray[i];
      if (item.Platform === "LinkedIn") {
        return {
          url: item.url,
          Followers: item.Followers,
        };
      }
    }
  };
  const Instagram = () => {
    for (let i = 0; i < userPlatformsArray.length; i++) {
      const item = userPlatformsArray[i];
      if (item.Platform === "Instagram") {
        return {
          url: item.url,
          Followers: item.Followers,
        };
      }
    }
  };
  const Facebook = () => {
    for (let i = 0; i < userPlatformsArray.length; i++) {
      const item = userPlatformsArray[i];
      if (item.Platform === "Facebook") {
        return {
          url: item.url,
          Followers: item.Followers,
        };
      }
    }
  };
  const Twitter = () => {
    for (let i = 0; i < userPlatformsArray.length; i++) {
      const item = userPlatformsArray[i];
      if (item.Platform === "Twitter") {
        return {
          url: item.url,
          Followers: item.Followers,
        };
      }
    }
  };

  return (
    <div className={classes.element}>
      <Divider />
      <Typography variant="h5" className={classes.platforms} component="h5">
        <u>Platforms</u>
      </Typography>
      <SocialIcons
        YouTube={YouTube()}
        LinkedIn={LinkedIn()}
        Instagram={Instagram()}
        Facebook={Facebook()}
        Twitter={Twitter()}
      />
      <Divider />

      <div className={classes.ButtonContainer}>
        <SendMailModal email={props.creator.email} />
        <SendInviteModal email={props.creator.email} />
        {/* <Button
          className={classes.buttonSecond}
          variant="outlined"
          size="small"
          startIcon={<ReportProblemIcon />}
          disabled
        >
          BookMark User
        </Button> */}
        <Button
          variant="outlined"
          className={classes.buttonThird}
          size="small"
          startIcon={<BookmarkIcon />}
          disabled
        >
          Report User
        </Button>
      </div>
      <Divider />
    </div>
  );
}
