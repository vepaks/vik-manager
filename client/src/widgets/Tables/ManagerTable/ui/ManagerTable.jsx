import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './ManagerTable.module.scss'

export const ManagerTable = ({className}) => {
    return (
        <div className={classNames(cls.ManagerTable, {}, [className])}>

        </div>
    );
};

