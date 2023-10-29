import React from 'react';
// import {LoginPage} from "../pages/LoginPage";
import {classNames} from "../shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import {Navbar} from "../widgets/Navbar";
import {AppRouter} from "./providers/router";

const App = () => {
    const { theme } = useTheme();

    return (
        <div
            className={classNames("app", { red: true, black: true }, [theme, "cls3"])}
        >
            <Navbar/>
            <AppRouter />
        </div>
    );
};

export default App;