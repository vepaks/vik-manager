import React, { useEffect } from "react";
import { ManagerTable } from "../../../widgets/Tables";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../features//data/index";
import { NotAuth } from "../../../widgets/NotAuth";
import {useTranslation} from "react-i18next";
import {Button} from "../../../shared/ui/Button";

const MainPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);


  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (isAuth) {
    return (
      <div>

        <ManagerTable />
      </div>
    );
  }
  return <NotAuth />;
};
export default MainPage;
