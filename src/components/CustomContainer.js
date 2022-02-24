import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: "12px",
    padding: " 12px",
  },
}));

const CustomContainer = ({ children }) => {
  const classes = useStyles();
  return <Paper className={classes.pageContent}>{children}</Paper>;
};

export default CustomContainer;
