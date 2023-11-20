import React, {useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";

// Получаваме темата от local_storage ако я няма поставяме светла тема
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT
const ThemeProvider= ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );
  return (


    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );



};

export default ThemeProvider;