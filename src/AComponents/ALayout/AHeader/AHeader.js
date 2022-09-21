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

/* MUI APPBar component with Logo,LoginButton and Notifications*/

export default function AHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "#3f51b5", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            India Post
          </Typography>
          <BNotification />
          <CMessages />
          <DProfile />
          <Button color="inherit">Login</Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
