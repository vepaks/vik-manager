import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "../../../shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "../../ThemeSwitcher";

export const Navbar = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/login"
          className={cls.mainLink}
        >
          LOGIN
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/register" className={cls.mainLink}>
          REGISTER
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/cloud" className={cls.mainLink}>
          CLOUD
        </AppLink>
      </div>
    </div>
  );
};
