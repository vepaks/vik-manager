import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from "./Table.module.scss"



export const Table = ({className}) => {
    return (
        <div className={classNames(cls.Table, {}, [className, 'text-3xl cursor-not-allowed'])}>
            <h1 className={classNames(cls, {}, [className, 'text-3xl cursor-not-allowed'])} >
               Table
            </h1>
        </div>
    );
};

export default Table;
