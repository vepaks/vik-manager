import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './ManagerTable.module.scss'
import {Data} from "../Data/ui/Data";

export const ManagerTable = ({className}) => {

    // const data = useSelector(state => state.files.files).map( data => <Data/> )
    const data = [
      {
        _id: 1,
        address: "жк.Дружба 14, вг.Б, ет.3, ап.14",
        type: "dir",
        size: "3gb",
        date: "11.11.2023",
      },
      {
        _id: 2,
        address: "жк.Дружба 14, вг.Б, ет.3, ап.14",
        type: "dir",
        size: "3gb",
        date: "11.11.2023",
      },
      {
        _id: 3,
        address: "жк.Дружба 14, вг.Б, ет.3, ап.14",
        type: "dir",
        size: "3gb",
        date: "11.11.2023",
      },

    ].map((data) => <Data data={data} key={data._id} />);

    // if (files.length === 0) {
    //     return (
    //         <div className={classNames(cls.loader, {}, [])}>Документация не е намерена</div>
    //     )
    // }

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
            {data}
        </div>
    );
};

