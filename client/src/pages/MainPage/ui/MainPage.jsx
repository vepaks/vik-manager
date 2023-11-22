import React, { useEffect } from "react";
import { ManagerTable } from "../../../widgets/Tables";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../features/data/data";
import { Loader } from "../../../shared/ui/Loader";

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
  return <Loader />;
};
export default MainPage;
