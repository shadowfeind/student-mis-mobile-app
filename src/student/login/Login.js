import React, { useEffect } from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import LoginFront from "./LoginFront";
import LoginRegister from "./LoginRegister";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { USER_LOGOUT } from "./LoginConstants";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    padding: "60px",
    height: "100vh",
  },
}));

const Login = () => {
  const [reg, setReg] = useState(false);
  const classes = useStyles();
  const { id: removeId } = useParams();

  const dispatch = useDispatch();

  //cannot use hooks in constant so passing a id to clear userInfo
  useEffect(() => {
    if (removeId == 5) {
      dispatch({ type: USER_LOGOUT });
    }
  }, [removeId]);

  return (
    <div className={classes.loginContainer}>
      {reg ? <LoginRegister setReg={setReg} /> : <LoginFront setReg={setReg} />}
    </div>
  );
};

export default Login;
