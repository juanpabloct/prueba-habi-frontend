import "./App.css";
import { Box, Button, Grid, Step, StepButton, Stepper } from "@mui/material";
import { useState } from "react";
import { useInformation } from "./context/informationContext";
import { Input } from "./components/input";
import { CharacterAditional } from "./components/characterAdittional";
import { ShowInformation } from "./showInformation";

function App() {
  const {
    email,
    direction,
    name,
    piso,
    setEmail,
    setName,
    setDirection,
    setPiso,
  } = useInformation();
  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const steps = [
    {
      title: "Name Complete",
      components: (
        <Input
          event={(value) => {
            setName(value);
          }}
          label={"Name"}
          value={name}
        />
      ),
    },
    {
      title: "Email",
      components: (
        <Input
          event={(value) => {
            setEmail(value);
          }}
          error={!validEmail}
          value={email}
          label={"Email"}
        />
      ),
    },
    {
      title: "Direccion",
      components: (
        <Input
          label="Direction"
          value={direction}
          event={(value) => {
            setDirection(value);
          }}
        />
      ),
    },
    {
      title: "Piso",
      components: (
        <Input
          type={"number"}
          label="Piso"
          value={"" + piso}
          event={(value) => {
            const valid = /^[0-4]?\d$/;
            const valor = value === "" ? "0" : value;
            valid.test(valor) && setPiso(+valor);
          }}
        />
      ),
    },
    {
      title: "Characters adittional apartament",
      components: <CharacterAditional />,
    },
    { title: "Information Completed", components: <ShowInformation /> },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = steps.length;

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };
  const sectionValid: { [value: number]: boolean } = {
    0: name.length > 0,
    1: email.length > 0 && validEmail,
    2: direction.length > 0,
    3: piso !== 0,
    4: true,
  };
  return (
    <Grid container alignItems={"center"}>
      <Grid container height={"40%"} gap={"4rem"} justifyContent={"center"}>
        <Box sx={{ width: "90%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Step key={label.title} completed={completed[index]}>
                  <StepButton
                    color="inherit"
                    disabled={!sectionValid[activeStep]}
                    onClick={handleStep(index)}
                  >
                    {label.title}
                  </StepButton>
                </Step>
              );
            })}
          </Stepper>
        </Box>
        <Grid direction={"column"} container justifyContent={"center"}>
          <Grid container justifyContent={"center"}>
            {steps[activeStep].components}
          </Grid>
          <Grid container justifyContent={"center"}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button
              disabled={
                totalSteps - 1 >= activeStep && !sectionValid[activeStep]
              }
              onClick={handleNext}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
