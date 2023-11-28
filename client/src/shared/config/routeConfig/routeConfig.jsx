import { LoginPage } from "../../../pages/auth/LoginPage";
import { CloudPage } from "../../../pages/CloudPage";
import { MainPage } from "../../../pages/MainPage";
import { SignupPage } from "../../../pages/auth/SignupPage";
import {DetailPage} from "../../../pages/DetailPage";

export class AppRoutes {
  static MAIN = new AppRoutes("main");
  static LOGIN = new AppRoutes("login");
  static SIGNUP = new AppRoutes("signup");
  static CLOUD = new AppRoutes("cloud");
  static DETAILS = new AppRoutes("details");

  constructor(AppRoutes) {
    this.AppRoutes = AppRoutes;
  }
  toString() {
    return this.AppRoutes;
  }
}

export const RoutePath = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.SIGNUP]: "/signup",
  [AppRoutes.CLOUD]: "/cloud",
  [AppRoutes.DETAILS]: "/details",
};
export const routeConfig = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.SIGNUP]: {
    path: RoutePath.signup,
    element: <SignupPage />,
  },
  [AppRoutes.CLOUD]: {
    path: RoutePath.cloud,
    element: <CloudPage />,
  },
  [AppRoutes.DETAILS]: {
    path: RoutePath.details,
    element: <DetailPage />,
  },
};
