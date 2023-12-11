import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from './AboutPage.module.scss'

export const AboutPage = ({className}) => {
    return (
        <div className={classNames(cls.AboutPage, {}, [className])}>

        </div>
    );
};

