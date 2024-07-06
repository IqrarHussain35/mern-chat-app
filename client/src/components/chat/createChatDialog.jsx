/* eslint-disable react/prop-types */

import CustomDialog from '../CustomDialog'
import CustomAutocomplete from '../CustomAutoComplete'
import CustomButton from '../CustomButton'
import { Box } from '@mui/material'

const CreateChatDialog = ({ open, handleClose, data }) => {
  return (
    <>
      <CustomDialog open={open} handleClose={handleClose} showHeader>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
          <CustomAutocomplete
            options={data}
            getOptionLabel={(option) => option.name ?? ''}
            placeholder={'Select User'}
            label={'Select User'}
          />
          <CustomButton variant='contained'
            fullWidth
          >
            Create Chat
          </CustomButton>
        </Box>
      </CustomDialog></>
  )
}

export default CreateChatDialog