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
              {file.name}
          </div>
          <div className={classNames(cls.date, {}, [])}>
              {file.date}
          </div>
          <div className={classNames(cls.size, {}, [])}>
              {file.size}
          </div>
           <button className={classNames(cls.download, {}, [])} >download</button>
          <button  className={classNames(cls.delete, {}, [])} >delete</button>
      </div>
  )
};

export default File;
