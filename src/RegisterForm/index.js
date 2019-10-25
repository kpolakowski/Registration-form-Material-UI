import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
//GENERAL
import { Container, Box, TextField, Grid, Typography } from "@material-ui/core";
//STEPPER
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
//FORM
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  },
  container: {
    padding: theme.spacing(20, 25, 20, 15)
  },
  content: {
    padding: theme.spacing(0, 0, 0, 20)
  },
  textField: {
    marginBottom: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(2, 2, 0, 0)
  },
  stepTitle: {
    marginBottom: theme.spacing(3)
  }
}));

const UserDetails = props => {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.stepTitle} variant="h5">
        Account details
      </Typography>
      <TextField
        className={classes.textField}
        placeholder="Type your username here"
        label="Username"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
        fullWidth
      />
      <TextField
        className={classes.textField}
        placeholder="Type your email here"
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        fullWidth
      />
      <TextField
        className={classes.textField}
        placeholder="Type your password here"
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        fullWidth
      />
    </Box>
  );
};

const UserPreferences = props => {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.stepTitle} variant="h5">
        Personal information
      </Typography>
    </Box>
  );
};

const UserSummary = props => {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.stepTitle} variant="h5">
        Summary
      </Typography>
    </Box>
  );
};

const steps = ["Step 1", "Step 2", "Step 3"];

const getStepContent = step => {
  switch (step) {
    case 0:
      return <UserDetails />;
    case 1:
      return <UserPreferences />;
    case 2:
      return <UserSummary />;
    default:
      return "Unknown step";
  }
};

export default props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Fragment>
      <Box className={classes.container}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
              <StepContent className={classes.content}>
                {getStepContent(index)}
                <Button
                  disabled={activeStep === 0}
                  className={classes.button}
                  variant="contained"
                  onClick={handleBack}
                >
                  Back
                </Button>
                {activeStep < steps.length - 1 && (
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                )}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Fragment>
  );
};
