import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import clsx from "clsx";
import UserInfo from "../../../../shared/components/UserInfo";
import Navigation from "../../Navigation/VerticleNav";
import Box from "@material-ui/core/Box";
import useStyles from "./AppSidebar.style";
import Scrollbar from "../../Scrollbar";
import AppContext from "../../../utility/AppContext";
import AppContextPropsType from "../../../../types/AppContextPropsType";
import { toggleNavCollapsed, useLayoutActionsContext, useLayoutContext } from "../LayoutContextProvider";

interface AppSidebarProps {
  position?: 'left' | 'bottom' | 'right' | 'top';
  variant?: string;
}

const AppSidebar: React.FC<AppSidebarProps> = ({
  position = 'left',
  variant = '',
}) => {
  const {navCollapsed} = useLayoutContext();
  const dispatch = useLayoutActionsContext()!;

  const {themeMode} = useContext<AppContextPropsType>(AppContext);

  const handleToggleDrawer = () => {
    dispatch(toggleNavCollapsed());
  };

  const classes = useStyles({themeMode});
  return (
    <Hidden lgUp>
      <Drawer
        anchor={position}
        open={navCollapsed}
        onClose={ev => handleToggleDrawer()}
        classes={{
          root: clsx(variant),
          paper: clsx(variant),
        }}
        style={{position: 'absolute'}}>
        <Box height='100%' className={classes.drawerContainer}>
          <Box
            height='100%'
            width='100%'
            color='primary.contrastText'
            className={classes.sidebarBg}>
            <UserInfo />
            <Scrollbar
              scrollToTop={false}
              className={classes.drawerScrollAppSidebar}>
              <Navigation />
            </Scrollbar>
          </Box>
        </Box>
      </Drawer>
    </Hidden>
  );
};

export default AppSidebar;
