import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BNotification from "./BNotification";
import CMessages from "./CMessages";
import DProfile from "./DProfile";
import ESearchBar from "./ESearchBar";
import styled from "@emotion/styled";
import FIconContainer from "./FIconContainer";

/* MUI APPBar component with Logo,LoginButton and Notifications*/

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export default function AHeader() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#191970" }}>
      <StyledToolBar>
        <Typography variant="h6" style={{color: 'White'}}>India Post</Typography>
        <ESearchBar />
        <FIconContainer />
        {/* <Button color="inherit">Login</Button> */}
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton> */}
      </StyledToolBar>
    </AppBar>
  );
}
