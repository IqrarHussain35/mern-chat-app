import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

import CustomIconButton from '../CustomIconButton';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <CustomIconButton onClick={() => navigate(-1)}>
      <KeyboardBackspaceIcon />
    </CustomIconButton>
  );
};

export default BackButton;
