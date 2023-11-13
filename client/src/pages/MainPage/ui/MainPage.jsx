import React, {useEffect} from 'react';
import {ManagerTable} from "../../../widgets/Tables";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../../features/data/data";

const LoginPage = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.data )



    useEffect(() => {
        dispatch(getData(data))
    }, [data, dispatch]);

    return (
        <div>
            <ManagerTable/>
            <h1>{data}</h1>
        </div>
    );
};
export default LoginPage;
