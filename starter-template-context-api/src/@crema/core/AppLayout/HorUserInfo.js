import React, {useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';

import {useAuthUser} from '../../utility/AppHooks';
import AppContext from '../../utility/AppContext';
import {makeStyles} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import {orange} from '@material-ui/core/colors';
import {Fonts} from '../../../shared/constants/AppEnums';
import Hidden from '@material-ui/core/Hidden';
import {setAuthToken} from '../../services/ApiConfig';

const useStyles = makeStyles((theme) => {
  return {
    userRoot: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      justifyContent: 'center',
    },
    avatar: {
      fontSize: 24,
      backgroundColor: orange[500],
    },
    userInfo: {
      width: 'calc(100% - 75px)',
    },
    pointer: {
      cursor: 'pointer',
    },
    userName: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      fontSize: 15,
      fontWeight: Fonts.MEDIUM,
      color: (props) =>
        props.bgType === 'colored' ? 'white' : theme.palette.text.primary,
    },
  };
});

const HorUserInfo = ({bgType = 'colored'}) => {
  const {themeMode, updateAuthUser} = useContext(AppContext);
  const user = useAuthUser();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  console.log('bgType', bgType);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const onUserSignout = () => {
    //logout API goes Here
    updateAuthUser(null);
    setAuthToken(null);
  };

  const getUserAvatar = () => {
    if (user.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };
  const classes = useStyles({themeMode, bgType});

  return (
    <Box py={2} pl={{xs: 2, sm: 3, md: 5}}>
      <Box className={classes.userRoot} display='flex' onClick={handleClick}>
        {user.photoURL ? (
          <Avatar className={classes.avatar} src={user.photoURL} />
        ) : (
          <Avatar className={classes.avatar}>{getUserAvatar()}</Avatar>
        )}
        <Hidden mdDown>
          <Box ml={3} className={classes.userName}>
            {user.displayName ? user.displayName : user.email}
            <Box fontSize={13} fontWeight={Fonts.LIGHT}>
              System Manager
            </Box>
          </Box>
        </Hidden>
      </Box>
      <Box className={classes.userInfo}>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem>My account</MenuItem>
          <MenuItem onClick={onUserSignout}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default HorUserInfo;
