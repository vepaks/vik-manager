import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from "./Table.module.scss"



export const Table = ({className}) => {


    return (
        <div className={classNames(cls.Table, {}, [className])}>
            <h1 >
               Table
            </h1>
        </div>
    );
};

export default Table;
