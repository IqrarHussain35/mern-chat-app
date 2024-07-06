const styles = {
  headerStyles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 6
  },
  drawerStyle: {
    width: 350,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 350,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
  addChatCon: {
    padding: 2,
    display: 'flex',
    justifyContent: 'space-between',
    gap: 2,
    width: '100%'
  },
  messageCon: {
    height: '75vh',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#888',

    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#555',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#f1f1f1',
    }
  },
  messageGrid: {
    overflowY: 'auto', flexGrow: 1, height: '70vh', '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#888',

    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#555',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#f1f1f1',
    }
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
}
export default styles