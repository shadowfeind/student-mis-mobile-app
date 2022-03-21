import axios from "axios";
import { API_URL } from "../../constants";
import {
  GENERATE_FCM_TOKEN,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./LoginConstants";

export const getFCMTokenAction = (token) => async (dispatch) => {
  dispatch({ type: GENERATE_FCM_TOKEN, payload: token });
};

export const login = (userName, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const {
      getFCMToken: { FCMToken },
    } = getState();

    console.log("this is token", FCMToken);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const jsonData = JSON.stringify({
      UserName: userName,
      Password: password,
      RememberMe: true,
      FCMTokenValue: FCMToken,
    });

    const { data } = await axios.post(
      `${API_URL}/api/AccountRemote/PostLogon`,
      jsonData,
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("blueberryToken", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("blueberryToken");
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/#/login";
};
