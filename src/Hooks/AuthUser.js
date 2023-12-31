import axios from "axios";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import server_url from "../config";

export default function AuthUser() {
  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = localStorage.getItem("access");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getUser = () => {
    const userString = localStorage.getItem("phone");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };

  const getUserRole = () => {
    const roleString = localStorage.getItem("role");
    const role_name = JSON.parse(roleString);
    return role_name;
  };
  const getUserInfo = () => {
    const userInfoString = localStorage.getItem("user_info");
    const user_info = JSON.parse(userInfoString);
    return user_info;
  };

  const getUserIp = () => {
    const userIp = localStorage.getItem("user_ip");
    const user_ip = JSON.parse(userIp);
    return user_ip;
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());
  const [userRole, setUserRole] = useState(getUserRole());
  const [email, setEmail] = useState(getUser());
  const [userInfo, setUserInfo] = useState(getUserInfo());
  const [userIp, setUserIp] = useState(getUserIp());
  // const [removeUserIp , setRemoveUserIp]=useState({});

  // console.log("userRole", userRole);

  const saveToken = (email, access, role, userInfo, userIp) => {
    localStorage.setItem("access", JSON.stringify(access));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("role", JSON.stringify(role));
    localStorage.setItem("user_info", JSON.stringify(userInfo));
    // localStorage.setItem("user_ip", JSON.stringify(userIp));

    setEmail(email);
    setToken(token);
    setUserInfo(userInfo);
    setUser(user);
    setUserRole(userRole);
    setUserIp(userIp);
    navigate("/");
  };

  const logout = () => {
    localStorage.clear();
    fetch(
      `https://go-tutor-server.zayedabdullah.com/api/v1/auth/delete-ip/${userInfo?._id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.modifiedCount === 1) {
          window.location.reload();
          navigate("/");
        }
      });
  };

  const http = axios.create({
    baseURL: "https://go-tutor-server.zayedabdullah.com/api/v1",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    setToken: saveToken,
    token,
    userRole,
    getToken,
    http,
    email,
    getUserInfo,
    userInfo,
    logout,
    userIp,
  };
}
