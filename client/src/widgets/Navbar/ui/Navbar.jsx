import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "../../../shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "../../ThemeSwitcher";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../app/reducers/userReducer";
import {useTranslation} from "react-i18next";

export const Navbar = ({ className }) => {
    const {t, i18n} = useTranslation()
    //   може да се разделят преводите на чънкове:
    //   правим нов json с ключове
    //   вкарваме useTranslation(namespace)
    const isAuth = useSelector((state) => state.user.isAuth);
    const dispatch = useDispatch();
    const currentUserId = useSelector((state) => state.user.currentUser.id)

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "en" ? "bg" : "en");
    }


  if (isAuth) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <button onClick={toggle}>{t("смени темата")}</button>
        <ThemeSwitcher />
        <p className={cls.number}>Вашият номер: {currentUserId}</p>
        <div className={cls.links}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to="/"
            className={cls.mainLink}
          >
            {t('ПОТРЕБИТЕЛИ')}
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
