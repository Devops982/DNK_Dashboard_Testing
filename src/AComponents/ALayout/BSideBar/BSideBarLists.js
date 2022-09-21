import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function BSideBarLists() {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <CurrencyRupeeIcon />
          </ListItemIcon>
          <ListItemText primary="Edit Exchange Rate" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Users" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default BSideBarLists;
