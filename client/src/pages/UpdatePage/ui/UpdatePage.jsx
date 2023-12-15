import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../features//data/index";
import { NotAuth } from "../../../widgets/NotAuth";
import { UpdateForm } from "../../../features/data/ui/UpdateForm/UpdateForm";

const UpdatePage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (isAuth) {
    return (
      <div>
        <UpdateForm />
      </div>
    );
  }
  return <NotAuth />;
};
export default UpdatePage;
