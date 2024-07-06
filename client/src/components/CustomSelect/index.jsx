import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CustomSelect = ({
  sx,
  value,
  onChange,
  inputProps,
  options,
  placeholder,
  fullWidth,
  className,
  ...props
}) => {
  return (
    <FormControl fullWidth className={className}>
      <Select
        sx={sx}
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={inputProps}
        fullWidth={fullWidth}
        {...props}
      >
        <MenuItem value={'' || 0}>
          <em>{placeholder}</em>
        </MenuItem>
        {options &&
          options?.map((item) => (
            <MenuItem key={item} value={item.id}>
              {item.value}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};
export default CustomSelect;
