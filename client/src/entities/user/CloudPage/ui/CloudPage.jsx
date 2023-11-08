import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../../../features/file/file";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from "./CloudPage.module.scss";
import { FileTable } from "../../../../widgets/Tables/index";
import { Button } from "../../../../shared/ui/Button";

export const CloudPage = ({ className }) => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  return (
    <div className={classNames(cls.CloudPage, {}, [className])}>
      <div className={classNames(cls.btns, {}, [className])}>
        <Button className={classNames(cls.back, {}, [className])}>
          Назад
        </Button>
        <Button className={classNames(cls.create, {}, [className])}>
          Създай папка
        </Button>
      </div>
      <FileTable />
    </div>
  );
};

export default CloudPage;
