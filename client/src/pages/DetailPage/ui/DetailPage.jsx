import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataFromOneAddress } from "../../../features/data/index";
import {useLocation} from "react-router-dom";
import {DetailTable} from "../../../widgets/Tables/DetailTable";

const DetailPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const chatId = queryParams.get("chatId");

        if (chatId) {
            dispatch(getDataFromOneAddress(chatId));
        }
    }, [dispatch, location.search]);

    const data = useSelector((state) => state.data.data);

    return (
        <div>
            {data ? (
                <DetailTable data={data} />
            ) : (
                <p>Loading or no data available</p>
            )}
        </div>
    );


};



export default DetailPage;
