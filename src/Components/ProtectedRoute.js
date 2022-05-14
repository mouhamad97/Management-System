import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AccessDenied from "../pages/AccessDenied";
import Login from "../pages/Login";

const ProtectedRoutes = (props) => {
  let { role, auth } = useAuth();
  let navigate = useNavigate();

  if (props.role && auth) {
    //if role exists
    console.log("1");
    if (role !== props.role) return <AccessDenied />; //if roles don't match
    else return <Outlet />; //if roles match
  } else {
    console.log("2");
    if (auth) return <Outlet />; //if no roles
    else return <Login />; //if not authenticated
  }
};

export default ProtectedRoutes;