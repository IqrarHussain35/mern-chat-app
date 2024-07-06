/* eslint-disable react/prop-types */

import CustomDialog from '../CustomDialog'
import CustomAutocomplete from '../CustomAutoComplete'
import CustomButton from '../CustomButton'
import { Box } from '@mui/material'
import CustomTextfield from '../CustomTextfield.jsx'

const CreateGroupDialog = ({ open, handleClose, data }) => {
  return (
    <>
      <CustomDialog open={open} handleClose={handleClose} showHeader>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
          <CustomTextfield
            label='Group Name'
            placeholder='Enter group name'
          />
          <CustomAutocomplete
            multiple
            options={data}
            getOptionLabel={(option) => option.name ?? ''}
            placeholder={'Select User'}
            label={'Select User'}
          />
          <CustomButton variant='contained'
            fullWidth
          >
            Create Group
          </CustomButton>
        </Box>
      </CustomDialog></>
  )
}

export default CreateGroupDialog