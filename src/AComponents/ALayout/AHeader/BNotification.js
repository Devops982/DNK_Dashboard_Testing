import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

function BNotification() {
  return (
    <Badge badgeContent={4} color="primary">
      <NotificationsIcon />
    </Badge>
  );
}

export default BNotification;
