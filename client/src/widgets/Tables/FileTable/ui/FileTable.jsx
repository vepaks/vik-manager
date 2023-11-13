import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './FileTable.module.scss'
// import {useSelector} from "react-redux";
import {File} from "../File";

export const FileTable = ({className}) => {

    // const files = useSelector(state => state.files.files).map( file => <File/> )
    const files = [
        {_id: 1, name: 'Документи за блок 14', type: 'dir', size: "3gb", date: '11.11.2023'},
        {_id: 2, name: 'Документи за блок 8', type: 'photo', size: "1gb", date: '08.11.2023'},
    ].map(file => <File file={file}  key={file._id}/> )

    if (files.length === 0) {
        return (
            <div className={classNames(cls.loader, {}, [className])}>Документация не е намерена</div>
        )
    }
    return (
        <div className={classNames(cls.Table, {}, [className])}>
                <div className={classNames(cls.header, {}, [className])}>
                    <div className={classNames(cls, {}, [className])}>
                    </div>
                    <div className={classNames(cls.name, {}, [className])}>
                     Документация
                    </div>
                    <div className={classNames(cls.date, {}, [className])}>
                        Дата
                    </div>
                    <div className={classNames(cls.size, {}, [className])}>
                     Размер
                    </div>
                </div>
            {files}
        </div>
    );
};

