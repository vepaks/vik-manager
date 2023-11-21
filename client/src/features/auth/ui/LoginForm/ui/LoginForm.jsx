import { classNames } from "../../../../../shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { Button } from "../../../../../shared/ui/Button";
import { Input } from "../../../../../shared/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../models/login";
import {useCallback} from "react";
import {setEmail, setPassword} from "../../../../../app/reducers/loginReducer";

export const LoginForm = ({ className }) => {
  const dispatch = useDispatch();

    const email = useSelector((state) => state.email);
    const password = useSelector((state) => state.password);


  const onChangeEmail = useCallback( (value) => {
    dispatch(setEmail(value));
  }, [dispatch]);
  const onChangePassword = useCallback ((value) => {
    dispatch(setPassword(value));
  }, [dispatch]);



  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <h1>Влез в акаунта си</h1>
      <Input type="text"   onChange={onChangeEmail} value={email} className={cls.input} />
      <Input type="text" onChange={onChangePassword} value={password} className={cls.input} />
      <Button
        className={cls.loginBtn}
        onClick={() => {
          dispatch(login(email, password));
        }}
      >
        Влез
      </Button>
    </div>
  );
};

// <div className={classNames(cls, {}, [className])}>
//   <div>
//     <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-start">
//       <div>
//         <a href="/login">
//           <h3
//             className={classNames(cls.Logo, {}, [
//               className,
//               "text-4xl font-bold",
//             ])}
//           >
//             Вход в системата
//           </h3>
//         </a>
//       </div>
//       <div
//         className={classNames(cls.Login, {}, [
//           className,
//           "w-full px-6 py-4 mt-6 overflow-hidden shadow-md sm:max-w-md sm:rounded-lg",
//         ])}
//       >
//         <div className="mt-4">
//           <label className="block text-m font-medium text-gray-700 undefined">
//             Email
//           </label>
//           <div className="flex flex-col items-start">
//             <Input
//               value={Email}
//               setValue={setEmail}
//               type="email"
//               placeholder="въведете email"
//             />
//           </div>
//         </div>
//         <div className="mt-4">
//           <label className="block text-m font-medium text-gray-700 undefined">
//             Password
//           </label>
//           <div className="flex flex-col items-start">
//             <Input
//               value={Password}
//               setValue={setPassword}
//               type="password"
//               placeholder="въведете парола"
//             />
//           </div>
//         </div>
//         <div className="flex items-center justify-end mt-4">
//           <a
//             className="text-sm text-gray-600 underline hover:text-gray-900"
//             href="/signup"
//           >
//             Нямаш регистрация?
//           </a>
//           <Button
//             className={classNames(cls.Button, {}, [
//               "inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md active:bg-gray-900 false",
//             ])}
//             type="submit"
//             onClick={() => {
//               dispatch(login(Email, Password));
//             }}
//           >
//             Влез
//           </Button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;
