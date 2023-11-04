import { useContext } from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";


export function useTheme(){
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
      const newTheme= theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

    console.log(newTheme)

    setTheme(newTheme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  };
  return {
    theme,
    toggleTheme
  }
}