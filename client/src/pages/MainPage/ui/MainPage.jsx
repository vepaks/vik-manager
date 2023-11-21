import React, { useEffect, useState } from "react";
import { ManagerTable } from "../../../widgets/Tables";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../features/data/data";
import { Button } from "../../../shared/ui/Button";
import {Input} from "../../../shared/ui/Input";
import {setError} from "../../../app/reducers/errorReducer";
import {LoginModal} from "../../../features/auth/ui";

const MainPage = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const error = useSelector(state => state.errors.error)
  console.log(error)

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
      <LoginModal isOpen={error}/>
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
