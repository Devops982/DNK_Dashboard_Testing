import React from "react";
import styled from "@emotion/styled";
import { InputBase } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "10px",
  width: "40%",
}));
function ESearchBar() {
  return (
    <Search>
      <InputBase placeholder="Search..." />
    </Search>
  );
}

export default ESearchBar;
