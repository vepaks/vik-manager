import {classNames} from "../../../../../shared/lib/classNames/classNames";
import cls from './Data.module.scss'
import dataLogo from "../../../../../shared/assets/icons/dataLogo.svg";
import {Button} from "../../../../../shared/ui/Button";
// import {useDispatch, useSelector} from "react-redux";

export const Data = ({className}) => {

    // const dispatch = useDispatch()
    // const currentDir = useSelector(state => state.files.currentDir)

    return (
        <div className={classNames(cls.Data, {}, [className])}>
            <img src={dataLogo} alt="logo" className={classNames(cls.img, {}, [])}/>
            <div >
                Име на файла
            </div>
            <div className={classNames(cls.date, {}, [])}>
                25.11.2023
            </div>
            <div className={classNames(cls.size, {}, [])}>
                5гб
            </div>
            <Button className={classNames(cls.download, {}, [])} >Подробно</Button>
            <Button  className={classNames(cls.delete, {}, [])} >Напомни</Button>
        </div>
    );
};

