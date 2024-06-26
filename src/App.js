import React, { Suspense, lazy, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import {
  createTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { Route, Switch, useHistory } from "react-router-dom";
import BottomNavigationMis from "./components/BottomNavigationMis";
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from "@capacitor/push-notifications";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFCMTokenAction } from "./student/login/LoginActions";

const TeacherLeaveRequest = lazy(() =>
  import("./teacher/leaveRequest/TeacherLeaveRequest")
);
const StudentLeaveRequest = lazy(() =>
  import("./student/leaveRequest/StudentLeaveRequest")
);
const AssignmentEditForm = lazy(() =>
  import("./student/assignment/assignment/AssignmentEditForm")
);
const Holiday = lazy(() => import("./student/holiday/Holiday"));
const Login = lazy(() => import("./student/login/Login"));
const DashboardSubjectViewStudent = lazy(() =>
  import("./student/dashboard/DashboardSubjectView")
);
const PageNotFound = lazy(() => import("./student/pageNotFound/PageNotFound"));
const DashboardStudent = lazy(() => import("./student/dashboard/Dashboard"));
const PidStudent = lazy(() => import("./student/pid/UserProfile"));
const QuickLinksStudent = lazy(() => import("./student/quickLinks/QuickLinks"));
const ResourcesStudent = lazy(() => import("./student/resources/Resources"));
const SyllabusStudent = lazy(() => import("./student/syllabus/Syllabus"));
const OldQuestionsStudent = lazy(() =>
  import("./student/oldQuestions/OldQuestions")
);
const AnnouncementStudent = lazy(() =>
  import("./student/announcement/Announcement")
);
const AcademicGradingStudent = lazy(() =>
  import("./student/academicGrading/AcademicGrading")
);
const ExamDivisionStudent = lazy(() =>
  import("./student/examDivision/ExamDivision")
);
const ClassScheduleStudent = lazy(() =>
  import("./student/classSchedule/ClassSchedule")
);

const AssignmentFrontStudent = lazy(() =>
  import("./student/assignment/AssignmentFront")
);
const AttendanceStudent = lazy(() => import("./student/attendance/Attendance"));

//Teacher App Starts:
const Announcement = lazy(() => import("./teacher/announcement/Announcement"));
const StudentMonthlyPresentSheetUpdateForm = lazy(() =>
  import(
    "./teacher/attendance/studentMonthlyPresentSheet/StudentMonthlyPresentSheetUpdateForm"
  )
);
const StudentMonthlyPresentSheetMobileTable = lazy(() =>
  import(
    "./teacher/attendance/studentMonthlyPresentSheet/StudentMonthlyPresentSheetMobileTable"
  )
);
const DashboardSubjectView = lazy(() =>
  import("./teacher/dashboard/DashboardSubjectView")
);
const VideoConference = lazy(() =>
  import("./teacher/videoConference/VideoConference")
);
const Assignment = lazy(() => import("./teacher/assignment/Assignment"));
const Attendance = lazy(() => import("./teacher/attendance/Attendance"));
const DashboardTeacher = lazy(() => import("./teacher/dashboard/Dashboard"));
const Pid = lazy(() => import("./teacher/pid/Pid"));
const QuickLinks = lazy(() => import("./teacher/quickLinks/QuickLinks"));
const Resources = lazy(() => import("./teacher/resources/Resources"));
const Syllabus = lazy(() => import("./teacher/syllabus/syllabusMain"));
const OldQuestions = lazy(() => import("./teacher/oldQuestions/OldQuestions"));
const AcademicGrading = lazy(() =>
  import("./teacher/academicGrading/AcademicGrading")
);
const ExamDivision = lazy(() => import("./teacher/examDivision/ExamDivision"));
const ExamSchedule = lazy(() => import("./teacher/examSchedule/ExamSchedule"));
const ClassSchedule = lazy(() =>
  import("./teacher/classSchedule/ClassSchedule")
);
const ExamMarkEntry = lazy(() =>
  import("./teacher/examMarkEntry/ExamMarkEntry")
);
const ExamMarkApprovalTeacher = lazy(() =>
  import("./teacher/examMarkApprovalTeacher/ExamMarkApprovalTeacher")
);

const theme = createTheme({
  palette: {
    background: {
      default: "##f3f3f3",
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
  const dispatch = useDispatch();
  const history = useHistory();

  const { redirectUrl } = useSelector((state) => state.notificationRedirect);
  const { userInfo } = useSelector((state) => state.userLogin);

  const register = () => {
    console.log("Initializing HomePage");

    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On success, we should be able to receive notifications
    PushNotifications.addListener("registration", (token) => {
      console.log("token is", token.value);
      dispatch(getFCMTokenAction(token.value));
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
        dispatch({ type: "NOTIFICATION_REDIRECT", payload: "redirect" });
      }
    );
  };

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

  useEffect(() => {
    if (redirectUrl == "redirect") {
      dispatch({ type: "NOTIFICATION_REDIRECT", payload: "" });
      if (userInfo) {
        if (userInfo.IDHRRole == 5) {
          history.push("/announcement");
        } else if (userInfo.IDHRRole == 8) {
          history.push("/student-announcement");
        } else {
        }
      }
    }
  }, [redirectUrl, userInfo]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        {location.pathname !== "/login" && <Header />}
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route
              path={"/student-exam-division"}
              component={ExamDivisionStudent}
            />
            <Route path={"/student-pid"} component={PidStudent} />
            <Route
              path={"/student-quick-links"}
              component={QuickLinksStudent}
            />
            <Route
              path={"/student-resources/:id?"}
              component={ResourcesStudent}
            />

            <Route
              path={"/student-assignment-front/:id?"}
              component={AssignmentFrontStudent}
            />
            <Route
              path={"/student-assignment-front-edit/:id?"}
              component={AssignmentEditForm}
            />
            <Route
              path={"/student-announcement"}
              component={AnnouncementStudent}
            />
            <Route path={"/student-syllabus"} component={SyllabusStudent} />
            <Route
              path={"/student-class-schedule"}
              component={ClassScheduleStudent}
            />
            <Route
              path={"/student-old-questions"}
              component={OldQuestionsStudent}
            />
            <Route path={"/calendar"} component={Holiday} />
            <Route path={"/student-attendance"} component={AttendanceStudent} />
            <Route path={"/login/:id?"} component={Login} />
            <Route
              exact
              path={"/student-academic-grading"}
              component={AcademicGradingStudent}
            />
            <Route
              exact
              path={"/student-subject-view/:id"}
              component={DashboardSubjectViewStudent}
            />
            <Route
              exact
              path={"/student-leaverequest"}
              component={StudentLeaveRequest}
            />
            <Route
              exact
              path={"/student-dashboard"}
              component={DashboardStudent}
            />

            {/* TEACHERS COMPONET */}
            <Route path={"/exam-division"} component={ExamDivision} />
            <Route path={"/exam-schedule"} component={ExamSchedule} />
            <Route path={"/exam-mark-entry"} component={ExamMarkEntry} />
            <Route path={"/pid"} component={Pid} />
            <Route path={"/quick-links"} component={QuickLinks} />
            <Route path={"/resources/:id?"} component={Resources} />
            <Route path={"/syllabus"} component={Syllabus} />
            <Route path={"/class-schedule"} component={ClassSchedule} />
            <Route path={"/old-questions"} component={OldQuestions} />
            <Route path={"/attendance"} exact component={Attendance} />
            <Route
              path={"/attendance/table-details"}
              component={StudentMonthlyPresentSheetMobileTable}
            />
            <Route
              path={"/attendance/table-edit"}
              component={StudentMonthlyPresentSheetUpdateForm}
            />
            <Route exact path={"/announcement"} component={Announcement} />
            <Route
              path={"/exam-mark-approval"}
              component={ExamMarkApprovalTeacher}
            />
            <Route path={"/assignment/:id?"} component={Assignment} />
            <Route
              path={"/leaverequest-teacher"}
              component={TeacherLeaveRequest}
            />
            <Route path={"/video-conference"} component={VideoConference} />
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
            <Route path={"/teacher-dashboard"} component={DashboardTeacher} />
            <Route path={"/"} component={DashboardTeacher} />

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
