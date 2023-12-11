import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from "./CreateForm.module.scss";
import { Loader } from "../../../../shared/ui/Loader";
import { Input } from "../../../../shared/ui/Input";
import { Button } from "../../../../shared/ui/Button";
import React, { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import usePostData from "../../models/postData";
import {useSelector} from "react-redux";
import {AppLink} from "../../../../shared/ui/AppLink/AppLink";

export const CreateForm = ({ className }) => {
  const { t } = useTranslation();
  const { postData } = usePostData(); // Use your custom hook

  const [address, setAddress] = useState("");
  const [chatId, setUserId] = useState("");
  const [additionalData, setAdditionalData] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const parentId = useSelector(state => state.user.currentUser?.id);

  const [addressError, setAddressError] = useState("");
  const [chatIdError, setUserIdError] = useState("");
  const [additionalDataError, setAdditionalDataError] = useState("");

  const validInput = () => {
    let isValid = true;
    if (address.trim() === "") {
      setAddressError(t("Адресата е задължителен!"));
      isValid = false;
    }
    if (chatId.trim() === "") {
      setUserIdError(t("Номерът на потребителя е задължителен!"));
      isValid = false;
    }
    if (additionalData.trim() === "") {
      setAdditionalDataError(t("Полето за данни е задължително!"));
      isValid = false;
    }
    return isValid;
  };

  const handleClick = async () => {
    setAddressError("");
    setUserIdError("");
    setAdditionalDataError("");

    if (validInput()) {
      try {
        await postData(chatId, parentId, address, additionalData);
        setSuccessMessage(t("Добавихте нови данни! Добави още?"));
      } catch (error) {
        console.error("Error submitting data:", error.message);
      }
    }
  };

  return (
    <div className={classNames(cls, {}, [className])}>
      <Suspense fallback={<Loader />}>
        <div>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-start">
            <div>
              <a href="/create">
                <h3
                  className={classNames(cls.Logo, {}, [
                    className,
                    "text-4xl font-bold",
                  ])}
                >
                  {t("Добавете нов адрес")}
                </h3>
              </a>
            </div>
            {successMessage && (
              <div className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
                {successMessage}
              </div>
            )}
            {successMessage && (
                <div className="mt-4 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4">
                  <p>
                    Виж обновените данни <AppLink to="/">тук</AppLink>{" "}
                  </p>
                </div>
            )}
            <div	className={classNames(cls.CreateForm, {}, [	className, "w-full px-6 py-4 mt-6 overflow-hidden shadow-md sm:max-w-md sm:rounded-lg",])}>
              <div className="mt-4">
                <label className="block text-m font-medium text-gray-700 undefined">{t("Адрес на подребителя")}</label>
                <div className="flex flex-col items-start">
                  <Input
                    type="text"
                    value={address}
                    setValue={setAddress}
                    placeholder={t("въведете адрес")}
                  />
                  { addressError && <span className="text-red-500">{addressError}</span>}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-m font-medium text-gray-700 undefined">{t("Номер на потребителя")}</label>
                <div className="flex flex-col istems-start">
                  <Input
                    type="text"
                    value={chatId}
                    setValue={setUserId}
                    placeholder={t("въведете номер")}
                  />
                  { chatIdError && <span className="text-red-500">{chatIdError}</span>}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-m font-medium text-gray-700 undefined">{t("Добавете данни")}</label>
                <div className="flex flex-col istems-start">
                  <Input
                   type="text"
                   value={additionalData}
                   setValue={setAdditionalData}
                   placeholder={t("добавете данни")}
                  />
                  { additionalDataError && <span className="text-red-500">{additionalDataError}</span>}
                </div>
              </div>
              <div className="flex items-center justify-end mt-4">
                <Button
                  className={classNames(cls.Button, {}, [
                  "inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md active:bg-gray-900 false text-center",
                  ])}
                  type="submit"
                  onClick={handleClick}
                >
                  {t("Добави")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};