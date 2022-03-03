import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import {
  createTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

import BottomNavigationMis from "./components/BottomNavigationMis";

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
  return (
    <Router>
      <ThemeProvider theme={theme}>
        {/* <SideMenu /> */}
        <div className={classes.appMain}>
          <Header />
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route path={"/exam-division"} component={ExamDivision} />
              {/* <Route path={"/exam-schedule"} component={ExamSchedule} /> */}
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
          <BottomNavigationMis />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
};

export default App;
