import { Button } from '@mui/material';
// eslint-disable-next-line react/prop-types
const CustomButton = ({
  variant,
  sx,
  className,
  disabled,
  onClick,
  children,
  color,
  ariaDescribedby,
  fullWidth,
  ...props
}) => {
  const defaultStyle = {
    ...sx,
    bgcolor: color,
    textTransform: 'none',
    '&:hover': { bgcolor: color },
  };
  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      sx={defaultStyle}
      className={className}
      disabled={disabled}
      onClick={onClick}
      aria-describedby={ariaDescribedby}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
