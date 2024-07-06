import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CustomIconButton from '../CustomIconButton';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
const CustomCartButton = ({ count, onClick }) => {
  return (
    <CustomIconButton aria-label="cart" onClick={onClick}>
      <StyledBadge badgeContent={count} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </CustomIconButton>
  );
};
export default CustomCartButton;
