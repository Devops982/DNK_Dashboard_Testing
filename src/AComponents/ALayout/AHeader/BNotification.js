import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

function BNotification() {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
      </Badge>
    </div>
  );
}

export default BNotification;
