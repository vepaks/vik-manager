import { classNames } from "../../../lib/classNames/classNames";
import cls from "./Input.module.scss";
import { memo } from "react";

export const Input = memo((props) => {
  const {
      className,
      value,
      type = 'text',
      onChange,
      ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.Input, {}, [
        // "block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-7",
      ])}
    >
      <input
        onChange={(event) => event.target.value}
        value={value}
        type={type}
      />
    </div>
  );
});
