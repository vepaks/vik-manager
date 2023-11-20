import { createContext } from "react";

export class Theme {
  static DARK = new Theme("dark");
  static LIGHT = new Theme("light");

  constructor(theme) {
    this.theme = theme;
  }
  toString() {
    return this.theme;
  }
}

export const ThemeContext = createContext({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
