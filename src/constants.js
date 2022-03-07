export const API_URL = "http://103.90.86.151:100";

export const tokenConfigFunc = (token) => {
  localStorage.setItem("blueberryToken", JSON.stringify(token));
};

const USER_SESSION = localStorage.getItem("blueberryToken")
  ? JSON.parse(localStorage.getItem("blueberryToken"))
  : null;

export const tokenConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${USER_SESSION}`,
  },
};
