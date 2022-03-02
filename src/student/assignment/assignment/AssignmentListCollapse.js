import React, { useState } from "react";
import { Button, Collapse, makeStyles } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ListForTable from "../../../components/ListForTable";

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

const AssignmentListCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListForTable onClick={handleClick}>
        <p>
          <span
            style={{
              padding: "8px 10px",
              borderRadius: "50%",
              fontSize: "12px",
              color: "#fff",
              backgroundColor: "#253053",
            }}
          >
            {item.AssignmentName[0]}
          </span>
          <span style={{ paddingLeft: "12px" }}>{item.AssignmentName}</span>{" "}
          <span
            style={{ fontSize: "10px", color: "#444", paddingLeft: "10px" }}
          >
            {item.SubmittedDate ? (
              <span style={{ color: "green" }}>Submitted</span>
            ) : (
              <span style={{ color: "red" }}>Pending</span>
            )}
          </span>
        </p>
        <div>{open ? <ExpandLess /> : <ExpandMore />}</div>
      </ListForTable>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className={classes.collapse}>
          <p>
            <span>AssignmentDate</span> : {item.AssignmentDate.slice(0, 10)}
          </p>
          <p>
            <span>DueDate</span> : {item.DueDate.slice(0, 10)}
          </p>
          <p>
            <span>TotalMark</span> :{item.TotalMark}
          </p>
          <p>
            <span>ObtainedMarks</span> : {item.ObtainedMarks}
          </p>
          <p>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              //   onClick={() => downloadHandler(item.IDAssignment)}
            >
              <CloudDownloadIcon style={{ fontSize: 12 }} />
            </Button>
          </p>
        </div>
      </Collapse>
    </>
  );
};

export default AssignmentListCollapse;
