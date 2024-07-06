const styles = {
  selectStyle: {
    borderRadius: 0,
    height: '50px',
    minWidth: { xs: '100px', md: '120px', lg: '150px' },
  },
  inputStyle: {
    borderWidth: '1px',
    borderColor: 'divider',
    borderRadius: 0,
    height: '50px',
    px: 2,
    flex: { sm: 1 },
    bgcolor: 'appColors.white',
    '&::placeholder': {
      color: 'appColors.black',
    },
    '&:focus': {
      borderColor: 'primary.main',
      borderWidth: '1px',
    },
  },
  btn: {
    height: '50px',
    width: { xs: '100%', sm: 'auto' },
    flexShrink: 0,
  },
};
export default styles;
