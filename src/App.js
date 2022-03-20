import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import {
  createTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

import BottomNavigationMis from "./components/BottomNavigationMis";
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from "@capacitor/push-notifications";
import { useLocation } from "react-router-dom";

const AssignmentEditForm = lazy(() =>
  import("./student/assignment/assignment/AssignmentEditForm")
);

const Login = lazy(() => import("./student/login/Login"));
const DashboardSubjectView = lazy(() =>
  import("./student/dashboard/DashboardSubjectView")
);
const PageNotFound = lazy(() => import("./student/pageNotFound/PageNotFound"));
const Dashboard = lazy(() => import("./student/dashboard/Dashboard"));
const Pid = lazy(() => import("./student/pid/UserProfile"));
const QuickLinks = lazy(() => import("./student/quickLinks/QuickLinks"));
const Resources = lazy(() => import("./student/resources/Resources"));
const Syllabus = lazy(() => import("./student/syllabus/Syllabus"));
const OldQuestions = lazy(() => import("./student/oldQuestions/OldQuestions"));
const AcademicGrading = lazy(() =>
  import("./student/academicGrading/AcademicGrading")
);
const ExamDivision = lazy(() => import("./student/examDivision/ExamDivision"));
// const ExamSchedule = lazy(() => import("./student/examSchedule/ExamSchedule"));
const ClassSchedule = lazy(() =>
  import("./student/classSchedule/ClassSchedule")
);

// const ExamMarkEntry = lazy(() =>
//   import("./student/examMarkEntry/ExamMarkEntry")

const AssignmentFront = lazy(() =>
  import("./student/assignment/AssignmentFront")
);
const Attendance = lazy(() => import("./student/attendance/Attendance"));
const theme = createTheme({
  palette: {
    background: {
      // default: "#eaeff5",
      default: "#fff",
    },
    customColor: {
      main: "#253053",
    },
  },
  status: {
    danger: "orange",
  },
  MuiButtonRoot: {
    minWidth: "10px",
    fontSize: "12px",
  },
});

const useStyles = makeStyles({
  appMain: {
    width: "100%",
  },
});

const App = () => {
  const classes = useStyles();
  const location = useLocation();

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
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        {location.pathname !== "/login" && <Header />}
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route path={"/exam-division"} component={ExamDivision} />
            <Route path={"/pid"} component={Pid} />
            <Route path={"/quick-links"} component={QuickLinks} />
            <Route path={"/resources/:id?"} component={Resources} />
            <Route
              path={"/assignment-front/:id?"}
              component={AssignmentFront}
            />
            <Route path={"/syllabus"} component={Syllabus} />
            <Route path={"/class-schedule"} component={ClassSchedule} />
            <Route path={"/old-questions"} component={OldQuestions} />
            <Route path={"/attendance"} component={Attendance} />
            <Route path={"/login"} component={Login} />
            <Route
              exact
              path={"/academic-grading"}
              component={AcademicGrading}
            />
            <Route
              exact
              path={"/subject-view/:id"}
              component={DashboardSubjectView}
            />
            <Route exact path={"/"} component={Dashboard} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Suspense>
        {location.pathname !== "/login" && <BottomNavigationMis />}
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
