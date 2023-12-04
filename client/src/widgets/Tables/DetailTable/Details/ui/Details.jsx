import {classNames} from "../../../../../shared/lib/classNames/classNames";
import cls from './Details.module.scss'
import {Button} from "../../../../../shared/ui/Button";
import dataLogo from "../../../../../shared/assets/icons/dataLogo.svg";


export const Details = ({details}) => {
    return (
        <div className={classNames(cls.Details, {}, [])}>
            <img src={dataLogo} alt="logo" className={classNames(cls.img, {}, [])}/>
            <div >
                {details.address}
            </div>
            <div className={classNames(cls.date, {}, [])}>
                {details.date}
            </div>
            <div className={classNames(cls.size, {}, [])}>
                {details.data[details.data.length - 1]}
            </div>

            <Button  className={classNames(cls.delete, {}, [])} >Изтрий</Button>
        </div>
    );
};

