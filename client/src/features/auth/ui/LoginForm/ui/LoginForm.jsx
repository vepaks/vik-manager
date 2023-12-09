import { classNames } from "../../../../../shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { Input } from "../../../../../shared/ui/Input";
import { Button } from "../../../../../shared/ui/Button";
import React, {Suspense, useEffect, useState} from "react";
import { login } from "../../../models/login";
import { useDispatch } from "react-redux";
import { Loader } from "../../../../../shared/ui/Loader";
import { useTranslation } from "react-i18next";

export const LoginForm = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Errors, setErrors] = useState({error: ""});

  const handleLogin = async () => {
    try {
      setErrors({ error: "" });

      const response = await dispatch(login(Email, Password));
      console.log(response.data.user.id);
    } catch (error) {
      setErrors({ error: error.response?.data?.message || "Грешка при авторизация" });
    }
  };

  return (
    <div className={classNames(cls, {}, [className])}>
      <Suspense fallback={<Loader />}>
        <div>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-start">
            <div>
              <a href="/login">
                <h3
                  className={classNames(cls.Logo, {}, [
                    className,
                    "text-4xl font-bold",
                  ])}
                >
                  {t("Вход в системата")}
                </h3>
              </a>
            </div>

            {Errors.error && (
              <div className="text-center py-4 lg:px-4">
                <div
                  className="p-2 bg-red-800 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex"
                  role="alert"
                >
                  <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                   {t("Грешка")}
                  </span>
                  <span className="font-semibold mr-2 text-left flex-auto">
                      {t(Errors.error)}
                  </span>
                </div>
              </div>
            )}
            <div
              className={classNames(cls.Login, {}, [
                className,
                "w-full px-6 py-4 mt-6 overflow-hidden shadow-md sm:max-w-md sm:rounded-lg",
              ])}
            >
              <div className="mt-4">
                <label className="block text-m font-medium text-gray-700 undefined">
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <Input
                    value={Email}
                    setValue={setEmail}
                    type="email"
                    placeholder={t("въведете email")}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-m font-medium text-gray-700 undefined">
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <Input
                    value={Password}
                    setValue={setPassword}
                    type="password"
                    placeholder={t("въведете парола")}
                  />
                </div>
              </div>
              <div className="flex items-center justify-end mt-4">
                <a
                  className="text-sm text-gray-600 underline hover:text-gray-900"
                  href="/signup"
                >
                  {t("Нямаш регистрация?")}
                </a>
                <Button
                  className={classNames(cls.Button, {}, [
                    "inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md active:bg-gray-900 false",
                  ])}
                  type="submit"
                  onClick={handleLogin}
                >
                  {t("Влез")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};