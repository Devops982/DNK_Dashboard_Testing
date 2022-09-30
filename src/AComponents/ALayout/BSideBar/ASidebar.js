import { Box } from "@mui/material";
import React from "react";
import BSideBarLists from "./BSideBarLists";

function ASidebar() {
  return (
    <>
      <Box bgcolor="white" flex={0.5} padding={2}>
        <BSideBarLists />
      </Box>
    </>
  );
}

export default ASidebar;
