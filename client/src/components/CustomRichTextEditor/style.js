const styles = {
  textEditor: (theme, minHeight) => ({
    overrides: {
      MUIRichTextEditor: {
        root: {
          width: '100%',
          minHeight: minHeight,
          border: '1px solid',
          borderColor: theme.palette.divider,
          borderRadius: '5px',
          padding: '8px',
          overflowY: 'auto',
        },
      },
    },
  }),
};

export default styles;
