import React, { useState } from "react";
import "./EmailV.css";
import axios from "axios";
import { useHistory } from "react-router";
import imgemail from "./Images/Email.png";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const EmailV = () => {
  const history = useHistory();
  const [mail, setmail] = useState(false);
  const [code, setcode] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });
  const [hash, setHash] = useState("");
  const BASE_URL = "http://localhost:8000";
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setcode((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  };

  const sendMail = (event) => {
    axios
      .post(BASE_URL + "/auth/sendmail", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        if (res.data.ok) {
          console.log(res.data.code);
          setHash(res.data.code);
          setmail(true);
        } else {
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const vCode = code.one + code.two + code.three + code.four;
    axios
      .post(BASE_URL + "/auth/emailVerification", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },

        code: vCode,
        hash: hash,
      })
      .then((res) => {
        if (res.data.ok) {
          localStorage.setItem("verified", true);
          history.push("/profileinfo");
        } else {
          setOpen(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="email-master">
      <img src={imgemail} className="emailImg" alt="logo"></img>
      <h1>
        <b>Verify your email address</b>
      </h1>
      {mail && (
        <p style={{ marginTop: "2rem" }}>
          A verification code has been sent to your email address.
        </p>
      )}
      {!mail && (
        <p style={{ marginTop: "2rem" }}>
          Please verify by clicking the button below.
        </p>
      )}
      {mail ? (
        <div>
          <form onSubmit={submitHandler}>
            <div class="codeInput">
              <input
                type="text"
                required
                class="form-control code"
                id="one"
                maxlength="1"
                value={code.one}
                onChange={handleChange}
              />
              <input
                type="text"
                required
                class="form-control code"
                id="two"
                maxlength="1"
                value={code.two}
                onChange={handleChange}
              />
              <input
                type="text"
                required
                class="form-control code"
                id="three"
                maxlength="1"
                value={code.three}
                onChange={handleChange}
              />
              <input
                type="text"
                required
                class="form-control code"
                id="four"
                maxlength="1"
                value={code.four}
                onChange={handleChange}
              />
            </div>
            <button id="emailV-button" type="submit">
              Verify code
            </button>
          </form>
        </div>
      ) : (
        <button id="emailV-button" onClick={sendMail}>
          Send Code
        </button>
      )}

      <div id="resend-change">
        <p>
          Didn't receive the code?
          <a
            href="/signup"
            style={{ textDecoration: "none", paddingLeft: "5px" }}
          >
            Resend
          </a>
        </p>
        <p>
          Don't know this email?
          <a
            href="/resend"
            style={{ textDecoration: "none", paddingLeft: "5px" }}
          >
            Change mail
          </a>
        </p>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Invalid OTP.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default EmailV;
