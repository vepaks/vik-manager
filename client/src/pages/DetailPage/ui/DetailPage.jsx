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

    dispatch(getDataFromOneAddress(chatId));
  }, [dispatch]);

    const data = useSelector((state) => state.data.data);

    return (
        <div>
            <DetailTable/>
        </div>
    )


};



export default DetailPage;
