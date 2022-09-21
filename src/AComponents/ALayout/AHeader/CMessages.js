import React from "react";
import Badge from "@mui/material/Badge";
import EmailIcon from "@mui/icons-material/Email";

function CMessages() {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <EmailIcon color="action" />
      </Badge>
    </div>
  );
}

export default CMessages;
