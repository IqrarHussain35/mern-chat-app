import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography } from '@mui/material';

const CustomRadioGroup = ({ label, row, column, options, value, onChange }) => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        <Typography fontWeight="bold">{label}</Typography>
      </FormLabel>
      <RadioGroup
        row={row}
        column={column}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={onChange}
      >
        {options?.map((item) => (
          <FormControlLabel
            key={item}
            value={item.value}
            control={<Radio />}
            label={item.label}
            disabled={item.disabled}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default CustomRadioGroup;
