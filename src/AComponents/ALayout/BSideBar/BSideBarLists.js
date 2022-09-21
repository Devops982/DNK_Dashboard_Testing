import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

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
    </List>
  );
}

export default BSideBarLists;
