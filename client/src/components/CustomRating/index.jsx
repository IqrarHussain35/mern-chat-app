import { Box, Rating, Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const CustomRating = ({ value, count, readOnly }) => {
  return (
    <Box className="flex items-center ">
      <Rating
        name="text-feedback"
        value={value}
        readOnly={readOnly}
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {count && <Typography>({count})</Typography>}
    </Box>
  );
};

export default CustomRating;
