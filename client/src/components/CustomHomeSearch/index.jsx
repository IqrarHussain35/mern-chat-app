import React from 'react';
import { InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import CustomSelect from '../CustomSelect';
import Input from '../../styledComponents/CustomStyledInput';
import CustomButton from '../CustomButton';
import styles from './style';

const CustomHomeSearch = ({
  onSearch,
  countryOptions,
  countryValue,
  cityOptions,
  cityValue,
  inputValue,
  onCountryChange,
  onCityChange,
  onInputChange,
}) => {
  return (
    <Paper className="flex flex-col sm:flex-row items-center justify-between gap-1 p-3 overflow-hidden">
      <div className="flex flex-col sm:flex-row w-full ">
        <CustomSelect
          placeholder={'Select country'}
          value={countryValue}
          options={countryOptions}
          onChange={onCountryChange}
          className="flex-1"
          sx={styles.selectStyle}
        />
        <CustomSelect
          placeholder={'Select city'}
          value={cityValue}
          options={cityOptions}
          onChange={onCityChange}
          className="flex-1"
          sx={styles.selectStyle}
        />
        <Input
          placeholder="Search"
          sx={styles.inputStyle}
          value={inputValue}
          onChange={onInputChange}
        />
      </div>
      <CustomButton variant="contained" sx={styles.btn} onClick={onSearch}>
        Search Now <SearchIcon className="ml-1" />
      </CustomButton>
    </Paper>
  );
};

export default CustomHomeSearch;
