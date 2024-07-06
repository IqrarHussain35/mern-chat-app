import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CustomAutocomplete = ({
  id,
  options,
  value,
  getOptionLabel,
  onChange,
  variant,
  label,
  placeholder,
  disablePortal,
  multiple,
  freeSolo,
  renderTags,
  defaultValue,
  sx,
  ...props
}) => {
  return (
    <Autocomplete
      sx={sx}
      disablePortal={disablePortal}
      id={id}
      options={options}
      value={value}
      getOptionLabel={getOptionLabel}
      onChange={onChange}
      multiple={multiple}
      freeSolo={freeSolo}
      renderTags={renderTags}
      defaultValue={defaultValue}
      fullWidth
      {...props}
      renderInput={(params) => (
        <TextField
          {...params}
          variant={variant}
          label={label}
          placeholder={placeholder}
        />
      )}
    />
  );
};
export default CustomAutocomplete;
