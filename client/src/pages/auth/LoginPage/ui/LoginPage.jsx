import React, { useState } from "react";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
      <p>LOGIN PAGE</p>
    </div>
  );
};

export default LoginPage;
