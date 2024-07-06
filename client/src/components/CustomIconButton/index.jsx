/* eslint-disable react/prop-types */
import React from 'react';
import { IconButton } from '@mui/material';

const CustomIconButton = ({
  color,
  onClick,
  disabled,
  children,
  className,
  autoFocus,
  sx,
  size,
  id,
  ariaControls,
  ariaHasPopup,
  ariaExpanded,
  ariaLabel,
  ...props
}) => {
  return (
    <IconButton
      color={color}
      onClick={onClick}
      className={className}
      sx={sx}
      autoFocus={autoFocus}
      disabled={disabled}
      id={id}
      size={size}
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </IconButton>
  );
};
export default CustomIconButton;
