import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CustomPopover = ({
  handleClose,
  anchorOrigin,
  transformOrigin,
  anchorEl,
  open,
  id,
  children,
  PaperProps,
}) => {
  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        PaperProps={PaperProps}
      >
        {children}
      </Popover>
    </div>
  );
};
export default CustomPopover;
