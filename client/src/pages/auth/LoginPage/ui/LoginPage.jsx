import React, {useEffect} from "react";
import { LoginForm } from "../../../../features/auth";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.user.isAuth);

    useEffect(() => {
        if(isAuth){
            navigate('/');
        }
    }, [isAuth, navigate]);

    return (
      <div>
          <LoginForm />
     </div>
    )
};

export default LoginPage;
