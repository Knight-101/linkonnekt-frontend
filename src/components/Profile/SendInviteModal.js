import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import SendIcon from "@material-ui/icons/Send";
import { useSelector } from "react-redux";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: 650,
    height: 650,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "grid",
    gridTemplateRows: "10px 500px",
    rowGap: "1.5rem",
  },
  sendMail: {
    backgroundColor: "#457b9d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 0",
  },
  input: {
    borderRadius: "5px",
  },
  close: {
    justifySelf: "end",
    cursor: "pointer",
  },
}));

export default function SendInviteModal(props) {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const classes = useStyles();
  const image = useSelector((state) => state.userData.profileImg);
  const username = useSelector((state) => state.userData.username);
  const [open, setOpen] = useState(false);
  const [inviteSent, setinviteSent] = useState(false);

  const [invitation, setInvitation] = useState({
    from: username,
    to: props.email,
    fromImage: image,
    message: "",
  });

  const inviteSentClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setinviteSent(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    const { id, value } = event.target;
    setInvitation((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const sendInvitation = (event) => {
    event.preventDefault();
    axios
      .post(BASE_URL + "/creator/postinvite", invitation)
      .then((res) => {
        if (res.data.ok) {
          console.log("sent");
          setInvitation({
            ...invitation,
            message: "",
          });
          setOpen(false);
          setinviteSent(true);
        } else {
          console.log(res.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button
        variant="contained"
        className={classes.buttonSecond}
        size="small"
        startIcon={<SendIcon />}
        onClick={handleOpen}
      >
        Send Invite
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <CloseIcon className={classes.close} onClick={handleClose} />

            <label htmlFor="subject" className="visually-hidden">
              Message
            </label>
            <textarea
              style={{ resize: "none" }}
              id="message"
              placeholder="Enter message..."
              className={classes.input}
              value={invitation.message}
              onChange={handleChange}
            />
            <button className={classes.sendMail} onClick={sendInvitation}>
              Send invite
            </button>
          </div>
        </Fade>
      </Modal>
      <Snackbar
        open={inviteSent}
        autoHideDuration={3000}
        onClose={inviteSentClose}
      >
        <Alert onClose={inviteSentClose} severity="success">
          Invitation Sent
        </Alert>
      </Snackbar>
    </div>
  );
}
