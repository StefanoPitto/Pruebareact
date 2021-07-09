import "./App.css";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import MainSection from "./Components/MainSection";

const whiteTheme = {
  mainColor: "#ffffff",
  secondaryColor: "#000000",
};

const darkTheme = {
  mainColor: "#000000",
  secondaryColor: "#ffffff",
};

function App() {
  const [actualTheme, setTheme] = useState(whiteTheme);

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <ThemeProvider theme={actualTheme}>
      <MainSection changeTheme={changeTheme}></MainSection>
    </ThemeProvider>
  );
}

export default App;
