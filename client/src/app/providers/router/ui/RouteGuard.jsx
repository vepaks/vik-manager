import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
const RouteGuard = ({children}) => {
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.user.isAuth);
    const isAuthenticated = useSelector((state) => !!state.user.token);

    useEffect(() => {
        if (!isAuth || !isAuthenticated) {
            navigate('/login');
        }
    }, [isAuth, isAuthenticated, navigate]);

    if (!isAuth || !isAuthenticated) return null;

                navigate('/login');
            }
        }, [isAuth, navigate]);

    return <div>{children}</div>




export default RouteGuard