import {LoginPage} from "../../../pages/LoginPage";
import {RegisterPage} from "../../../pages/RegisterForm";

export class AppRoutes {
    static LOGIN = new AppRoutes('login');
    static REGISTER = new AppRoutes('register');

    constructor(AppRoutes) {
        this.AppRoutes = AppRoutes;
    }
    toString() {
        return this.AppRoutes;
    }
}

export const RoutePath= {
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.REGISTER]: '/register'
};
export const routeConfig= {
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage/>
    },
    [AppRoutes.REGISTER]: {
        path: RoutePath.register,
        element: <RegisterPage/>
    },
}