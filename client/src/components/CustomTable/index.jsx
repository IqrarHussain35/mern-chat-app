import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const CustomTable = ({
  rows,
  columns,
  disableRowSelectionOnClick,
  pagination,
  pageSizeOptions,
  sx,
}) => {
  return (
    <DataGrid
      sx={sx}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: pagination,
        },
      }}
      disableRowSelectionOnClick={disableRowSelectionOnClick}
      pageSizeOptions={pageSizeOptions}
    />
  );
};

export default CustomTable;
