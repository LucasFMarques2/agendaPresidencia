import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../Pages/Login";
import { SignUp } from "../Pages/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<SignUp />} />
    </Routes>
  );
}
