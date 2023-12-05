import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "../../../shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "../../ThemeSwitcher";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../app/reducers/userReducer";
import { useTranslation } from "react-i18next";
import { Button } from "../../../shared/ui/Button";
import React from "react";

export const Navbar = ({ className }) => {
  const { t, i18n } = useTranslation();
  //   може да се разделят преводите на чънкове:
  //   правим нов json с ключове
  //   вкарваме useTranslation(namespace)
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.user.currentUser.id);

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "bg" ? "en" : "bg");
  };

  if (isAuth) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button onClick={toggle}>{t("ЕЗИК")}</Button>
        <ThemeSwitcher />
        {/*<p className={cls.number}>Вашият номер: {currentUserId}</p>*/}
        <div className={cls.links}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to="/"
            className={cls.mainLink}
          >
            {t("ПОТРЕБИТЕЛИ")}
          </AppLink>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to="/create"
            className={cls.mainLink}
          >
            {t("ДОБАВИ АДРЕС")}
          </AppLink>
          <AppLink
            onClick={() => {
              dispatch(logout());
            }}
            theme={AppLinkTheme.SECONDARY}
            className={cls.mainLink}
          >
            {t("ИЗЛЕЗ")}
          </AppLink>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={toggle}>{t("ЕЗИК")}</Button>
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
