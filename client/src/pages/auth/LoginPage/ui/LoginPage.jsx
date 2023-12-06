import React, { useEffect } from "react";
import { LoginForm } from "../../../../features/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../shared/ui/Loader";

const LoginPage = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return <div>{!isAuth ? <LoginForm /> : <Loader />}</div>;
};

export default LoginPage;
