import React, {useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {useAuthUser} from '../../../utility/AppHooks';
import AppContext from '../../../utility/AppContext';
import {makeStyles} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import {orange} from '@material-ui/core/colors';
import {useDispatch} from 'react-redux';
import {setAuthToken} from '../../../services/ApiConfig';

const useStyles = makeStyles((theme) => {
  return {
    avatar: {
      height: 40,
      width: 40,
      fontSize: 24,
      backgroundColor: orange[500],
      [theme.breakpoints.up('xl')]: {
        height: 55,
        width: 55,
      },
    },
    userInfo: {
      width: 'calc(100% - 75px)',
    },
    userName: {
      color: (props) => (props.themeMode === 'light' ? '#313541' : 'white'),
    },
    pointer: {
      cursor: 'pointer',
    },
  };
});

const UserInfo = (props) => {
  const {themeMode, updateAuthUser} = useContext(AppContext);
  const classes = useStyles({themeMode});
  const user = useAuthUser();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onUserSignout = () => {
    //logout API goes Here
    updateAuthUser(null);
    setAuthToken(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getUserAvatar = () => {
    if (user.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };

  return (
    <Box py={3} pl={{xs: 2, sm: 6}}>
      <Box className={classes.pointer} onClick={handleClick}>
        {user.photoURL ? (
          <Avatar className={classes.avatar} src={user.photoURL} />
        ) : (
          <Avatar className={classes.avatar}>{getUserAvatar()}</Avatar>
        )}
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

export default UserInfo;
