import React, {useEffect} from 'react';
import {ManagerTable} from "../../../widgets/Tables";
import {useDispatch} from "react-redux";
import {getData} from "../../../features/data/data";

const MainPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [dispatch]);

    return (
        <div>
            <ManagerTable/>
        </div>
    );
};
export default MainPage;
