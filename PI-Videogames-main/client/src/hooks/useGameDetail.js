import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { cleanGameDetail, getGameDetail } from "../redux/actions";

const useGameDetail = () => {
    const dispatch = useDispatch();
    const gameDetails = useSelector((state)=> state.gameDetails);
    const {idGame} = useParams();

    useEffect(()=>{
        dispatch(getGameDetail(idGame));
        return () => {
            dispatch(cleanGameDetail())
        }
    },[idGame])

    return gameDetails;
}

export default useGameDetail;