import React from "react";
import Badge from "@mui/material/Badge";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

function BNotification() {
  return (
    <Badge badgeContent={4} color="primary">
      <NotificationsNoneOutlinedIcon color="white"/>
    </Badge>
  );
}

export default BNotification;
