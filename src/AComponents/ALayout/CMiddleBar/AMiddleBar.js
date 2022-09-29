import { Box } from "@mui/material";
import React from "react";
import BCurrencyExchangeRate from "./BCurrencyExchangeRate";
import CCurrencyTableEdit from "./CCurrenyTableEdit";





function AMiddleBar() {
  return (
    <>
      <Box flex={4} padding={2}>
        {/* <BCurrencyExchangeRate /> */}
        <CCurrencyTableEdit/>
        
      </Box>
    </>
  );
}

export default AMiddleBar;
