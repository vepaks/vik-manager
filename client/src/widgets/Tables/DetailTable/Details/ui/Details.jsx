import cls from './Details.module.scss';
import { Button } from "../../../../../shared/ui/Button";
import dataLogo from "../../../../../shared/assets/icons/dataLogo.svg";

export const Details = ({ details = {} }) => {
  const { address, date, data = [] } = details;
  const lastDataItem = data.length > 0 ? data[data.length - 1] : null;

  return (
    <div className={cls.Details}>
      <img src={dataLogo} alt="logo" className={cls.img} />
        {address && <div>{address}</div>}
        {date && <div className={cls.date}>{date}</div>}
        {lastDataItem && <div className={cls.size}>{lastDataItem}</div>}
        <Button className={cls.delete} >Изтрий</Button>
    </div>
    );
};