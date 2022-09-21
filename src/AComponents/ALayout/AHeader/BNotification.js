import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

function BNotification() {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <NotificationsIcon color="action" />
      </Badge>
    </div>
  );
}

export default BNotification;
