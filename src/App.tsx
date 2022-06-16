import React from "react";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./style/theme";
import MainLayout from "./components/shared/Layouts/Layout";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
