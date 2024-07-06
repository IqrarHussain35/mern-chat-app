import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider } from '@mui/material';

import CustomIconButton from '../CustomIconButton';

const CustomDialog = ({
  title,
  footer,
  children,
  open,
  handleClose,
  sx,
  fullScreen,
  showHeader,
  ...props
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={sx}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      fullScreen={fullScreen}
      {...props}
    >
      {showHeader && (
        <>
          <Box className="flex items-center justify-between py-1 px-4">
            <DialogTitle
              sx={{ p: 0, m: 0, color: 'appColors.black', fontWeight: 'bold' }}
            >
              {title}
            </DialogTitle>
            <CustomIconButton onClick={handleClose}>
              <CloseIcon />
            </CustomIconButton>
          </Box>
          <Divider />
        </>
      )}

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      {footer && (
        <DialogActions sx={{ p: 1, m: 0, justifyContent: 'center' }}>
          {footer}
        </DialogActions>
      )}
    </Dialog>
  );
};
export default CustomDialog;
