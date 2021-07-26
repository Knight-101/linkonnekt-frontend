import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import PerosnalInfo from "./PersonalInfo";
import Categories from "./Categories";
import LinkAccounts from "./LinkAccounts";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    color: "#457b9d",
  },
}));

function getSteps() {
  return ["Personal Info", "Add Categories", "Link Accounts"];
}

function getStepContent(stepIndex, steps, handleBack, handleNext) {
  switch (stepIndex) {
    case 0:
      return (
        <PerosnalInfo
          activeStep={stepIndex}
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    case 1:
      return (
        <Categories
          activeStep={stepIndex}
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    case 2:
      return (
        <LinkAccounts
          activeStep={stepIndex}
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(activeStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        className={classes.stepper}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, steps, handleBack, handleNext)}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}
