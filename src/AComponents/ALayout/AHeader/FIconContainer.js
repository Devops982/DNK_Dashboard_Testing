import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import BNotification from "./BNotification";
import CMessages from "./CMessages";
import DProfile from "./DProfile";

const IconContainer = styled(Box)(({ theme }) => ({display:"flex",alignItems:"center", gap:"20px"}));

function FIconContainer() {
  return (
    <IconContainer>
      <BNotification />
      <CMessages />
      <DProfile />
    </IconContainer>
  );
}

export default FIconContainer;
