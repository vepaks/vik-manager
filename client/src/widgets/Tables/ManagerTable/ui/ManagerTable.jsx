import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './ManagerTable.module.scss'

export const ManagerTable = ({className}) => {
    return (
        <div className={classNames(cls.ManagerTable, {}, [className])}>
            <div className={classNames(cls.table, {}, [className])}>

                <div className={classNames(cls.row, {}, [className, "header"])}>
                    <div className={classNames(cls.cell, {}, [className, "row"])}>
                        Име и Фамилия
                    </div>
                    <div className={classNames(cls.cell, {}, [className])}>
                        Адрес
                    </div>
                    <div className={classNames(cls.cell, {}, [className])}>
                        Стойност
                    </div>
                    <div className={classNames(cls.cell, {}, [className])}>
                        Действие
                    </div>
                </div>

                <div className={classNames(cls.row, {}, [className])}>
                    <div className={classNames(cls.cell, {}, [className])} data-title="Name">
                        Иван Георгиев
                    </div>
                    <div className={classNames(cls.cell, {}, [className])} data-title="Adress">
                        гр.София
                    </div>
                    <div className={classNames(cls.cell, {}, [className])} data-title="Value">
                        102585
                    </div>
                    <div className={classNames(cls.cell, {}, [className])} data-title="Action">
                        Виж
                    </div>
                </div>
            </div>
        </div>
    );
};

