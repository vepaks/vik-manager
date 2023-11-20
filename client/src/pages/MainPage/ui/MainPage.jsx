import React, { useEffect, useState } from "react";
import { ManagerTable } from "../../../widgets/Tables";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../features/data/data";
import { Button } from "../../../shared/ui/Button";

const MainPage = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (!isAuth) {
    return <div>нямате достъп</div>;
  } else {
    return (
      <div>
        <ManagerTable />
      </div>
    );
  }
};
export default MainPage;
