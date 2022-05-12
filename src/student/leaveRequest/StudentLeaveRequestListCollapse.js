import React, { useState } from "react";
import { Button, Collapse, makeStyles } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import ListForTable from "../../components/ListForTable";
import {
  studentDownloadLeaveRequestAction,
  studentGetSingleDeleteLeaveRequestAction,
  studentGetSingleEditLeaveRequestAction,
} from "./StudentLeaveRequestActions";

const useStyles = makeStyles((theme) => ({
  collapse: {
    padding: "16px 16px 16px 24px",
    borderBottom: "1px solid #d3d3d3",
    "& span": {
      fontWeight: "bolder",
    },
    "& p": {
      margin: "0",
      paddingBottom: "4px",
      fontSize: "12px",
    },
  },
  button: {
    marginRight: "10px",
    padding: "5px 16px",
    minWidth: "10px",
    fontSize: "10px",
    marginBottom: "10px",
  },
  listWrapper: {
    display: "flex",
    alignItems: "center",
  },
}));

const StudentLeaveRequestListCollapse = ({
  item,
  setOpenPopUp,
  setOpenPopupDelete,
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };
  const updateCollegeHandler = (id) => {
    dispatch(studentGetSingleEditLeaveRequestAction(id));
    setOpenPopUp(true);
  };

  const deleteLeaveHandler = (id) => {
    dispatch(studentGetSingleDeleteLeaveRequestAction(id));
    setOpenPopupDelete(true);
  };

  const downloadHandler = (id) => {
    dispatch(studentDownloadLeaveRequestAction(id));
  };

  return (
    <div
      style={{
        padding: "6px 6px 0 6px",
      }}
    >
      <div style={{ backgroundColor: "#fff" }}>
        <ListForTable onClick={handleClick}>
          <div className={classes.listWrapper}>
            <div style={{ fontSize: "12px", color: "#666" }}>
              {item.FromDate.slice(0, 10)} <br /> {item.ToDate.slice(0, 10)}
            </div>
            <div
              style={{
                paddingLeft: "18px",
                fontSize: "14px",
                // fontWeight: "bolder",
              }}
            >
              {item.LeaveDecription?.slice(0, 25)}...
              <div
                style={{ fontSize: "10px", color: "#444", marginTop: "-3px" }}
              >
                <div
                  style={
                    item.Status === "PENDING"
                      ? { color: "blue" }
                      : item.Status === "APPROVED"
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {item.Status}
                </div>
              </div>
            </div>
          </div>
          <div>
            {open ? (
              <ExpandLess style={{ color: "#d1d1d1" }} />
            ) : (
              <ExpandMore style={{ color: "#d1d1d1" }} />
            )}
          </div>
        </ListForTable>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className={classes.collapse}>
            <p>
              <span>Receiver</span> : {item.FirsName}
              {item.MiddleName}
              {item.LastName}
            </p>
            <p>
              <span>Date</span> : {item.FromDate?.slice(0, 10)} /{" "}
              {item.ToDate?.slice(0, 10)}
            </p>
            <p>
              <span>Status</span> : {item.Status}
            </p>
            <p>
              <span>Description</span> : {item.LeaveDecription}
            </p>
            <p>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => updateCollegeHandler(item.IDLeaveRequest)}
              >
                <EditIcon style={{ fontSize: 12 }} />
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() => deleteLeaveHandler(item.IDLeaveRequest)}
              >
                <DeleteIcon style={{ fontSize: 12 }} />
              </Button>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                onClick={() => downloadHandler(item.IDLeaveRequest)}
              >
                <CloudDownloadIcon style={{ fontSize: 12 }} />
              </Button>
            </p>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default StudentLeaveRequestListCollapse;
