import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../footer";
import Header from "../header";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#428e92",
      main: "#006064",
      dark: "#00363a",
      contrastText: "#f5f5f5",
    },
    secondary: {
      light: "#ffb04c",
      main: "#f57f17",
      dark: "#bc5100",
      contrastText: "#212121",
    },
  },
});

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [tasks,setTasks] = useState([]);

  const handleTasksChanged = (tasks: any) => {
    setTasks(tasks);
  }
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
        <main className="container">{children}</main>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default Layout;
