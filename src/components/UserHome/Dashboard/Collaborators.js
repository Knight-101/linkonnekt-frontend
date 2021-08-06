import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { useSelector } from "react-redux";
import Matches from "./Matches";
import axios from "axios";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    maxWidth: "40rem",
    height: "40rem",
    backgroundColor: theme.palette.background.paper,
    justifySelf: "right",
    gridColumn: "2",
    gridRow: "1/3",
    overflowX: "hidden",
    overflowY: "auto",
  },
  inline: {
    display: "inline",
    fontSize: "1.3rem",
  },
  noUser: {
    zIndex: "1",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "1.5rem",
  },
}));

const override = css`
  display: block;
  margin: 0 auto;
  position: relative;
  top: 40%;
`;

export default function Collaborators() {
  const classes = useStyles();
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const profileObj = useSelector((state) => state.profileInfo);
  const email = useSelector((state) => state.userData.email);
  const cat = profileObj.categories.Category;
  let [loading, setLoading] = useState(true);
  const [matchesArray, setMatchesArray] = useState([]);

  useEffect(() => {
    let top5 = [];
    axios
      .get(BASE_URL + "/creator/top5")
      .then((res) => {
        top5 = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(BASE_URL + "/creator/list/category/" + cat, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        const arrayLen = res.data.length;
        if (res.data.length < 5) {
          setMatchesArray([...res.data, ...top5.slice(0, 5 - arrayLen)]);
          setLoading(false);
        } else {
          setMatchesArray(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cat, email, BASE_URL]);

  return (
    <List className={classes.root}>
      <h4 style={{ paddingLeft: "1rem", textAlign: "center" }}>
        <b>Interesting people to collab</b>
      </h4>
      {matchesArray.length !== 0 ? (
        matchesArray.map(
          (creator, index) =>
            creator.email !== email && (
              <ListItem key={index} alignItems="flex-start">
                <Matches
                  name={
                    creator.profileInfo.personalInfo.firstName +
                    " " +
                    creator.profileInfo.personalInfo.lastName
                  }
                  category={creator.profileInfo.categories.Category}
                  about={creator.profileInfo.personalInfo.about}
                  image={creator.profileImg}
                  YouTube={creator.profileInfo.socialLinks.YouTube}
                  LinkedIn={creator.profileInfo.socialLinks.LinkedIn}
                  Instagram={creator.profileInfo.socialLinks.Instagram}
                  Facebook={creator.profileInfo.socialLinks.Facebook}
                  Twitter={creator.profileInfo.socialLinks.Twitter}
                  username={creator.username}
                />
                <Divider />
              </ListItem>
            )
        )
      ) : (
        <ClipLoader
          color={"#457b9d"}
          loading={loading}
          css={override}
          size={100}
        />
      )}
    </List>
  );
}
