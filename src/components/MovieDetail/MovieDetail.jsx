import './MovieDetail.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function MovieDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch({ type:'FETCH_DETAIL', payload: id })
    }, [id])

    return (
        <div id="movieDetail">

        </div>
    )
}

export default MovieDetail;