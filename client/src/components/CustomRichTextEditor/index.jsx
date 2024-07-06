import '../../global-polyfill';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MUIRichTextEditor from 'mui-rte';
import { useTheme } from '@mui/material';

import styles from './style';

const CustomRichTextEditor = ({
  minHeight = '350px',
  label,
  inlineToolbar,
  onChange,
}) => {
  const theme = useTheme();
  const defaultTheme = createTheme();

  Object.assign(defaultTheme, styles.textEditor(theme, minHeight));
  return (
    <ThemeProvider theme={defaultTheme}>
      <MUIRichTextEditor
        label={label}
        inlineToolbar={inlineToolbar}
        onChange={onChange}
      />
    </ThemeProvider>
  );
};

export default CustomRichTextEditor;
