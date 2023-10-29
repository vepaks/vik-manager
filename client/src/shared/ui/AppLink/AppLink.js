import { classNames } from "../../lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link } from "react-router-dom";

export class AppLinkTheme {
  static PRIMARY = new AppLinkTheme('primary');
  static SECONDARY = new AppLinkTheme('secondary');

  constructor(AppLink) {
    this.AppLink = AppLink;
  }
  toString() {
    return this.AppLink;
  }
}

export const AppLink = (props) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
