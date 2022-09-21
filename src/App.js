import "./App.css";
import React from "react";
import AHeader from "./AComponents/ALayout/AHeader/AHeader";
import ASidebar from "./AComponents/ALayout/BSideBar/ASidebar";
import AMiddleBar from "./AComponents/ALayout/CMiddleBar/AMiddleBar";
import { Stack } from "@mui/material";

function App() {
  return (
    <div>
      <AHeader />
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <ASidebar />
        <AMiddleBar />
      </Stack>
    </div>
  );
}

export default App;
