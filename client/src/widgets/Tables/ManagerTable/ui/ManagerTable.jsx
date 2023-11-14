import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './ManagerTable.module.scss'
import {Data} from "../Data/ui/Data";
import {useSelector} from "react-redux";

export const ManagerTable = ({className}) => {

    const allData = useSelector(state => state.data.data)
    console.log(allData)

    return (
        <div className={classNames(cls.ManagerTable, {}, [])}>
            <div className={classNames(cls.header, {}, [])}>
                <div className={classNames(cls, {}, [])}>
                </div>
                <div className={classNames(cls.name, {}, [])}>
                   Адрес
                </div>
                <div className={classNames(cls.date, {}, [])}>
                    Дата
                </div>
                <div className={classNames(cls.size, {}, [])}>
                    Данни
                </div>
            </div>
            {allData && allData.map( data => <Data key={data._id} data={data} />)}
        </div>
    );
};

