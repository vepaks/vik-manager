import React, { useEffect, useState } from "react";
import { ManagerTable } from "../../../widgets/Tables";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../features/data/data";
import { Button } from "../../../shared/ui/Button";
import {Input} from "../../../shared/ui/Input";

const MainPage = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  const [value, setValue] = useState('')

  const onChange = (val) => {
    console.log(val)
    setValue(val)
  }

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (!isAuth) {
    return <div>
      нямате достъп
      <Input
          value={value}
          onChange={onChange}
      />
    </div>;
  } else {
    return (
      <div>

        <ManagerTable />
      </div>
    );
  }
};
export default MainPage;
