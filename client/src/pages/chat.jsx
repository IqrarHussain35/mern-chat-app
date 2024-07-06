
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LockIcon from '@mui/icons-material/Lock';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import ChatItem from '../components/chat/chatItem';
import CustomTextfield from '../components/CustomTextfield.jsx';
import CustomButton from '../components/CustomButton';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import { Avatar, Fab, Grid, List, ListItem, ListItemText } from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
import CustomIconButton from '../components/CustomIconButton/index.jsx';

import React, { useState } from 'react';
import styles from './styles.js';
import CreateChatDialog from '../components/chat/createChatDialog.jsx';
import CreateGroupDialog from '../components/chat/createGroupDialog.jsx';
import DeleteChat from '../components/chat/deleteChat.jsx';
import AboutGroupDrawer from '../components/chat/aboutGroupDrawer.jsx';
const img = 'https://images.freeimages.com/variants/8QQFM1CWt3MgumUHQfBAVScm/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&w=500'

const drawerWidth = 350;

const userOptions = [
  {
    name: 'Iqrar',
    value: 1
  },
  {
    name: 'Ansar',
    value: 2
  },
  {
    name: 'Absar',
    value: 3
  }
]
export default function Chat() {
  const [openChatDialog, setOpenChatDialog] = useState(false)
  const [openGroupDialog, setopenGroupDialog] = useState(false)
  const [userList, setUserList] = useState(userOptions)
  const [localSearchQuery, setLocalSearchQuery] = useState('')
  const [loadingChats, setLoadingChats] = useState(false); // To indicate loading of chats
  const [loadingMessages, setLoadingMessages] = useState(false); // To indicate loading of messages


  const handleOpenChatDialog = () => {
    setOpenChatDialog(true)
  }
  const handleCloseChatDialog = () => {
    setOpenChatDialog(false)
  }

  const handleOpenGroupDialog = () => {
    setopenGroupDialog(true)
  }
  const handleCloseGroupDialog = () => {
    setopenGroupDialog(false)
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <Avatar src={img} alt="Iqrar Hussain" sx={{ transition: 'margin-left 0.3s ease-in-out' }} />
            <div style={styles.headerStyles}>
              <Typography variant="body1" >Iqrar Hussain</Typography>
              <Typography variant="caption" >iqrar@gmail.com</Typography>
            </div>

          </Toolbar>
        </AppBar>

        <Drawer
          sx={styles.drawerStyle}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <div style={styles.addChatCon}>
              <CustomButton
                size='small'
                variant='contained'
                onClick={handleOpenChatDialog}
              >
                <AddIcon /> Add Chat
              </CustomButton>
              <CustomButton
                size='small'
                variant='contained'
                onClick={handleOpenGroupDialog}
              >
                <AddIcon /> Create Group
              </CustomButton>
            </div>

          </Toolbar>
          <Divider />
          <div>
            <div style={{ padding: 4 }}>
              <CustomTextfield
                size={'small'}
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value.toLowerCase())}
                placeholder={'Search chat'}
              />
            </div>

            {
              loadingChats ? (<h1>Chats are loading</h1>) : (
                <Box sx={styles.messageCon}>
                  {
                    [...Array(40)].map((_, i) => (
                      <React.Fragment key={i}>
                        <ChatItem isGroup={i === 0} />
                        <Divider />
                      </React.Fragment>
                    ))
                  }
                </Box>
              )
            }


          </div>

          <CustomButton
            size='small'
            variant='contained'
            fullWidth
            sx={{ mt: 'auto' }}
          >
            <LockIcon />Logout
          </CustomButton>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Grid container sx={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Grid item sx={styles.messageGrid}>
              <List className={styles.messageArea}>
                <ListItem key="1">
                  <Grid container justifyContent="flex-start">
                    <Avatar src={img} />
                    <Box sx={{ marginLeft: 1, maxWidth: 500, px: 2, borderRadius: 2 }} bgcolor='grey'>
                      <Grid item xs={12}>
                        <ListItemText align="left" primary="Hey, I am good! What about you? sffffffffffffffffffffffasgg sffs zsffsfffffffffffffffffffffffffffa zseffsfr afavv  aerf aese  yud rtefc  hh qh efffffffffffffffffff" />
                      </Grid>
                      <Grid item xs={12}>
                        <ListItemText align="left" secondary="09:31" />
                      </Grid>
                    </Box>
                  </Grid>
                </ListItem>
                <ListItem key="2">
                  <Grid container justifyContent="flex-end">
                    <Box sx={{ marginRight: 1, maxWidth: 500, px: 2, borderRadius: 2 }} bgcolor='primary.main'>
                      <Grid item xs={12}>
                        <ListItemText align="right" primary="Cool. I am good, let's catch up!" />
                      </Grid>
                      <Grid item xs={12}>
                        <ListItemText align="right" secondary="10:30" />
                      </Grid>
                    </Box>
                    <Avatar src={img} />
                  </Grid>
                </ListItem>
              </List>
            </Grid>
            <Divider />
            <Grid item>
              <Grid container sx={{ pt: 1.5 }}>
                <Grid item xs={1} align="center">
                  <CustomIconButton  ><AttachmentIcon /></CustomIconButton>
                </Grid>
                <Grid item xs={10}>
                  <CustomTextfield id="outlined-basic-email" placeholder="Type Something" fullWidth />
                </Grid>
                <Grid item xs={1} align="right">
                  <Fab color="primary" aria-label="add" ><SendIcon /></Fab>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box >

      <CreateChatDialog open={openChatDialog} handleClose={handleCloseChatDialog} data={userList} />
      <CreateGroupDialog open={openGroupDialog} handleClose={handleCloseGroupDialog} data={userList} />

    </>
  );
}
