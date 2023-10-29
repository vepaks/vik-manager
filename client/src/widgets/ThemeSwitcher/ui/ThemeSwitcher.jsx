import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "../../../app/providers/ThemeProvider";
import {Button, ThemeButton} from "../../../shared/ui/Button";

export const ThemeSwitcher = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
        theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      СМЕНИ ТЕМАТА
    </Button>
  );
};
