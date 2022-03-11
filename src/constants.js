export const API_URL = "http://103.90.86.151:100";

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

export const fireToken = () => {
  return "AAAACB9i9IE:APA91bEuqomtN9gss5UOVzngtIofWkWo9tUWAZ_2LYBNeKbuZXXns-S6NuBWEgYCnQj8gsI6YbvlbxKIByeYvHjgf2U-GjTTPCB44_K6yjcPhvDHqQD5WaUCshNEDzAuz3r91MeBJe3D";
};
