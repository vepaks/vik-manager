import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
const RouteGuard = ({children}) => {

    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.user.isAuth);

        useEffect(() => {
            if (!isAuth) {
                navigate('/login');
            }
        }, [isAuth, navigate]);

    return <div>{children}</div>

};

export default RouteGuard
