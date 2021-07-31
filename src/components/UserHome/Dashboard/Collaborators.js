import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { useDispatch, useSelector } from "react-redux";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";
// import Typography from "@material-ui/core/Typography";
import Matches from "./Matches";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
}));

export default function Collaborators() {
  const classes = useStyles();
  const BASE_URL = "http://localhost:8000";
  const profileObj = useSelector((state) => state.profileInfo);
  const email = useSelector((state) => state.userData.email);
  console.log(email);
  const cat = profileObj.categories.Category;
  const [matchesArray, setMatchesArray] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/creator/list/category/" + cat)
      .then((res) => {
        setMatchesArray(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <List className={classes.root}>
      <h4 style={{ paddingLeft: "1rem", textAlign: "center" }}>
        Interesting people to collab
      </h4>
      {matchesArray ? (
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
                  image={creator.profileImg}
                  creator={creator}
                />
                <Divider />
              </ListItem>
            )
        )
      ) : (
        <h6>No user found</h6>
      )}
    </List>
  );
}
