import { CloudPage } from "../../../entities/user/CloudPage";
import { MainPage } from "../../../pages/MainPage";

export class AppRoutes {
  static MAIN = new AppRoutes("main");
  static CLOUD = new AppRoutes("cloud");

  constructor(AppRoutes) {
    this.AppRoutes = AppRoutes;
  }
  toString() {
    return this.AppRoutes;
  }
}

export const RoutePath = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CLOUD]: "/cloud",
};
export const routeConfig = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.CLOUD]: {
    path: RoutePath.cloud,
    element: <CloudPage />,
  },
};
