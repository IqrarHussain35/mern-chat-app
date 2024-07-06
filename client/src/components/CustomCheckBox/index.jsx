import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

const CustomCheckBox = ({
  value,
  color,
  label,
  icon,
  checkedIcon,
  ...props
}) => {
  return (
    <>
      {label ? (
        <FormControlLabel
          control={<Checkbox value={value} color={color} />}
          label={label}
          {...props}
        />
      ) : (
        <Checkbox
          value={value}
          color={color}
          icon={icon}
          checkedIcon={checkedIcon}
          {...props}
        />
      )}
    </>
  );
};

export default CustomCheckBox;
