import { combineReducers } from "redux";
import {
  downloadAssignmentReducer,
  downloadSubmittedAssignmentReducer,
  getAllAssignmentReducer,
  getAssignmentListReducer,
  getSingleAssignmentReducer,
  putSingleAssignmentReducer,
} from "./student/assignment/assignment/AssignmentReducers";
import {
  getAllOtherOptionsForStudentReducer,
  getAllStudentAttendanceReducer,
  getEnglishDateStudentReducer,
  getListStudentAttendanceReducer,
} from "./student/attendance/studentMonthlyPresentSheet/StudentMonthlyPresentSheetReducers";

import { getAllClassScheduleReducer } from "./student/classSchedule/ClassScheduleReducer";
import {
  getDashboardContentReducer,
  getHeaderContentReducer,
} from "./student/dashboard/DashboardReducers";

import { userLoginReducer } from "./student/login/LoginReducers";

import {
  downloadOldQuestionsReducer,
  getAllOldQuestionsReducer,
  getListOldQuestionsStudentReducer,
  getSubjectOptionsForOldQuestionsReducer,
} from "./student/oldQuestions/OldQuestionsReducers";

import {
  getAllUploadPhoto,
  getAllUploadPhotoReducer,
  uploadPhotoReducer,
} from "./student/pid/uploadPhoto/UploadPhotoReducers";

import {
  downloadNewResourcesReducer,
  getAllNewResourcesStudentReducer,
  getNewResourcesStudentListReducer,
} from "./student/resources/newResourcesStudent/NewResourcesStudentReducers";

import {
  getAllSyllabusReducer,
  getListSyllabusReducer,
} from "./student/syllabus/SyllabusReducers";

export const reducers = combineReducers({
  userLogin: userLoginReducer,
  getHeaderContent: getHeaderContentReducer,
  getDashboardContent: getDashboardContentReducer,
  //user profile reducers starts
  //PID uploadPhoto
  uploadPhoto: uploadPhotoReducer,
  getAllUploadPhoto: getAllUploadPhotoReducer,
  //user profile reducers ends
  //attendance start
  getAllStudentAttendance: getAllStudentAttendanceReducer,
  getListStudentAttendance: getListStudentAttendanceReducer,
  getAllOtherOptionsForStudent: getAllOtherOptionsForStudentReducer,
  //attendance end
  //Resources(New Resources Student Reducers)
  getAllNewResourcesStudent: getAllNewResourcesStudentReducer,
  getNewResourcesStudentList: getNewResourcesStudentListReducer,
  downloadNewResources: downloadNewResourcesReducer,
  //Assignment Reducers
  getAllAssignment: getAllAssignmentReducer,
  getAssignmentList: getAssignmentListReducer,
  getSingleAssignment: getSingleAssignmentReducer,
  putSingleAssignment: putSingleAssignmentReducer,
  downloadAssignment: downloadAssignmentReducer,
  downloadSubmittedAssignment: downloadSubmittedAssignmentReducer,
  //ClassSchedule Reducer
  getAllClassSchedule: getAllClassScheduleReducer,
  //OldQuestions Reducers
  getAllOldQuestions: getAllOldQuestionsReducer,
  getSubjectOptionsForOldQuestions: getSubjectOptionsForOldQuestionsReducer,
  getListOldQuestionsStudent: getListOldQuestionsStudentReducer,
  downloadOldQuestions: downloadOldQuestionsReducer,
  //Syllabus Teacher
  getAllSyllabus: getAllSyllabusReducer,
});
