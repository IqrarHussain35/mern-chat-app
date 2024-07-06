/* eslint-disable react/prop-types */

import Popover from '@mui/material/Popover';
import CustomButton from '../CustomButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteChat({ id, open, anchorEl, handleClose, text, clickDelete }) {

  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <CustomButton fullWidth sx={{ color: 'red', p: 2 }} onClick={clickDelete}>
          <DeleteIcon fontSize='small' color='error' /> {text}
        </CustomButton>
      </Popover>
    </>
  );
}