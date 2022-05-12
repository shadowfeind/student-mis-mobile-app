import React, { useEffect, useState } from "react";
import {
  Button,
  InputAdornment,
  makeStyles,
  TableBody,
  Toolbar,
  Grid,
} from "@material-ui/core";
import useCustomTable from "../../../customHooks/useCustomTable";
import InputControl from "../../../components/controls/InputControl";
import LoadingComp from "../../../components/LoadingComp";
import { Edit, Search } from "@material-ui/icons";
import Popup from "../../../components/Popup";
import CustomContainer from "../../../components/CustomContainer";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../../components/Notification";
import {
  getAllPersonalInformationAction,
  getAllStudentPersonalInformationAction,
  getSinglePersonalInformationAction,
  getStudentResetPasswordAction,
} from "./PersonalInformationActions";
import {
  GET_ALL_PERSONALINFORMATION_RESET,
  GET_ALL_PERSONALINFORMATION_SUCCESS,
  GET_LIST_PERSONALINFORMATION_RESET,
  GET_SINGLE_PERSONALINFORMATION_RESET,
  GET_STUDENT_RESET_PASSWORD_RESET,
  POST_STUDENT_PASSWORD_RESET,
  UPDATE_SINGLE_PERSONALINFORMATION_RESET,
} from "./PersonalInformationConstants";
import ListPersonalInformation from "../listComponent/ListPersonalInformation";
import PersonalInformationForm from "./PersonalInformationForm";
import { API_URL } from "../../../constants";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DraftsIcon from "@material-ui/icons/Drafts";
import MobileScreenShareIcon from "@material-ui/icons/MobileScreenShare";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import CameraEnhanceIcon from "@material-ui/icons/CameraEnhance";
import UploadPhoto from "../uploadPhoto/UploadPhoto";
import ResetPasswordForm from "./ResetPasswordForm";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    padding: "16px",
    "& h3": {
      marginTop: "0",
    },
  },
  profileImageContainer: {
    padding: "40px",
    backgroundColor: "#f3f3f3",
    textAlign: "center",
    borderRadius: "8px",
    color: "#444",
    "& h2": {
      marginBottom: "4px",
    },
    "& h4": {
      margin: "0",
      fontWeight: 400,
    },
  },
  profileOtherContainer: {
    padding: "20px",
    boxShadow: "2px -2px 10px 2px #f3f3f3",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "16px",
    textAlign: "center",
    "& h5, & p": {
      margin: "0",
    },
    "& h5": {
      fontWeight: 300,
      fontSize: "12px",
    },
    "& p": {
      fontWeight: "bolder",
    },
  },
  profileContainerDetails: {
    padding: "20px 20px 5px 20px",
    boxShadow: "2px -2px 10px 2px #f3f3f3",
    borderRadius: "8px",
    marginTop: "16px",
    marginBottom: "50px",
    "& h4": {
      margin: "0",
    },
    "& p": {
      fontWeight: 600,
      fontSize: "14px",
    },
    "& svg": {
      marginBottom: "-7px",
      color: "#253053",
      paddingRight: "10px",
    },
    "& span": {
      fontWeight: 300,
    },
  },
}));

const PersonalInformation = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [editStudentPhotoPopup, setEditStudentPhotoPopup] = useState(false);
  const [resetOpenPopup, setResetOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const classes = useStyles();

  const dispatch = useDispatch();

  const { getAllPersonalInformation, loading, error } = useSelector(
    (state) => state.getAllPersonalInformation
  );
  const { singlePersonalInformation, error: singlePersonalInformationError } =
    useSelector((state) => state.getSinglePersonalInformation);

  const { headerContent, error: headerContentError } = useSelector(
    (state) => state.getHeaderContent
  );

  const { success: uploadPhotoSuccess } = useSelector(
    (state) => state.uploadPhotoStudent
  );

  const {
    getStudentResetPassword,
    error: getStudentResetPasswordError,
    loading: resetPasswordLoading,
  } = useSelector((state) => state.getStudentResetPassword);

  const {
    success: postStudentPasswordSuccess,
    error: postStudentPasswordError,
  } = useSelector((state) => state.postStudentPassword);

  const {
    success: updateSinglePersonalInformationSuccess,
    error: updateSinglePersonalInformationError,
  } = useSelector((state) => state.updateSinglePersonalInformation);
  if (error) {
    setNotify({
      isOpen: true,
      message: error,
      type: "error",
    });
    dispatch({ type: GET_ALL_PERSONALINFORMATION_RESET });
  }

  if (getStudentResetPasswordError) {
    setNotify({
      isOpen: true,
      message: getStudentResetPasswordError,
      type: "error",
    });
    dispatch({ type: GET_STUDENT_RESET_PASSWORD_RESET });
    setResetOpenPopup(false);
  }

  if (postStudentPasswordError) {
    setNotify({
      isOpen: true,
      message: postStudentPasswordError,
      type: "error",
    });
    dispatch({ type: POST_STUDENT_PASSWORD_RESET });
    setResetOpenPopup(false);
  }

  if (postStudentPasswordSuccess) {
    setNotify({
      isOpen: true,
      message: "Successfully Changed Password",
      type: "success",
    });
    dispatch(getAllStudentPersonalInformationAction());
    dispatch({ type: POST_STUDENT_PASSWORD_RESET });
    setResetOpenPopup(false);
  }

  if (updateSinglePersonalInformationSuccess) {
    setNotify({
      isOpen: true,
      message: "Successfully Updated",
      type: "success",
    });
    dispatch({ type: GET_ALL_PERSONALINFORMATION_SUCCESS });
    dispatch({ type: UPDATE_SINGLE_PERSONALINFORMATION_RESET });
    setOpenPopup(false);
  }

  if (updateSinglePersonalInformationError) {
    setNotify({
      isOpen: true,
      message: updateSinglePersonalInformationError,
      type: "error",
    });
    dispatch({ type: UPDATE_SINGLE_PERSONALINFORMATION_RESET });
    setOpenPopup(false);
  }
  if (singlePersonalInformationError) {
    setNotify({
      isOpen: true,
      message: singlePersonalInformationError,
      type: "error",
    });
    dispatch({ type: GET_SINGLE_PERSONALINFORMATION_RESET });
    setOpenPopup(false);
  }
  // const editHandler = () => {
  //   dispatch(getSinglePersonalInformationAction());
  //   setOpenPopup(true);
  // };

  const resetPasswordHandler = (id) => {
    dispatch(getStudentResetPasswordAction(id));
    setResetOpenPopup(true);
  };

  const handleImageChange = () => {
    setEditStudentPhotoPopup(true);
  };

  useEffect(() => {
    dispatch(getAllStudentPersonalInformationAction());
  }, []);
  return (
    <CustomContainer>
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <div className={classes.profileContainer}>
            <h3>Profile</h3>
            {headerContent && (
              <>
                <div className={classes.profileImageContainer}>
                  <div className={classes.imageContainer}>
                    <img
                      src={`${API_URL}${headerContent.FullPath}`}
                      width="80px"
                      height="80px"
                      style={{ borderRadius: "50%", border: "2px solid #fff" }}
                    />
                    <div onClick={handleImageChange}>
                      <CameraEnhanceIcon
                        style={{
                          width: "20px",
                          position: "relative",
                          left: "20px",
                          bottom: "24px",
                        }}
                      />
                    </div>
                  </div>
                  <h2>{headerContent.FullName}</h2>
                  <h4>{headerContent.Email}</h4>
                  <h5
                    onClick={() =>
                      resetPasswordHandler(
                        getAllPersonalInformation.dbModel.IDHREmployee
                      )
                    }
                    style={{ margin: "6px" }}
                  >
                    Change Password
                  </h5>
                </div>
                <div className={classes.profileOtherContainer}>
                  <div>
                    <h5>Class</h5>
                    <p>{headerContent?.ClassName}</p>
                  </div>
                  <div
                    style={{
                      height: "40px",
                      width: "1px",
                      backgroundColor: "#d3d3d3",
                    }}
                  ></div>
                  <div>
                    <h5>Roll No</h5>
                    <p>1</p>
                  </div>
                  <div
                    style={{
                      height: "40px",
                      width: "1px",
                      backgroundColor: "#d3d3d3",
                    }}
                  ></div>
                  <div>
                    <h5>Section</h5>
                    <p>A</p>
                  </div>
                </div>
                <div className={classes.profileContainerDetails}>
                  <h4>About</h4>
                  <p>
                    <LocationOnIcon /> <span>Lives at </span>Tinkune, Kathmandu
                  </p>
                  <p>
                    <DraftsIcon /> <span>Email at </span>
                    {headerContent.Email}
                  </p>
                  <p>
                    <MobileScreenShareIcon /> <span>Call at </span>
                    {headerContent.MobileNumber}
                  </p>
                  <p>
                    <PermIdentityIcon /> <span>Main Guardian Name </span>
                    {headerContent.FatherName}
                  </p>
                  <p>
                    <ContactPhoneIcon /> <span>Guardian Contact </span>
                    {headerContent.FatherContactNo}
                  </p>
                </div>
              </>
            )}
          </div>
        </>
      )}
      <Popup
        openPopup={resetOpenPopup}
        setOpenPopup={setResetOpenPopup}
        title="Change Password"
      >
        {resetPasswordLoading ? (
          <LoadingComp />
        ) : (
          <>
            <ResetPasswordForm
              userId={getStudentResetPassword && getStudentResetPassword.IDUser}
              setResetOpenPopup={setResetOpenPopup}
            />
          </>
        )}
      </Popup>
      <Popup
        openPopup={editStudentPhotoPopup}
        setOpenPopup={setEditStudentPhotoPopup}
        title="Change Profile Picture"
      >
        <UploadPhoto setEditStudentPhotoPopup={setEditStudentPhotoPopup} />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
    </CustomContainer>
  );
};

export default PersonalInformation;
