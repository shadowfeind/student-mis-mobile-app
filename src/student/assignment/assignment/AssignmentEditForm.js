import React, { useState, useEffect } from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import InputControl from "../../../components/controls/InputControl";
import { useForm, Form } from "../../../customHooks/useForm";
import { putSingleAssignmentStudentAction } from "./AssignmentActions";
import { Link, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const initialFormValues = {
  IDAssignment: 0,
  IDHREmployee: 0,
  IDFacultyProgramLink: 0,
  IDAcademicYear: 0,
  IDAcademicSubject: 0,
  IDLevel: 0,
  Section: 0,
  IDAcademicShift: 0,
  ReceiverID: 0,
  AssignmentName: "",
  AssignmentSummary: "",
  TeacherComment: "",
  StudentComment: "",
  FolderName: "",
  DocumentName: "",
  DocumentSubmitted: "",
  TotalMark: 0,
  MarksObtained: "",
  AssignmentSubmitCode: 0,
  AssignmentDate: "2022-02-03T00:00:00",
  AssignmentTime: "00:00:00",
  DueTime: "00:00:00",
  DueDate: "2022-02-03T00:00:00",
  SubmittedDate: "0001-01-01T00:00:00",
  CreatedBy: "",
  TeacherMobileNumber: "",
  FullName: "",
  RollNo: "",
  MobileNumber: "",
  SubjectName: "",
  UniversityRegistrationNumber: "",
  IsActive: true,
  Created_On: "2022-02-03T16:28:30.4451629",
  Updated_On: "0001-01-01T00:00:00",
};

const useStyles = makeStyles((theme) => ({
  editContainer: {
    padding: "20px",
  },
  editTopHeader: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #d3d3d3",
    paddingBottom: "12px",
    "& svg": {
      marginBottom: "-6px",
    },
    "& a": {
      textDecoration: "none",
      color: "#000",
    },
  },
}));

const AssignmentEditForm = () => {
  const [image, setImage] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const { id: subjectId } = useParams();
  const dispatch = useDispatch();

  const classes = useStyles();

  const { singleAssignment } = useSelector(
    (state) => state.getSingleAssignment
  );

  const { values, setValues, handleInputChange, errors, setErrors } =
    useForm(initialFormValues);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(putSingleAssignmentStudentAction(image, values));
    }
  };

  const handleImage = (event) => {
    let imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (x) => {
      setImgSrc(x.target.result);
    };
    reader.readAsDataURL(imageFile);
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    if (singleAssignment) {
      setValues({ ...singleAssignment.dbStudentSubmissionModel });
    }
  }, [singleAssignment]);

  return (
    <>
      <Form onSubmit={handleSubmit} className={classes.editContainer}>
        <div className={classes.editTopHeader}>
          <Link to={`/assignment-front/${subjectId}`}>
            <KeyboardBackspaceIcon /> &nbsp;&nbsp;Go Back
          </Link>{" "}
          <span>Assignment Edit</span>
        </div>
        <div>
          <p>
            <strong>Assignment Name: </strong>
            {values.AssignmentName}
          </p>
          <p>
            <strong>FullName: </strong>
            {values.CreatedBy}
          </p>
          <p>
            <strong>Assignment Date: </strong>
            {values.AssignmentDate?.slice(0, 10)}
          </p>
          <p>
            <strong>Due Date: </strong>
            {values.DueDate?.slice(0, 10)}
          </p>
          <p>
            <strong>Mobile Number: </strong>
            {values.TeacherMobileNumber}
          </p>

          <p>
            <strong>Assignment Summary: </strong>
            {values.AssignmentSummary}
          </p>
          <p>
            <strong>Full Marks: </strong>
            {values.TotalMark}
          </p>
          <p>
            <strong>Assignment Summary: </strong>
            {values.AssignmentSummary}
          </p>

          <p>
            <strong>MarksObtained: </strong>
            {values.MarksObtained}
          </p>
          <p>
            <strong>Teacher's Comment: </strong>
            {values.TeacherComment}
          </p>
          <p>
            <strong>Student's Comment: </strong>
            {values.StudentComment}
          </p>
        </div>
        <InputControl
          name="StudentComment"
          label="StudentComment"
          value={values.StudentComment}
          onChange={handleInputChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <InputControl
          name="ImageUploaded"
          label="Select File"
          // value={values.ClassLocation}
          onChange={(e) => handleImage(e)}
          type="file"
          style={{ width: "100%", marginBottom: "10px" }}
          // errors={errors.image}
        />
        {imgSrc && <img src={imgSrc} height={150} width={150} />}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ margin: "10px 0 0 10px" }}
        >
          SUBMIT
        </Button>
      </Form>
    </>
  );
};

export default AssignmentEditForm;
