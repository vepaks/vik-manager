import React, { useEffect } from "react";
import { Loader } from "../../../../shared/ui/Loader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SignupForm } from "../../../../features/auth";

const SignupPage = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return <div>{!isAuth ? <SignupForm /> : <Loader />}</div>;
};

export default SignupPage;
