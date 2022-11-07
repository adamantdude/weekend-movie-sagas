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
    const genres = movie.map(genre => genre.name);

    console.log(movie);

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAIL', payload: id })
    }, [id])

    return (
        <div id="movieDetail">
            <button onClick={() => history.push('/')}>Back To List</button>
            {movie.length > 0 && <div>
                <img src={movie[0].poster} />
                {movie[0].title}
                <br></br>
                {genres.map(x => <label key={x}>' {x} ' </label>)}
                <br></br>
                {movie[0].description}
            </div>
            }
        </div>
    )
}

export default MovieDetail;