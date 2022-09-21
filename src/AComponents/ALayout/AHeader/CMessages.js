import React from "react";
import Badge from "@mui/material/Badge";
import EmailIcon from "@mui/icons-material/Email";

function CMessages() {
  return (
    <Badge badgeContent={4} color="error">
      <EmailIcon />
    </Badge>
  );
}

export default CMessages;
