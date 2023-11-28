import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataFromOneAddress } from "../../../features/data/index";
import {useLocation} from "react-router-dom";

const DetailPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();

  useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const chatId = queryParams.get("chatId");

    dispatch(getDataFromOneAddress(chatId));
  }, [dispatch]);

    const data = useSelector((state) => state.data.data);
    data.map(data => console.log(data.chatId));

};



export default DetailPage;
