import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import "./Invitation.css";

export default function Invitation() {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const [invites, setinvites] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/creator/invitations", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        if (res.data.ok) {
          setinvites(res.data.invitations);
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [BASE_URL]);

  return (
    <div className="inviteRoot">
      <Typography variant="h6" className="inviteTitle">
        <b>Invitations</b>
      </Typography>
      <div>
        {invites &&
          invites.map((invite, index) => (
            <List className="inviteListItem">
              <ListItem>
                <ListItemAvatar>
                  <img
                    src={invite.fromImage}
                    alt="fromImage"
                    className="inviteImageIcon"
                  />
                </ListItemAvatar>
                <ListItemText
                  className="inviteMsg"
                  primary={invite.from}
                  secondary={invite.message}
                />
              </ListItem>
            </List>
          ))}
      </div>
    </div>
  );
}
