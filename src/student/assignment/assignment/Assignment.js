import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unstable_batchedUpdates } from "react-dom";
import {
  Button,
  InputAdornment,
  makeStyles,
  TableBody,
  Toolbar,
  Grid,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import useCustomTable from "../../../customHooks/useCustomTable";
import InputControl from "../../../components/controls/InputControl";
import Popup from "../../../components/Popup";
import CustomContainer from "../../../components/CustomContainer";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../../components/Notification";
import ConfirmDialog from "../../../components/ConfirmDialog";
import SelectControl from "../../../components/controls/SelectControl";
import {
  DOWNLOAD_ASSIGNMENT_STUDENT_RESET,
  DOWNLOAD_SUBMITTED_ASSIGNMENT_STUDENT_RESET,
  GET_ALL_ASSIGNMENT_STUDENT_RESET,
  GET_ASSIGNMENT_LIST_STUDENT_FAIL,
  GET_ASSIGNMENT_LIST_STUDENT_RESET,
  GET_SINGLE_ASSIGNMENT_STUDENT_RESET,
  PUT_SINGLE_ASSIGNMENT_STUDENT_RESET,
} from "./AssignmentConstant";
import {
  getAllAssignmentStudentAction,
  getAssignmentListStudentAction,
} from "./AssignmentActions";
import AssignmentTableCollapse from "./AssignmentTableCollapse";
import AssignmentEditForm from "./AssignmentEditForm";
import AssignmentListCollapse from "./AssignmentListCollapse";
import MobileTopSelectContainer from "../../../components/MobileTopSelectContainer";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "100%",
    fontSize: "12px",
  },
  input: {
    margin: "5px",
  },
  button: {
    position: "absolute",
    right: "10px",
  },
}));

const test = [{ Key: "", Value: "" }];

const tableHeader = [
  { id: "FullName", label: "Teacher Name" },
  { id: "AssignmentName", label: "Assignment Name" },
  { id: "AssignmentDate", label: "Assignment Date" },
  { id: "DueDate", label: "Due Date" },
  { id: "SubmittedDate", label: "SubmittedDate" },
  { id: "TotalMark", label: "FullMarks" },
  { id: "ObtainedMarks", label: "Obtained Marks" },
  { id: "DocumentName", label: "Assignment" },
  { id: "DocumentSubmitted", label: "Submitted Files" },
  { id: "Actions", label: "Submission", disableSorting: true },
];

const Assignment = () => {
  const { id: subjectIdFromDashboard } = useParams();
  const [ddlClass, setDdlClass] = useState([]);
  const [academicYearDdl, setAcademicYearDdl] = useState([]);
  const [programDdl, setProgramDdl] = useState([]);
  const [ddlShift, setDdlShift] = useState([]);
  const [programValue, setProgramValue] = useState("");
  const [classId, setClassId] = useState("");
  const [acaYear, setAcaYear] = useState("");
  const [shift, setShift] = useState("");
  const [errors, setErrors] = useState({});
  const [ddlFacultySubject, setDdlFacultySubject] = useState([]);
  const [facultySubject, setFacultySubject] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const [tableData, setTableData] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (item) => {
      return item;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const {
    TableContainer,
    TblHead,
    TblPagination,
    tableDataAfterPagingAndSorting,
  } = useCustomTable(tableData, tableHeader, filterFn);

  const handleSearch = (e) => {
    setFilterFn({
      fn: (item) => {
        if (e.target.value === "") {
          return item;
        } else {
          return item.filter((x) =>
            x.AssignmentName.toLowerCase().includes(e.target.value)
          );
        }
      },
    });
  };

  const { assignment, error: assignmentError } = useSelector(
    (state) => state.getAllAssignmentStudent
  );

  const { assignmentList, error: assignmentListError } = useSelector(
    (state) => state.getAssignmentListStudent
  );

  const { singleAssignment, error: singleAssignmentError } = useSelector(
    (state) => state.getSingleAssignmentStudent
  );

  const {
    success: putSingleAssignmentSuccess,
    error: putSingleAssignmentError,
  } = useSelector((state) => state.putSingleAssignmentStudent);

  const {
    success: downloadAssignmentSuccess,
    file: downloadFile,
    error: downloadAssignmentError,
  } = useSelector((state) => state.downloadAssignmentStudent);

  const {
    success: downloadSubmittedAssignmentSuccess,
    file: downloadSubmmitedFile,
    error: downloadSubmittedAssignmentError,
  } = useSelector((state) => state.downloadSubmittedAssignmentStudent);

  if (downloadFile) {
    var blob = new Blob([downloadFile]);
    var url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
  }

  if (downloadSubmmitedFile) {
    var blob = new Blob([downloadSubmmitedFile]);
    var url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
  }

  if (assignmentError) {
    setNotify({
      isOpen: true,
      message: assignmentError,
      type: "error",
    });
    dispatch({ type: GET_ALL_ASSIGNMENT_STUDENT_RESET });
  }
  if (downloadAssignmentError) {
    setNotify({
      isOpen: true,
      message: downloadAssignmentError,
      type: "error",
    });
    dispatch({ type: DOWNLOAD_ASSIGNMENT_STUDENT_RESET });
  }

  if (downloadSubmittedAssignmentError) {
    setNotify({
      isOpen: true,
      message: downloadSubmittedAssignmentError,
      type: "error",
    });
    dispatch({ type: DOWNLOAD_SUBMITTED_ASSIGNMENT_STUDENT_RESET });
  }

  if (putSingleAssignmentError) {
    setNotify({
      isOpen: true,
      message: putSingleAssignmentError,
      type: "error",
    });
    dispatch({ type: PUT_SINGLE_ASSIGNMENT_STUDENT_RESET });
  }
  if (putSingleAssignmentSuccess) {
    setNotify({
      isOpen: true,
      message: "Successfully Submitted",
      type: "success",
    });
    dispatch({ type: PUT_SINGLE_ASSIGNMENT_STUDENT_RESET });
    setOpenPopup(false);
    dispatch(
      getAssignmentListStudentAction(
        acaYear,
        programValue,
        classId,
        shift,
        facultySubject
      )
    );
  }
  if (singleAssignmentError) {
    setNotify({
      isOpen: true,
      message: singleAssignmentError,
      type: "error",
    });
    dispatch({ type: GET_SINGLE_ASSIGNMENT_STUDENT_RESET });
  }
  if (assignmentListError) {
    setNotify({
      isOpen: true,
      message: assignmentListError,
      type: "error",
    });
    dispatch({ type: GET_ASSIGNMENT_LIST_STUDENT_RESET });
  }

  useEffect(() => {
    if (!assignment) {
      dispatch(getAllAssignmentStudentAction());
    }
    if (assignment) {
      unstable_batchedUpdates(() => {
        setAcademicYearDdl(assignment.searchFilterModel.ddlAcademicYear);
        setProgramDdl(assignment.searchFilterModel.ddlFacultyProgramLink);
        setDdlClass(assignment.searchFilterModel.ddlClass);
        setDdlShift(assignment.searchFilterModel.ddlAcademicShift);
        setDdlFacultySubject(assignment.searchFilterModel.ddlSubject);
        setAcaYear(assignment.searchFilterModel.idAcademicYear);
        setProgramValue(assignment.searchFilterModel.idFacultyProgramLink);
        setClassId(assignment.searchFilterModel.level);
        setShift(assignment.searchFilterModel.idShift);
      });
      if (subjectIdFromDashboard) {
        setFacultySubject(subjectIdFromDashboard);
        dispatch(
          getAssignmentListStudentAction(
            assignment.searchFilterModel.idAcademicYear,
            assignment.searchFilterModel.idFacultyProgramLink,
            assignment.searchFilterModel.level,
            assignment.searchFilterModel.idShift,
            subjectIdFromDashboard
          )
        );
      }
    }
  }, [assignment, dispatch, subjectIdFromDashboard]);

  useEffect(() => {
    if (assignmentList) {
      setTableData(assignmentList.dbstuentSubmissionLst);
    }
  }, [assignmentList]);

  const handleExamScheduleSearch = (value) => {
    dispatch(
      getAssignmentListStudentAction(
        acaYear,
        programValue,
        classId,
        shift,
        value
      )
    );
    setFacultySubject(value);
  };

  return (
    <>
      <CustomContainer>
        <MobileTopSelectContainer>
          <Grid container>
            <Grid item xs={12}>
              <SelectControl
                name="facultySubject"
                label="Assignment Subject"
                value={facultySubject}
                onChange={(e) => handleExamScheduleSearch(e.target.value)}
                options={ddlFacultySubject}
                errors={errors.facultySubject}
              />
            </Grid>
          </Grid>
        </MobileTopSelectContainer>

        <div style={{ marginBottom: "30px" }}>
          {assignmentList?.dbstuentSubmissionLst.map((item) => (
            <AssignmentListCollapse
              item={item}
              key={item.$id}
              facultySubject={facultySubject && facultySubject}
              setOpenPopup={setOpenPopup}
            />
          ))}
        </div>
        {assignmentList?.dbstuentSubmissionLst.length < 1 && (
          <h4 style={{ textAlign: "center", marginTop: "10px" }}>No Data</h4>
        )}
      </CustomContainer>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Edit Assignment"
      >
        <AssignmentEditForm
          setOpenPopup={setOpenPopup}
          singleAssignment={
            singleAssignment && singleAssignment.dbStudentSubmissionModel
          }
        />
      </Popup>

      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default Assignment;
