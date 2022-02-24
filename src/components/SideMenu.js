import { makeStyles } from "@material-ui/core";
import React from "react";
import NavigationSideMenu from "./sideMenuComponents/NavigationSideMenu";
import NavProfileContainer from "./sideMenuComponents/NavProfileContainer";

const useStyles = makeStyles((theme) => ({
  sideMenu: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    width: 280,
    height: "100%",
    backgroundColor: "#253053",
  },
}));

const SideMenu = ({ header }) => {
  const classes = useStyles();

  return (
    <div className={classes.sideMenu}>
      <NavProfileContainer header={header} />
      <NavigationSideMenu />
    </div>
  );
};

export default SideMenu;
