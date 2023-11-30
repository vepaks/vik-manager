import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from "./DetailTable.module.scss";
import { Data } from "../../ManagerTable/Data/ui/Data";

export const DetailTable = ({ className }) => {
  return (
    <div className={classNames(cls.DetailTable, {}, [className])}>
      <div className={classNames(cls.header, {}, [])}>
        <div className={classNames(cls, {}, [])}></div>
        <div className={classNames(cls.name, {}, [])}>Адрес</div>
        <div className={classNames(cls.date, {}, [])}>Дата</div>
        <div className={classNames(cls.size, {}, [])}>Данни</div>
      </div>
      {allData && allData.map((data) => <Data key={data._id} data={data} />)}
    </div>
  );
};
