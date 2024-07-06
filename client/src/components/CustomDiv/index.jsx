import { styled } from '@mui/material/styles';

const MyDiv = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  //   width:'100%'
}));
export default MyDiv;
