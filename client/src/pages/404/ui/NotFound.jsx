import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from './NotFound.module.scss'
import {AppLink} from "../../../shared/ui/AppLink/AppLink";

export const NotFound = ({className}) => {
    return (
        <div className={classNames(cls.NotFound, {}, [className])}>
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
            <div className={classNames(cls.container, {}, ["container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl"])}>
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
                    <span className="block mb-2 dark:text-violet-400">Страницата не е намерена</span>
                    <h1 className="text-8xl font-extrabold dark:text-gray-50">404</h1>
                    <p className="my-8 underline">
                        За да ползвате нашите услуги трябва да влезете във вашият профил.
                    </p>
                    <p className="my-8">
                        Ако сте потребител трябва да получите референтен номер от вашият ВиК служител.
                    </p>
                    <div className={classNames(cls.NotFound, {}, ["flex flex-wrap justify-center"])}>
                        <AppLink to={"/signup"} className={classNames(cls.Btn, {}, ["px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700"])}>Регистрирай се</AppLink>
                        <AppLink to={"/login"} className={classNames(cls.Btn, {}, ["px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700"])}>Влез</AppLink>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

