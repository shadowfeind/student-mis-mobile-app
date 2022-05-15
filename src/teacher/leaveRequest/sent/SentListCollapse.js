import React, { useState } from "react";
import { Button, Collapse, makeStyles } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import ListForTable from "../../../components/ListForTable";
import {
  downloadLeaveRequestAction,
  getSingleDeleteLeaveRequestAction,
  getSingleEditLeaveRequestAction,
} from "../TeacherLeaveRequestActions";
import { GET_SINGLE_TO_CREATE_LEAVE_REQUESTS_RESET } from "../TeacherLeaveRequestConstants";

const useStyles = makeStyles((theme) => ({
  collapse: {
    padding: "16px",
    borderBottom: "1px solid #d3d3d3",
    "& span": {
      fontWeight: "bolder",
    },
  },
  button: {
    marginRight: "10px",
    padding: "5px",
    minWidth: "10px",
    fontSize: "12px",
  },
}));

const SentListCollapse = ({ item, setOpenPopUp, setOpenDeletePopup }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };
  const updateCollegeHandler = (id) => {
    dispatch(getSingleEditLeaveRequestAction(id));
    dispatch({ type: GET_SINGLE_TO_CREATE_LEAVE_REQUESTS_RESET });
    setOpenPopUp(true);
  };

  const deleteLeaveHandler = (id) => {
    dispatch(getSingleDeleteLeaveRequestAction(id));
    setOpenDeletePopup(true);
  };

  const downloadHandler = (id) => {
    dispatch(downloadLeaveRequestAction(id));
  };

  return (
    <div
      style={{
        padding: "6px 6px 0 6px",
      }}
    >
      <div style={{ backgroundColor: "#fff" }}>
        <ListForTable onClick={handleClick}>
          <p>{item.LeaveDecription?.slice(0, 25)}...</p>
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
                Edit &nbsp;
                <EditIcon style={{ fontSize: 12 }} />
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() => deleteLeaveHandler(item.IDLeaveRequest)}
              >
                Delete &nbsp;
                <DeleteIcon style={{ fontSize: 12 }} />
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => downloadHandler(item.IDLeaveRequest)}
              >
                Download &nbsp;
                <CloudDownloadIcon style={{ fontSize: 12 }} />
              </Button>
            </p>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default SentListCollapse;
