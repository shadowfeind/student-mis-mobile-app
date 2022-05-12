import { API_URL, axiosInstance } from "../../constants";

import {
  GET_ALL_EXAM_DIVISION_REQUEST,
  GET_ALL_EXAM_DIVISION_SUCCESS,
  GET_ALL_EXAM_DIVISION_FAIL,
  GET_SINGLE_EXAM_DIVISION_REQUEST,
  GET_SINGLE_EXAM_DIVISION_SUCCESS,
  GET_SINGLE_EXAM_DIVISION_FAIL,
  GET_SINGLE_EXAM_DIVISION_RESET,
  CREATE_EXAM_DIVISION_REQUEST,
  CREATE_EXAM_DIVISION_SUCCESS,
  CREATE_EXAM_DIVISION_FAIL,
  CREATE_EXAM_DIVISION_RESET,
  GET_SINGLE_EXAM_DIVISION_EDIT_REQUEST,
  GET_SINGLE_EXAM_DIVISION_EDIT_SUCCESS,
  GET_SINGLE_EXAM_DIVISION_EDIT_FAIL,
  GET_SINGLE_EXAM_DIVISION_EDIT_RESET,
  UPDATE_SINGLE_EXAM_DIVISION_REQUEST,
  UPDATE_SINGLE_EXAM_DIVISION_SUCCESS,
  UPDATE_SINGLE_EXAM_DIVISION_FAIL,
  UPDATE_SINGLE_EXAM_DIVISION_RESET,
} from "./ExamDivisionConstants";

export const getAllExamDivisionAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_EXAM_DIVISION_REQUEST });
    const { data } = await axiosInstance.get(
      `/api/AcademicExamDivision/GetAllExamDivision`
    );

    dispatch({ type: GET_ALL_EXAM_DIVISION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_EXAM_DIVISION_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSingleExamDivisionAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_EXAM_DIVISION_REQUEST });

    const { data } = await axiosInstance.get(
      `/api/GetToCreateAcademicExamDivision/6/singleGetToCreate`
    );

    dispatch({ type: GET_SINGLE_EXAM_DIVISION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_EXAM_DIVISION_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createExamDivisionAction = (examDivision) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_EXAM_DIVISION_REQUEST });

    const jsonData = JSON.stringify({ dbModel: examDivision });

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    const { data } = await axiosInstance.post(
      `/api/AcademicExamDivision/PostAcademicExamDivision`,
      jsonData
    );

    dispatch({ type: CREATE_EXAM_DIVISION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_EXAM_DIVISION_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSingleExamDivisionEditAction =
  (IDAcademicExamDivision, idFacultyProgramLink) => async (dispatch) => {
    try {
      dispatch({ type: GET_SINGLE_EXAM_DIVISION_EDIT_REQUEST });

      const { data } = await axiosInstance.get(
        `/api/GetToEditSingleAcademicExamDivision/${IDAcademicExamDivision}/${idFacultyProgramLink}/singleEdit`
      );

      dispatch({ type: GET_SINGLE_EXAM_DIVISION_EDIT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_SINGLE_EXAM_DIVISION_EDIT_FAIL,
        payload:
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateSingleExamDivisionAction =
  (examDivision) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_SINGLE_EXAM_DIVISION_REQUEST });

      const jsonData = JSON.stringify({ dbModel: examDivision });

      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };

      const { data } = await axiosInstance.put(
        ` /api/AcademicExamDivision/PutAcademicExamDivision`,
        jsonData
      );

      dispatch({ type: UPDATE_SINGLE_EXAM_DIVISION_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_SINGLE_EXAM_DIVISION_FAIL,
        payload:
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
