import { classNames } from "../../../../../shared/lib/classNames/classNames";
import cls from "../ui/File.module.scss";
import {useDispatch, useSelector} from "react-redux";
import dirLogo from "../../../../../shared/assets/icons/dirLogo.svg"

export const File = ({file}) => {

    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

  return (
      <div className={classNames(cls.File, {}, [])}>
          <img src={dirLogo} alt="logo" className={classNames(cls.img, {}, [])}/>
          <div >
                Име на файла
          </div>
          <div className={classNames(cls.date, {}, [])}>
              25.11.2023
          </div>
          <div className={classNames(cls.size, {}, [])}>
              5гб
          </div>
           <button className={classNames(cls.download, {}, [])} >download</button>
          <button  className={classNames(cls.delete, {}, [])} >delete</button>
      </div>
  )
};

export default File;
