import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from "./Table.module.scss"
export const Table = ({className}) => {


    return (
        <div className={classNames(cls.Table, {}, [className])}>

        </div>
    );
};

export default Table;
