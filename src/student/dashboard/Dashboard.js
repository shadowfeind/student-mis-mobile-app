import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Notification from "../../components/Notification";
import DashboardCard from "./DashboardCard";
import { subject } from "./SubjectData";
import { GET_STUDENT_DASHBOARD_RESET } from "./DashboardConstants";
import { useEffect } from "react";
import { getDashboardContentAction } from "./DashboardActions";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PushNotificationsContainer from "../../PushNotificationsContainer";

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    padding: "10px 10px 60px 10px",
    "& a": {
      textDecoration: "none",
    },
  },
  gridStyle: {
    "&:hover": {
      marginTop: "-10px",
    },
  },
}));

const Dashboard = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { dashboardContent, error } = useSelector(
    (state) => state.getDashboardContent
  );
  const { userInfo } = useSelector((state) => state.userLogin);

  if (error) {
    setNotify({
      isOpen: true,
      message: error,
      type: "error",
    });
    dispatch({ type: GET_STUDENT_DASHBOARD_RESET });
  }

  useEffect(() => {
    if (!dashboardContent) {
      dispatch(getDashboardContentAction());
    }
    if (!userInfo) {
      history.push("/login");
    }
  }, [dispatch, dashboardContent, userInfo]);
  return (
    <>
      <PushNotificationsContainer />
      {/* <div className={classes.dashboardContainer}>
        {dashboardContent &&
          dashboardContent.searchFilterModel.ddlSubject.map((s) => (
            <Link key={s.id} to={`/subject-view/${s.Key}`}>
              <DashboardCard subject={s} key={s.id} />
            </Link>
          ))}
      </div>
      <Notification notify={notify} setNotify={setNotify} /> */}
    </>
  );
};

export default Dashboard;
