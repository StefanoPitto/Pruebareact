import React from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
const Headline = styled.h1`
  color: ${(theme) => theme.mainColor};
  background-color: ${({ theme }) => theme.secondaryColor};
`;

const whiteTheme = {
  mainColor: "#ffffff",
  secondaryColor: "#000000",
};

const darkTheme = {
  mainColor: "#000000",
  secondaryColor: "#ffffff",
};

const MainSection = (props) => {
  return (
    <div>
      <Headline>Hola Mundo!</Headline>
      <Fab onClick={() => props.changeTheme(darkTheme)}>DarkTheme</Fab>
      <Fab onClick={() => props.changeTheme(whiteTheme)}>WhiteTheme</Fab>
    </div>
  );
};

export default MainSection;
