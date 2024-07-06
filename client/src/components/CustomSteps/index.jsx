import React from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import styles from './style';

const CustomStepIcon = (props) => {
  const { active, completed, icon } = props;
  return (
    <RadioButtonCheckedIcon
      color={active || completed ? 'primary' : 'appColors.grey'}
    />
  );
};

const CustomSteps = ({ activeStep, nonLinear, orientation, steps }) => {
  return (
    <Stepper
      nonLinear={nonLinear}
      activeStep={activeStep}
      orientation={orientation}
    >
      {steps?.map((item, index) => (
        <Step key={index}>
          <StepLabel
            sx={styles.label}
            StepIconComponent={CustomStepIcon}
            optional={
              item.content && (
                <Typography variant="caption">{item.content}</Typography>
              )
            }
          >
            {item.label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CustomSteps;
