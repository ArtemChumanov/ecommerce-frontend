// @ts-ignore
import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./style/theme";
import MainLayout from "./components/shared/Layouts/Layout";

const App: FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
