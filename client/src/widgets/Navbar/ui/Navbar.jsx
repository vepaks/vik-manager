import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "../../../shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "../../ThemeSwitcher";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../app/reducers/userReducer";
import { Modal } from "../../../shared/ui/Modal/Modal";
import React, {useCallback, useState} from "react";
import {LoginForm} from "../../../features/auth";

export const Navbar = ({ className }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();


  const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((e) => !e)
    }, [])


  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <Modal isOpen={isAuthModal} onClose={setIsAuthModal}>
        <LoginForm/>
      </Modal>
      <div className={classNames(cls.header, {}, [className])}>
        {/*<h1  >ВиК Manager Pro Max</h1>*/}
      </div>
      <div className={cls.links}>
        {isAuth ? (
          <div>
            <AppLink
              theme={AppLinkTheme.SECONDARY}
              to="/"
              className={cls.mainLink}
            >
              ПОТРЕБИТЕЛИ
            </AppLink>
            <AppLink
              theme={AppLinkTheme.SECONDARY}
              to="/cloud"
              className={cls.mainLink}
            >
              ДОКУМЕНТАЦИЯ
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
        ) : (
          <div>
              {/*<Button*/}
              {/*    theme={ThemeButton.CLEAR}*/}
              {/*    className={cls.links}*/}
              {/*>*/}
              {/*    Влез*/}
              {/*</Button>*/}

            <AppLink
              theme={AppLinkTheme.SECONDARY}
              className={cls.mainLink}
              onClick={onToggleModal}
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
