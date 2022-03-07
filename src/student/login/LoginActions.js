import { API_URL } from "../../constants";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./LoginConstants";

export const login = (userName, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${API_URL}/api/users/login`,
      { userName, password },
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
  document.location.href = "/login";
};
