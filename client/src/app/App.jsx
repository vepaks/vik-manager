import React, { useEffect, useState } from "react";
// import {LoginPage} from "../pages/LoginPage";
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { Navbar } from "../widgets/Navbar";
import { AppRouter } from "./providers/router";
import { useDispatch } from "react-redux";
import { auth } from "../features/auth/models/auth";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <div
      className={classNames("app", { red: true, black: true }, [theme, "cls3"])}
    >
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
