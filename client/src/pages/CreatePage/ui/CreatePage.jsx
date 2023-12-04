import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from './CreatePage.module.scss'

export const CreatePage = ({className}) => {
    return (
        <div className={classNames(cls.CreatePage, {}, [className])}>

        </div>
    );
};

