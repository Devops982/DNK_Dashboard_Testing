import React from "react";
import Badge from "@mui/material/Badge";
// import EmailIcon from "@mui/icons-material/Email";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function CMessages() {
  return (
    <Badge badgeContent={4} color="error">
      <MailOutlineIcon color="error"/>
    </Badge>
  );
}

export default CMessages;
