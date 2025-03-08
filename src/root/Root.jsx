import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <div className="py-8">
      <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
