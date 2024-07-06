import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';

const CustomTextfield = ({
  label,
  type,
  value,
  onChange,
  id,
  required,
  autoComplete,
  autoFocus,
  variant,
  sx,
  size,
  className,
  placeholder,
  multiline,
  maxRows,
  rows,
  endAdornment,
  startAdornment,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return type === 'password' ? (
    <TextField
      fullWidth
      required={required}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      type={showPassword ? 'text' : 'password'}
      id={id}
      label={label}
      variant={variant}
      value={value}
      onChange={onChange}
      sx={sx}
      size={size}
      placeholder={placeholder}
      {...props}
      InputProps={{
        endAdornment: (
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        ),
      }}
    />
  ) : (
    <TextField
      fullWidth
      required={required}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      type={type}
      id={id}
      label={label}
      variant={variant}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      sx={sx}
      size={size}
      {...props}
      className={className}
      multiline={multiline}
      maxRows={maxRows}
      rows={rows}
      InputProps={{
        startAdornment: startAdornment && (
          <InputAdornment>{startAdornment}</InputAdornment>
        ),
        endAdornment: endAdornment && (
          <InputAdornment>{endAdornment}</InputAdornment>
        ),
      }}
    />
  );
};

export default CustomTextfield;
