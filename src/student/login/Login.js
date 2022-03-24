import React, { useEffect } from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import LoginFront from "./LoginFront";
import LoginRegister from "./LoginRegister";
import { useDispatch } from "react-redux";
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from "@capacitor/push-notifications";
import { getFCMTokenAction } from "./LoginActions";

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

  const dispatch = useDispatch();

  useEffect(() => {
    PushNotifications.checkPermissions().then((res) => {
      if (res.receive !== "granted") {
        PushNotifications.requestPermissions().then((res) => {
          if (res.receive === "denied") {
            console.log("Push Notification permission denied");
          } else {
            console.log("Push Notification permission granted");
            register();
          }
        });
      } else {
        register();
      }
    });
  }, []);

  const register = () => {
    console.log("Initializing HomePage");

    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On success, we should be able to receive notifications
    PushNotifications.addListener("registration", (token) => {
      console.log("token is", token.value);
      // dispatch(getFCMTokenAction(token.value));
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener("registrationError", (error) => {
      console.log("Error on registration: " + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification) => {
        alert(notification.title + notification.body);
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification) => {
        console.log(notification);
      }
    );
  };

  return (
    <div className={classes.loginContainer}>
      {reg ? <LoginRegister setReg={setReg} /> : <LoginFront setReg={setReg} />}
    </div>
  );
};

export default Login;
