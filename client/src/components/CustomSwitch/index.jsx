import { FormControlLabel, Switch } from '@mui/material';
import React from 'react';

const CustomSwitch = ({ label, checked, onChange, inputProps }) => {
  return (
    <>
      {label ? (
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={onChange}
              inputProps={inputProps}
            />
          }
          label={label}
        />
      ) : (
        <Switch checked={checked} onChange={onChange} inputProps={inputProps} />
      )}
    </>
  );
};

export default CustomSwitch;
