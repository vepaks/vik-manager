import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './FileTable.module.scss'
// import {useSelector} from "react-redux";
import {File} from "../File";

export const FileTable = ({className}) => {

    // const files = useSelector(state => state.files.files).map( file => <File/> )
    const files = [
        {_id: 1, name: 'Документи за блок 14', type: 'dir', size: "3gb", date: '11.11.2023'},
        {_id: 2, name: 'Документи за блок 8', type: 'photo', size: "1gb", date: '08.11.2023'},
    ].map(file => <File key={file._id}/> )
    return (
        <div className={classNames(cls.Table, {}, [className])}>
            <div className={classNames(cls.table, {}, [className])}>

                <div className={classNames(cls.row, {}, [className, "header"])}>
                    <div className={classNames(cls.cell, {}, [className, "row"])}>
                    </div>
                    <div className={classNames(cls.cell, {}, [className, "row"])}>
                      Название
                    </div>
                    <div className={classNames(cls.cell, {}, [className])}>
                        Дата
                    </div>
                    <div className={classNames(cls.cell, {}, [className])}>
                     Размер
                    </div>
                </div>
                {files}
            </div>
        </div>
    );
};

