import {classNames} from "../../../../../shared/lib/classNames/classNames";
import cls from './Data.module.scss'
import dataLogo from "../../../../../shared/assets/icons/dataLogo.svg";
import {Button} from "../../../../../shared/ui/Button";
import {Link} from "react-router-dom";

export const Data = ({data}) => {

    return (
        <div className={classNames(cls.Data, {}, [])}>
            <img src={dataLogo} alt="logo" className={classNames(cls.img, {}, [])}/>
            <div >
                {data.address}
            </div>
            <div className={classNames(cls.date, {}, [])}>
                {data.date}
            </div>
            <div className={classNames(cls.size, {}, [])}>
                {data.data[data.data.length - 1]}
            </div>
            <Link to={`/details?chatId=${data.chatId}`} className={classNames(cls.download, {}, [])}>
               Подробно
            </Link>
            <Button  className={classNames(cls.delete, {}, [])} >Напомни</Button>
        </div>
    );
};

