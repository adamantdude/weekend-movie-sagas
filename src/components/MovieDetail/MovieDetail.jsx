import './MovieDetail.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function MovieDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movie = useSelector(store => store.movies)
    const history = useHistory();

    console.log(movie);

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAIL', payload: id })
    }, [id])

    return (
        <div id="movieDetail">
            <button onClick={() => history.push('/')}>Back To List</button>
            {movie && <div>
                <img src={movie[0].poster} />
                {movie[0].title}
                <br></br>
                {movie[0].description}
            </div>
            }
        </div>
    )
}

export default MovieDetail;