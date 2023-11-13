import React, {useEffect} from 'react';
import {ManagerTable} from "../../../widgets/Tables";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../../features/data/data";

const MainPage = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.data.data)

    useEffect(() => {
        dispatch(getData())
    }, []);

    return (
        <div>
            <ManagerTable/>
        </div>
    );
};
export default MainPage;
