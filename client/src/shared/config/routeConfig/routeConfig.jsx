import {LoginPage} from "../../../pages/LoginPage";
import {RegisterPage} from "../../../pages/RegisterPage";
import {CloudPage} from "../../../pages/CloudPage";
import {MainPage} from "../../../pages/MainPage";

export class AppRoutes {
    static MAIN = new AppRoutes('main');
    static LOGIN = new AppRoutes('login');
    static REGISTER = new AppRoutes('register');
    static CLOUD = new AppRoutes('cloud');

    constructor(AppRoutes) {
        this.AppRoutes = AppRoutes;
    }
    toString() {
        return this.AppRoutes;
    }
}

export const RoutePath= {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.REGISTER]: '/register',
    [AppRoutes.CLOUD]: '/cloud'
};
export const routeConfig= {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage/>
    },
    [AppRoutes.REGISTER]: {
        path: RoutePath.register,
        element: <RegisterPage/>
    },
    [AppRoutes.CLOUD]: {
        path: RoutePath.cloud,
        element: <CloudPage/>
    },
}