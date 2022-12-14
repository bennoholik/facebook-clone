import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (accessToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);
  console.log(accessToken);

  return (
    cookies.set("user_token", accessToken),
    {
      // sameSite: "none",
      secure: false,      
      path: "/",
      expires: new Date(expireDate),
      httpOnly: true
    }
  );
};

export const setUserData = (userinfo) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);
  const userData = {
    nickname: userinfo.nickname,
    profileImage: userinfo.profileImage,
    userId: userinfo.userId,
  };

  return (
    cookies.set("user_data", userData),
    {
      sameSite: "strict",
      path: "/",
      expires: new Date(expireDate),
    }
  );
};

export const getCookieToken = () => {
  return cookies.get("user_token");
};

export const getUserData = () => {
  return cookies.get("user_data");
};

export const removeCookieToken = () => {
  return cookies.remove("user_token", { sameSite: "strict", path: "/" });
};

export const removeUserData = () => {
  return cookies.remove("user_data", { sameSite: "strict", path: "/" });
};
