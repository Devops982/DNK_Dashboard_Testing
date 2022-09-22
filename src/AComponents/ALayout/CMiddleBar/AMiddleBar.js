import { Box } from "@mui/material";
import React from "react";
import BCurrencyExchangeRate from "./BCurrencyExchangeRate";
import CTableEdit from "./CTableEdit";

function AMiddleBar() {
  return (
    <>
      <Box flex={4} padding={2}>
        <BCurrencyExchangeRate />
      </Box>
    </>
  );
}

export default AMiddleBar;
