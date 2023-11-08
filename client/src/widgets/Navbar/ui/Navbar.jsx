import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "../../../shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "../../ThemeSwitcher";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../app/reducers/userReducer";
import {redirectToLogin} from "../../../shared/lib/redirects/toLogin/redirectToLogin";

export const Navbar = ({ className }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        {isAuth ? (
          <div>
            <AppLink
              theme={AppLinkTheme.SECONDARY}
              to="/"
              className={cls.mainLink}
            >
              MAIN
            </AppLink>
            <AppLink
              theme={AppLinkTheme.SECONDARY}
              to="/cloud"
              className={cls.mainLink}
            >
              CLOUD
            </AppLink>
            <AppLink
              onClick={() => {
                dispatch(logout());
                redirectToLogin()
              }}
              theme={AppLinkTheme.SECONDARY}
              className={cls.mainLink}
            >
              LOGOUT
            </AppLink>
          </div>
        ) : (
          <div>
            <AppLink
              theme={AppLinkTheme.SECONDARY}
              to="/login"
              className={cls.mainLink}
            >
              LOGIN
            </AppLink>
            <AppLink
              theme={AppLinkTheme.SECONDARY}
              to="/signup"
              className={cls.mainLink}
            >
              REGISTER
            </AppLink>
          </div>
        )}
      </div>
    </div>
  );
};
