import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from "./DetailTable.module.scss";
import {Details} from "../Details";
import {useSelector} from "react-redux";

export const DetailTable = ({className}) => {

    const allData = useSelector(state => state.data.data)

  return (
    <div className={classNames(cls.DetailTable, {}, [className])}>

      <h1 style={{ textAlign: "center" }}>Подробни данни от потребител: {allData[0].chatId}</h1>
      <div className={classNames(cls.header, {}, [])}>
        <div className={classNames(cls, {}, [])}></div>
        <div className={classNames(cls.date, {}, [])}>Дата</div>
        <div className={classNames(cls.size, {}, [])}>Данни</div>
      </div>
      {allData && allData.map((details) => <Details key={details._id} details={details} />)}
    </div>
  );
};
