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
    "& h4": {
      margin: "30px auto 10px",
      padding: "6px 16px",
      backgroundColor: "#eaeff5",
      borderRadius: "10px",
      color: "#253053",
      textAlign: "center",
      width: "80%",
    },
  },
}));

const SideMenu = ({ header }) => {
  const classes = useStyles();

  return (
    <div className={classes.sideMenu}>
      <NavProfileContainer header={header} />
      <NavigationSideMenu />
      <h4>Log out</h4>
    </div>
  );
};

export default SideMenu;
