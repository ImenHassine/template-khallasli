import React, {useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {useAuthUser} from '../../../@crema/utility/AppHooks';
import AppContext from '../../../@crema/utility/AppContext';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import {grey, orange} from '@material-ui/core/colors';
import {Fonts, ThemeMode} from '../../constants/AppEnums';
import Hidden from '@material-ui/core/Hidden';
import {setAuthToken} from '../../../@crema/services/ApiConfig';

const useStyles = makeStyles((theme) => {
  return {
    crHeaderUser: {
      backgroundColor: (props) =>
        props.header ? 'transparent' : 'rgba(0,0,0,.08)',
      paddingTop: 9,
      paddingBottom: 9,
      minHeight: 56,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('sm')]: {
        paddingTop: 10,
        paddingBottom: 10,
        minHeight: 70,
      },
    },
    profilePic: {
      height: 40,
      width: 40,
      fontSize: 24,
      backgroundColor: orange[500],
      [theme.breakpoints.up('xl')]: {
        height: 45,
        width: 45,
      },
    },
    userInfo: {
      width: (props) => (!props.header ? 'calc(100% - 75px)' : '100%'),
    },
    userName: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      fontSize: 16,
      fontWeight: Fonts.MEDIUM,
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
      color: (props) =>
        props.themeMode === ThemeMode.DARK || !props.header
          ? 'white'
          : '#313541',
    },
    pointer: {
      cursor: 'pointer',
    },
    adminRoot: {
      color: grey[500],
      fontSize: 16,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  };
});

const HeaderUser = (props) => {
  const {themeMode, updateAuthUser} = useContext(AppContext);
  const user = useAuthUser();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const onUserSignout = () => {
    //logout API goes Here
    updateAuthUser(null);
    setAuthToken(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
  const getUserAvatarView = () => {
    if (user.photoURL) {
      return <Avatar className={classes.profilePic} src={user.photoURL} />;
    } else {
      return <Avatar className={classes.profilePic}>{getUserAvatar()}</Avatar>;
    }
  };

  const classes = useStyles({themeMode, header: props.header});

  return (
    <Box
      px={{xs: 2, xl: 6}}
      className={clsx(classes.crHeaderUser, 'cr-user-info')}>
      <Box display='flex' alignItems='center'>
        <Hidden mdDown> {getUserAvatarView()}</Hidden>
        <Box className={clsx(classes.userInfo, 'user-info')}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'>
            <Hidden mdDown>
              <Box ml={4} mb={1} className={clsx(classes.userName)}>
                {user.displayName ? user.displayName : user.email}
                <Box fontSize={14} color='text.secondary'>
                  Admin
                </Box>
              </Box>
            </Hidden>
            <Box
              ml={{md: 3}}
              className={classes.pointer}
              color={
                themeMode === ThemeMode.DARK || !props.header
                  ? 'white'
                  : '#313541'
              }>
              <Hidden mdDown>
                <ExpandMoreIcon onClick={handleClick} />
              </Hidden>
              <Hidden lgUp>
                <Box component='span' onClick={handleClick}>
                  {getUserAvatarView()}
                </Box>
              </Hidden>
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
        </Box>
      </Box>
    </Box>
  );
};
export default HeaderUser;
HeaderUser.defaultProps = {
  header: true,
};
