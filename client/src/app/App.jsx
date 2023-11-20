import React, { useEffect } from "react";
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
  }, [dispatch]);

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
