import { LoginPage } from "../../../pages/auth/LoginPage";
import { CloudPage } from "../../../pages/CloudPage";
import { MainPage } from "../../../pages/MainPage";
import { SignupPage } from "../../../pages/auth/SignupPage";
import { DetailPage } from "../../../pages/DetailPage";
import { CreatePage } from "../../../pages/CreatePage/";
import {NotFound} from "../../../pages/404";

export class AppRoutes {
  static MAIN = new AppRoutes("main");
  static LOGIN = new AppRoutes("login");
  static SIGNUP = new AppRoutes("signup");
  static CLOUD = new AppRoutes("cloud");
  static DETAILS = new AppRoutes("details");
  static CREATE = new AppRoutes("create");
  // static NOT_FOUND = new AppRoutes("*");

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
  [AppRoutes.CREATE]: "/create",
  // [AppRoutes.NOT_FOUND]: "*",
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
  [AppRoutes.CREATE]: {
    path: RoutePath.create,
    element: <CreatePage />,
  },
  // [AppRoutes.NOT_FOUND]: {
  //   path: AppRoutes.NOT_FOUND,
  //   element: <NotFound />,
  // },
};
