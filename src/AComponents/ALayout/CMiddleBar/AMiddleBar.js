import { Box } from "@mui/material";
import React from "react";
import BCurrencyDataGrid from "./BCurrencyDataGrid";





function AMiddleBar() {
  return (
    <>
      <Box flex={3} padding={2}>
      
        <BCurrencyDataGrid/>
      </Box>
    </>
  );
}

export default AMiddleBar;
