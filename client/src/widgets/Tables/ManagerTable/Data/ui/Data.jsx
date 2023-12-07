import { classNames } from "../../../../../shared/lib/classNames/classNames";
import cls from "./Data.module.scss";
import dataLogo from "../../../../../shared/assets/icons/dataLogo.svg";
import { AppLink } from "../../../../../shared/ui/AppLink/AppLink";
import {useDispatch} from "react-redux";
import {deleteAddress} from "../../../../../features/data/models/deleteData";
export const Data = ({ data }) => {

  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteAddress(data._id));
  };

  console.log(data._id)

  return (
    <div className={classNames(cls.Data, {}, [])}>
      <img src={dataLogo} alt="logo" className={classNames(cls.img, {}, [])} />
      <div>{data.address}</div>
      <div className={classNames(cls.date, {}, [])}>{data.date}</div>
      <div className={classNames(cls.size, {}, [])}>
        {data.data[data.data.length - 1]}
      </div>
      <AppLink
        to={`/details?chatId=${data.chatId}`}
      >
        <p className={cls.details}>Подробно</p>
      </AppLink>
      <AppLink
        onClick={handleDeleteClick}
      >
      <p className={cls.details}>Изтрий</p>
      </AppLink>
    </div>
  );
};
