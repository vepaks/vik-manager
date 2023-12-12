import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./NotAuth.module.scss";
import NotFound from "../../../shared/assets/bg/NotAuth.png";
import { AppLink } from "../../../shared/ui/AppLink/AppLink";

export const NotAuth = ({ className }) => {
  return (
    <div className={classNames(cls.NotAuth, {}, [className])}>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div
          className={classNames(cls.container, {}, [
            "container grid gap mx-auto text-center lg:grid-cols-2 xl:grid-cols-5",
          ])}
        >
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
            <span className="block mb-2 dark:text-violet-400">
              SUPER PRO MAX
            </span>
            <h1 className="text-5xl font-extrabold dark:text-gray-50">
              ВиК Мениджър
            </h1>
            <p className="my-8 underline">
              За да ползвате нашите услуги трябва да влезете във вашият профил.
            </p>
            <p className="my-8">
              Ако сте потребител трябва да получите референтен номер от вашият
              ВиК служител.
            </p>
            <div
              className={classNames(cls.NotAuth, {}, [
                "flex flex-wrap justify-center",
              ])}
            >
              <AppLink
                to={"/signup"}
                className={classNames(cls.Btn, {}, [
                  "px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700",
                ])}
              >
                Регистрирай се
              </AppLink>
              <AppLink
                to={"/login"}
                className={classNames(cls.Btn, {}, [
                  "px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700",
                ])}
              >
                Влез
              </AppLink>
            </div>
          </div>
          <img
            src={NotFound}
            alt=""
            className="object-cover ml-auto sm:m-auto max-w-sm rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </div>
      </section>
    </div>
  );
};
