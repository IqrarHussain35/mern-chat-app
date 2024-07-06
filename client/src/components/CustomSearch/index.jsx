import React from 'react';
import { Box, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import CustomButton from '../CustomButton';
import Input from '../../styledComponents/CustomStyledInput';
import styles from './styles';

const CustomSearch = ({ handleSearch, placeholder, value, onChange }) => {
  return (
    <Paper className="flex items-center gap-3 p-3">
      <Box sx={styles.inputWraper}>
        <div className="ml-1">
          <SearchIcon />
        </div>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onchange}
          sx={styles.input}
        />
      </Box>
      <CustomButton
        variant="contained"
        sx={{ flexShrink: 0 }}
        onClick={handleSearch}
      >
        Search Now <SearchIcon fontSize="small" className="ml-1" />
      </CustomButton>
    </Paper>
  );
};

export default CustomSearch;
