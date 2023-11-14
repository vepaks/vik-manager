import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './Loader.module.scss'

export const Loader = ({className}) => {
    return (
        <div className={classNames(cls.Loader, {}, [className, "flex items-center justify-center min-h-screen p-5 min-w-screen"])}>
          <div className={classNames(cls.Loader, {}, [className, "flex space-x-2 animate-pulse"])}>
              <div className={classNames(cls.spins, {}, [className, "w-4 h-4 rounded-full"])}></div>
              <div className={classNames(cls.spins, {}, [className, "w-4 h-4 rounded-full"])}></div>
              <div className={classNames(cls.spins, {}, [className, "w-4 h-4 rounded-full"])}></div>
              <div className={classNames(cls.spins, {}, [className, "w-4 h-4 rounded-full"])}></div>
          </div>
        </div>
    );
};

