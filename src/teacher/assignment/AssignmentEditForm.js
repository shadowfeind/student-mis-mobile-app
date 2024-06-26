import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import InputControl from "../../components/controls/InputControl";
import { useForm, Form } from "../../customHooks/useForm";
import DatePickerControl from "../../components/controls/DatePickerControl";
import { putSingleToEditTeacherAssignmentAction } from "./AssignmentActions";
import { makeStyles } from "@material-ui/styles";
import { API_URL } from "../../constants";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

const initialFormValues = {
  IDAssignment: 0,
  IDHREmployee: 0,
  IDFacultyProgramLink: 0,
  IDAcademicYear: 0,
  IDAcademicFacultySubjectLink: 0,
  IDLevel: 0,
  Section: 0,
  IDAcademicShift: 20,
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
  AssignmentSubmitCode: 109,
  AssignmentDate: "2022-02-03T00:00:00",
  DueDate: "2022-02-03T00:00:00",
  SubmittedDate: "",
  CreatedBy: "",
  FullName: "",
  FirstName: "",
  MiddleName: "",
  LastName: "",
  RollNo: "",
  MobileNumber: "",
  SubjectName: " ",
  IsActive: true,
  Created_On: "2022-02-03T12:45:22.2318691",
  Updated_On: "2022-02-03T12:45:22.2318691",
};

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  editHeading: {
    paddingLeft: "10px",
  },
});

const AssignmentEditForm = ({
  singleAssignment,
  assignmentImage,
  setOpenPop3,
}) => {
  const [image, setImage] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [submitDisabler, setSubmitDisabler] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();

  const { values, setValues, handleInputChange, errors, setErrors } =
    useForm(initialFormValues);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    temp.AssignmentName = !fieldValues.AssignmentName
      ? "This feild is required"
      : !fieldValues.AssignmentName.trim()
      ? "This feild is required"
      : "";

    temp.DueDate =
      fieldValues.DueDate == null || fieldValues.DueDate == ""
        ? "This feild is required"
        : "";

    temp.AssignmentDate =
      fieldValues.AssignmentDate == null || fieldValues.AssignmentDate == ""
        ? "This feild is required"
        : "";

    temp.AssignmentSummary = !fieldValues.AssignmentSummary
      ? "This feild is required"
      : !fieldValues.AssignmentSummary.trim()
      ? "This feild is required"
      : "";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
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

  const handleSubmit = () => {
    if (validate()) {
      setSubmitDisabler(true);
      dispatch(putSingleToEditTeacherAssignmentAction(image, values));
    }
  };

  useEffect(() => {
    if (singleAssignment) {
      setValues({ ...singleAssignment });
    }
  }, [singleAssignment]);

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      // source: CameraSource.Camera,
    });

    console.log("image", image);
    const imageUrl = image?.path || image?.webPath;
    setImgSrc(Capacitor.convertFileSrc(imageUrl));
    console.log("imageurl", imageUrl);

    const result = await fetch(Capacitor.convertFileSrc(imageUrl));
    console.log("my result", result);
    const blob = await result.blob();
    const file = new File([blob], "image.jpeg", { type: blob.type });
    console.log("my file", file);
    setImage(file);
  };

  return (
    <div style={{ width: "100%" }}>
      <h4 className={classes.editHeading}>
        FullName : {`${values.FirstName} ${values.LastName}`}
      </h4>
      <h4 className={classes.editHeading}>
        MobileNumber : {values.MobileNumber}
      </h4>
      <h4 className={classes.editHeading}>
        MobileNumber : {values.MobileNumber}
      </h4>
      <h4 className={classes.editHeading}>
        Student Comment : {values.StudentComment}
      </h4>
      <h4 className={classes.editHeading}>RollNo : {values.RollNo}</h4>
      <h4 className={classes.editHeading}>Full Marks : {values.TotalMark}</h4>
      <div style={{ height: "10px" }}></div>
      <InputControl
        name="AssignmentName"
        label="Assignment Name"
        value={values.AssignmentName}
        onChange={handleInputChange}
        errors={errors.AssignmentName}
      />
      <div style={{ height: "10px" }}></div>
      <DatePickerControl
        name="AssignmentDate"
        label="FromDate"
        value={values.AssignmentDate}
        onChange={handleInputChange}
        errors={errors.AssignmentDate}
      />
      <div style={{ height: "10px" }}></div>

      <DatePickerControl
        name="DueDate"
        label="DueDate"
        value={values.DueDate}
        onChange={handleInputChange}
        errors={errors.DueDate}
      />
      <div style={{ height: "10px" }}></div>
      <InputControl
        name="AssignmentSummary"
        label="Assignment Summary"
        value={values.AssignmentSummary}
        onChange={handleInputChange}
        errors={errors.AssignmentSummary}
      />

      <div style={{ height: "10px" }}></div>
      <InputControl
        name="MarksObtained"
        label="Marks Obtained"
        type="number"
        value={values.MarksObtained}
        onChange={handleInputChange}
      />
      <div style={{ height: "10px" }}></div>
      <InputControl
        name="TeacherComment"
        label="Teacher Comment"
        value={values.TeacherComment}
        onChange={handleInputChange}
      />
      <div style={{ height: "10px" }}></div>
      {/* <InputControl
        name="ImageUploaded"
        label="Select File"
        value={values.ClassLocation}
        onChange={(e) => handleImage(e)}
        type="file"
        errors={errors.image}
      /> */}
      <button
        style={{
          backgroundColor: "#253053",
          color: "#fff",
          padding: "6px 14px",
          display: "block",
        }}
        onClick={() => takePicture()}
      >
        Take a photo
      </button>
      <div style={{ height: "10px" }}></div>
      <img
        src={
          imgSrc ? imgSrc : assignmentImage && `${API_URL}${assignmentImage}`
        }
        height={200}
        width={200}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "start",
          paddingTop: "10px",
          marginTop: "10px",
          borderTop: "1px solid #f3f3f3",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setOpenPop3(false)}
          style={{ margin: "10px 0 0 10px" }}
        >
          CANCEL
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={submitDisabler}
          style={{ margin: "10px 0 0 10px" }}
          onClick={handleSubmit}
        >
          {submitDisabler ? "PROCESSING..." : "SUBMIT"}
        </Button>
      </div>
    </div>
  );
};

export default AssignmentEditForm;
