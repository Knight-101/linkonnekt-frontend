import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

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
    gridTemplateRows: "10px 40px 460px",
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

export default function SendMailModal(props) {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [emailSent, setemailSent] = useState(false);

  const [email, setEmail] = useState({
    email: props.email,
    subject: "",
    content: "",
  });

  const emailSentClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setemailSent(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    const { id, value } = event.target;
    setEmail((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const sendInviteMail = (event) => {
    event.preventDefault();
    axios
      .post(BASE_URL + "/auth/sendinvitemail", {
        headers: { Authorization: localStorage.getItem("token") },
        email,
      })
      .then((res) => {
        if (res.data.ok) {
          console.log("sent");
          setEmail({ email: props.email, subject: "", content: "" });
          setOpen(false);
          setemailSent(true);
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
        className={classes.buttonFirst}
        size="small"
        startIcon={<EmailIcon />}
        // onClick={sendInviteMail}
        onClick={handleOpen}
      >
        Send mail
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
              Subject
            </label>
            <input
              id="subject"
              className={classes.input}
              placeholder="Subject"
              value={email.subject}
              onChange={handleChange}
            />
            <label htmlFor="subject" className="visually-hidden">
              Content
            </label>
            <textarea
              style={{ resize: "none" }}
              id="content"
              placeholder="Content"
              className={classes.input}
              value={email.content}
              onChange={handleChange}
            />
            <button className={classes.sendMail} onClick={sendInviteMail}>
              Send mail
            </button>
          </div>
        </Fade>
      </Modal>
      <Snackbar
        open={emailSent}
        autoHideDuration={3000}
        onClose={emailSentClose}
      >
        <Alert onClose={emailSentClose} severity="success">
          Email Sent
        </Alert>
      </Snackbar>
    </div>
  );
}
