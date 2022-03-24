export const API_URL = "http://vidyacube.com";

export const tokenConfig = () => {
  const user = JSON.parse(localStorage.getItem("blueberryToken"));
  if (user && user.AccessToken) {
    const tokenReturn = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.AccessToken}`,
      },
    };
    return tokenReturn;
  } else {
    return {};
  }
};
