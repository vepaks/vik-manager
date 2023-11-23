import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "../../../shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "../../ThemeSwitcher";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../app/reducers/userReducer";

export const Navbar = ({ className }) => {

  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const id = useSelector(state => state.user._id)

  console.log(id)

  if (isAuth) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <ThemeSwitcher />
        <p className={cls.number}>Вашият номер: {id}</p>
        <div className={cls.links}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to="/"
            className={cls.mainLink}
          >
            ПОТРЕБИТЕЛИ
          </AppLink>
          <AppLink
            onClick={() => {
              dispatch(logout());
            }}
            theme={AppLinkTheme.SECONDARY}
            className={cls.mainLink}
          >
            ИЗЛЕЗ
          </AppLink>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />

      <div className={cls.links}>
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
      </div>
    </div>
  );
};
