import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
//REGISTER FORM
import RegisterForm from "./RegisterForm";
//HEADER
import Typography from "@material-ui/core/Typography";
//CONTEXT
import UserContextProvider from "./RegisterForm/UserContext";
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    alignContent: "stretch",
    [theme.breakpoints.down("sm")]: {
      alignContent: "flex-start"
    }
  },
  header: {
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1
    }
  },
  title: {
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(1)
  },
  subtitle: {
    color: theme.palette.primary.light
  },
  toolbar: {
    justifyContent: "center"
  }
}));
function App() {
  const classes = useStyles();
  return (
    <UserContextProvider>
      <Grid container className={classes.root}>
        <Grid item className={classes.header} xs={12} md={4}>
          <Typography variant='h3' className={classes.title}>
            Registration
          </Typography>
          <Typography variant='h5' className={classes.subtitle}>
            Complete all 3 steps to finish registration process
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <RegisterForm />
        </Grid>
      </Grid>
    </UserContextProvider>
  );
}

export default App;
