import {classNames} from "../../../../../shared/lib/classNames/classNames";
import cls from './Data.module.scss'
import dataLogo from "../../../../../shared/assets/icons/dataLogo.svg";
import {Button, ThemeButton} from "../../../../../shared/ui/Button";

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
            <div className={classNames(cls.size, {}, ["red"])}>
                {data.data[data.data.length - 1]}
            </div>
            <Button theme={ThemeButton.NAV} className={classNames(cls.download, {}, [])} >Подробно</Button>
            <Button  className={classNames(cls.delete, {}, [])} >Напомни</Button>
        </div>
    );
};

