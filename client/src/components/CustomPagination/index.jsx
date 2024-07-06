import { Pagination } from '@mui/material';
import React from 'react';

const CustomPagiation = ({
  count,
  onChange,
  showFirstButton,
  showLastButton,
}) => {
  return (
    <Pagination
      count={count}
      color="primary"
      variant="text"
      shape="rounded"
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
      onChange={onChange}
    />
  );
};

export default CustomPagiation;
