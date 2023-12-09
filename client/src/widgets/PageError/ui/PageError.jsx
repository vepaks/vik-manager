import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from './PageError.module.scss'

export const PageError = ({className, errorMsg}) => {

    return (
        <div className={classNames(cls.PageError, "flex flex-col items-center justify-center bg-yellow-200 min-h-screen", [className])}>
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! An error occurred</h1>
            <p className="text-lg text-red-400 mb-8">{errorMsg}</p>
            <a href="/" className="text-lg text-blue-500 underline mt-4">Go back home</a>
        </div>
    );
};