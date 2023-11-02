import { classNames } from "../../../../../shared/lib/classNames/classNames";
import cls from "./SignupForm.module.scss";
import { Input } from "../../../../../shared/ui/Input";
import { Button } from "../../../../../shared/ui/Button";
import React, { useState } from "react";
import {registration} from "../../../models/registration";

export const SignupForm = (props, { className }) => {
  // const [FirstName, setFirstName] = useState("");
  // const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <div className={classNames(cls, {}, [className])}>
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-start">
          <div>
            <a href="/signup">
              <h3
                className={classNames(cls.Logo, {}, [
                  className,
                  "text-4xl font-bold",
                ])}
              >
                Регистрация в системата
              </h3>
            </a>
          </div>
          <div
            className={classNames(cls.Signup, {}, [
              className,
              "w-full px-6 py-4 mt-6 overflow-hidden shadow-md sm:max-w-md sm:rounded-lg",
            ])}
          >
              {/*<div className="mt-4">*/}
              {/*  <label className="block text-m font-medium text-gray-700 undefined">*/}
              {/*    Име*/}
              {/*  </label>*/}
              {/*  <div className="flex flex-col items-start ">*/}
              {/*    <Input*/}
              {/*      value={FirstName}*/}
              {/*      type="text"*/}
              {/*      setValue={setFirstName}*/}
              {/*      placeholder="въведете име"*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div className="mt-4">*/}
              {/*  <label className="block text-m font-medium text-gray-700 undefined">*/}
              {/*    Фамилия*/}
              {/*  </label>*/}
              {/*  <div className="flex flex-col items-start">*/}
              {/*    <Input*/}
              {/*      value={LastName}*/}
              {/*      setValue={setLastName}*/}
              {/*      type="text"*/}
              {/*      placeholder="въведете фамилия"*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div className="mt-4">
                <label className="block text-m font-medium text-gray-700 undefined">
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <Input
                    value={Email}
                    setValue={setEmail}
                    type="email"
                    placeholder="въведете email"
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
                    placeholder="въведете парола"
                  />
                </div>
              </div>
              {/*<div className="mt-4">*/}
              {/*    <label*/}
              {/*        htmlFor="password_confirmation"*/}
              {/*        className="block text-sm font-medium text-gray-700 undefined"*/}
              {/*    >*/}
              {/*        Confirm Password*/}
              {/*    </label>*/}
              {/*    <div className="flex flex-col items-start">*/}
              {/*        <input*/}
              {/*            type="password"*/}
              {/*            name="password_confirmation"*/}
              {/*            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"*/}
              {/*        />*/}
              {/*    </div>*/}
              {/*</div>*/}
              <div className="flex items-center justify-end mt-4">
                <a
                  className="text-sm text-gray-600 underline hover:text-gray-900"
                  href="/login"
                >
                  Вече имаш регистрация?
                </a>
                <Button
                  className={classNames(cls.Button, {}, [
                    "inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md active:bg-gray-900 false",
                  ])}
                  type="submit"
                  onClick={() =>
                    registration(Email, Password)
                  }
                >
                  Регистрация
                </Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
