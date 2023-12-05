import React, {useEffect} from "react";
import { CreateForm } from "../../../features/data/ui/CreateForm/CreateForm";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const CreatePage = () => {

    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.user.isAuth);

    useEffect(() => {
        if(!isAuth){
            navigate('/login');
        }
    }, [isAuth, navigate]);

  return (
    <div>
      <CreateForm />
    </div>
  );
};

export default CreatePage;
