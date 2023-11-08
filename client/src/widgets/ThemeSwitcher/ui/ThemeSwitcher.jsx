import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "../../../app/providers/ThemeProvider";
import {Button, ThemeButton} from "../../../shared/ui/Button";
// import LightIcon from "../../../shared/assets/icons/light.svg"
// import DarkIcon from "../../../shared/assets/icons/dark.svg"

export const ThemeSwitcher = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
        theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      { theme === Theme.DARK ?  'Светла тема' : 'Тъмна тема' }
    </Button>
  );
};
