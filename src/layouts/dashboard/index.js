import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import SideBar from "./Sidebar";

const DashboardLayout = () => {

  return (
    <Stack direction={"row"} >
      {/* SideBar */}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
