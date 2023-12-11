import React, {useState } from "react";
import { Button } from "../../../../../shared/ui/Button";
import { Input } from "../../../../../shared/ui/Input";
import { useTranslation } from "react-i18next";
import useRegistration from "../../../models/registration";
import { classNames } from "../../../../../shared/lib/classNames/classNames";
import cls from "./SignupForm.module.scss";

const SignupForm = ({ className }) => {
  const { t } = useTranslation();
  const { registration } = useRegistration();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const isValid =
      formData.password === formData.confirmPassword &&
      !formData.password.includes(" ");
  const isEmailValid =  formData.email.includes("@")
      && formData.email.split('@')[1].includes('.')
      && formData.email.split('@')[1].split('.')[1].length >= 2;

  const handleRegistration = async () => {
    try {
      setErrorMessage("");

      const response = await registration(
          formData.email,
          formData.password
      );

      if (response.data.status === 400) {
        setErrorMessage("Response status is 400");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage(
          error.response?.data?.message || "Вече съществува потребител с такъв e-mail"
      );
    }
  };

  return (
      <div className={classNames(cls, {}, [className])}>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-start">
          <div>
            <a href="/signup">
              <h3
                  className={classNames(cls.Logo, {}, [
                    className,
                    "text-4xl font-bold",
                  ])}
              >
                {t("Регистрация в системата")}
              </h3>
            </a>
          </div>

          {errorMessage && (
              <div className="text-center py-4 lg:px-4">
                <div
                    className="p-2 bg-red-800 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex"
                    role="alert"
                >
              <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                {t("Грешка")}
              </span>
                  <span className="font-semibold mr-2 text-left flex-auto">
                {t(errorMessage)}
              </span>
                </div>
              </div>
          )}

          <div
              className={classNames(cls.Signup, {}, [
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
                    value={formData.email}
                    setValue={(value) => handleChange("email", value)}
                    type="email"
                    placeholder={t("въведете email")}
                />
                {!isEmailValid && <p>{t("Invalid e-mail")}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-m font-medium text-gray-700 undefined">
                Password
              </label>
              <div className="flex flex-col items-start">
                <Input
                    value={formData.password}
                    setValue={(value) => handleChange("password", value)}
                    type="password"
                    placeholder={t("въведете парола")}
                />
                {!isValid && (
                    <p>{t("Passwords do not match or contain spaces")}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <Input
                    value={formData.confirmPassword}
                    setValue={(value) =>
                        handleChange("confirmPassword", value)
                    }
                    type="password"
                    placeholder={t("Подтвърдете паролата")}
                />
                {!isValid && (
                    <p>{t("Passwords do not match or contain spaces")}</p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <a
                  className="text-sm text-gray-600 underline hover:text-gray-900"
                  href="/login"
              >
                {t("Вече имаш регистрация?")}
              </a>

              <Button
                  className={classNames(cls.Button, {}, [
                    "inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md active:bg-gray-900 false",
                  ])}
                  type="submit"
                  onClick={handleRegistration}
                  disabled={!isValid || !isEmailValid}
              >
                {t("Регистрация")}
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SignupForm;
