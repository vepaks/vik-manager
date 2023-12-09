import {classNames} from "../../../../../shared/lib/classNames/classNames";
import cls from './Details.module.scss'
import {Button} from "../../../../../shared/ui/Button";
import dataLogo from "../../../../../shared/assets/icons/dataLogo.svg";


export const Details = ({details}) => {
//
//    const handleDelete = () => {
//        const newData = details.data.filter((item, index) => index !== details.data.length - 1);
//        setDetails({ ...details, data: newData });
//    };

    return (


        <div className={classNames(cls.Details, {}, [])}>
            <img src={dataLogo} alt="logo" className={classNames(cls.img, {}, [])}/>
            <div className={classNames(cls.date, {}, [])}>
                {details.date}
            </div>
            <div className={classNames(cls.size, {}, [])}>
                {details.data[details.data.length - 1]}
            </div>

            {/*<Button onClick={handleDelete} className={classNames(cls.delete, {}, [])} >Изтрий</Button>*/}
            <Button  className={classNames(cls.delete, {}, [])} >Изтрий</Button>
        </div>
    );
};

