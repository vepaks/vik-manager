import React, { Suspense, useEffect } from "react";
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { Navbar } from "../widgets/Navbar";
import { AppRouter } from "./providers/router";
import { useDispatch } from "react-redux";
import { auth } from "../features/auth/models/auth";
import { Footer } from "../widgets/Footer";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <div
      className={classNames("app", {}, [theme])}
    >
      <Suspense fallback="">
        <Navbar />
        <AppRouter />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
