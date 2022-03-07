import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import LoginFront from "./LoginFront";
import LoginRegister from "./LoginRegister";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    marginTop: "18Vh",
    padding: "60px",
    height: "100vh",
  },
}));

const Login = () => {
  const [reg, setReg] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.loginContainer}>
      {reg ? <LoginRegister setReg={setReg} /> : <LoginFront setReg={setReg} />}
    </div>
  );
};

export default Login;
