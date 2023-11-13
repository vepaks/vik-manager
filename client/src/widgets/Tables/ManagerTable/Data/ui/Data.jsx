import {classNames} from "../../../../../shared/lib/classNames/classNames";
import cls from './Data.module.scss'
import dataLogo from "../../../../../shared/assets/icons/dataLogo.svg";
import {Button, ThemeButton} from "../../../../../shared/ui/Button";
import {useDispatch, useSelector} from "react-redux";

export const Data = ({data}) => {

    const dispatch = useDispatch()
    const addresses = useSelector(state => state.addresses)

    return (
        <div className={classNames(cls.Data, {}, [])}>
            <img src={dataLogo} alt="logo" className={classNames(cls.img, {}, [])}/>
            <div >
                {data.address}
            </div>
            <div className={classNames(cls.date, {}, [])}>
                10.11.2023
            </div>
            <div className={classNames(cls.size, {}, [])}>
               15 25 6985
            </div>
            <Button theme={ThemeButton.NAV} className={classNames(cls.download, {}, [])} >Подробно</Button>
            <Button  className={classNames(cls.delete, {}, [])} >Напомни</Button>
        </div>
    );
};

