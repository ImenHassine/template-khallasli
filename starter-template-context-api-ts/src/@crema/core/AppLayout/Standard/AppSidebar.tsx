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
  let sidebarClasses = classes.sidebarStandard;
  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor={position}
          open={navCollapsed}
          onClose={() => handleToggleDrawer()}
          classes={{
            root: clsx(variant),
            paper: clsx(variant),
          }}
          style={{position: 'absolute'}}>
          <Box height='100%' className={classes.container}>
            <Box className={clsx(classes.sidebarBg, sidebarClasses)}>
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
      <Hidden mdDown>
        <Box height='100%' className={clsx(classes.container, 'app-sidebar')}>
          <Box className={clsx(classes.sidebarBg, sidebarClasses)}>
            <UserInfo />
            <Scrollbar scrollToTop={false} className={classes.scrollAppSidebar}>
              <Navigation />
            </Scrollbar>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default AppSidebar;
