import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Icon } from "@material-ui/core";
//REGISTER FORM
import RegisterForm from "./RegisterForm";
//HEADER
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh"
  },
  header: {
    padding: theme.spacing(20, 15),
    backgroundColor: theme.palette.primary.main
  },
  title: {
    color: theme.palette.primary.contrastText
  },
  subtitle: {
    color: theme.palette.primary.light,
    margin: theme.spacing(3, 0)
  },
  toolbar: {
    justifyContent: "center"
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container className={classes.root}>
        <Grid item className={classes.header} xs={12} md={4}>
          <Typography variant="h3" className={classes.title}>
            Registration
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Complete all 3 steps to create account in this imaginary service
          </Typography>
        </Grid>
        <Grid xs={12} md={8}>
          <RegisterForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
