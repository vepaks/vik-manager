import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './FileTable.module.scss'
import {useSelector} from "react-redux";
import {File} from "../File";
import {useTranslation} from "react-i18next";

export const FileTable = ({className}) => {

    const files = useSelector(state => state.files.files)
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.Table, {}, [className])}>
                <div className={classNames(cls.header, {}, [className])}>
                    <div className={classNames(cls, {}, [className])}>
                    </div>
                    <div className={classNames(cls.name, {}, [className])}>
                        {t("Документация")}
                    </div>
                    <div className={classNames(cls.date, {}, [className])}>
                        {t("Дата")}
                    </div>
                    <div className={classNames(cls.size, {}, [className])}>
                        {t("Размер")}
                    </div>
                </div>
            { files && files.map(file => <File key={file.id} file={file}/>)}
        </div>
    );
};

