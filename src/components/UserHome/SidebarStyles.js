import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: "#F1F1F1",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  drawerPaper: {
    width: drawerWidth,
    background: "#457B9D",
    color: "white",
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    marginTop: "5rem",
    margin: "0 6.4rem 0 72px",
  },
  toolbar: {
    display: "grid",
    gridTemplateColumns: "3fr 6fr",
  },
  icons: {
    color: "white",
  },
  title: {
    textAlign: "left",
    padding: "20px 0 0 16px",
    marginBottom: "2rem",
    fontSize: "1.3rem",
    fontWeight: "bold",
    letterSpacing: "5px",
  },
  welcome: {
    color: "black",
  },
  name: {
    color: "#457B9D",
    fontSize: "1.5rem",
    paddingLeft: "20px",
  },
  top: {
    display: "grid",
    gridTemplateColumns: "1fr 6fr",
    padding: "0 50px",
  },
  topRight: {
    justifySelf: "right",
    alignSelf: "center",
  },
  topIcons: {
    marginRight: "25px",
    color: "#457B9D",
    fontSize: "30px",
    borderRadius: "100%",
    cursor: "pointer",
  },
  DPIcon: {
    marginRight: "25px",
    height: "50px",
    width: "50px",
    borderRadius: "100%",
    cursor: "pointer",
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "white",
    },
  },
}));

export default useStyles;
