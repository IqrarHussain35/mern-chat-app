/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Avatar, Badge, Box, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CustomButton from '../../components/CustomButton'
import CustomIconButton from '../../components/CustomIconButton'
import { useState } from "react";
import styles from "./styles";
import DeleteChat from "./deleteChat";
import CustomDialog from "../CustomDialog";
import AboutGroupDrawer from "./aboutGroupDrawer";
const img = 'https://images.freeimages.com/variants/8QQFM1CWt3MgumUHQfBAVScm/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&w=500'

const ChatItem = ({ isGroup }) => {
  const [hover, setHover] = useState(false);
  const [isGroupChat, setisGroupChat] = useState(isGroup)
  const [openDrawer, setOpenDrawer] = useState(false);


  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const toggleDrawer = () => {
    setOpenDrawer(prev => !prev);
  };

  const handleOpenDelPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDelPopover = () => {
    setAnchorEl(null);
  };




  return (
    <>
      <Box component={CustomButton} fullWidth
        sx={styles.con}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Box sx={styles.iconCon}>

          {
            isGroupChat ? (
              <CustomIconButton size='small' sx={styles.aboutIcon(hover)} onClick={toggleDrawer} >
                <MoreVertIcon fontSize="small" />
              </CustomIconButton>
            ) : (
              <CustomIconButton size='small' sx={styles.aboutIcon(hover)} aria-describedby={id} onClick={handleOpenDelPopover}>
                <MoreVertIcon fontSize="small" />
              </CustomIconButton>
            )
          }

          {
            isGroupChat ? (
              <div style={styles.groupAvatarCon(hover)}>
                {[...Array(5)].map((_, i) => (
                  <Avatar key={i} src={img} alt="Iqrar Hussain" sx={styles.groupAvatar(i)} />
                ))}
              </div>
            ) : (
              <Avatar src={img} alt="Iqrar Hussain" sx={styles.avatar(hover)} />
            )
          }

          <div style={styles.textCon}>
            <Typography variant="body1" color='black'>Iqrar Hussain</Typography>
            <Typography variant="caption" color='grey'>Iqrar Hussain</Typography>
          </div>
        </Box>

        <div>
          <Typography variant="subtitle2" color='grey'>an hour</Typography>
          <Badge badgeContent={4} color="primary" />
        </div>
      </Box>
      <DeleteChat text='Delete Chat' id={id} open={open} anchorEl={anchorEl} handleClose={handleCloseDelPopover} />
      <AboutGroupDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
      {/* <CustomDialog
        open={openAboutGroup}
        handleClose={handleCloseAboutGroup}
        showHeader
      >
        hihhhhhh
      </CustomDialog> */}
    </>
  )
}

export default ChatItem