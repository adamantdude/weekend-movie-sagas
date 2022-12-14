import './MovieDetail.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function MovieDetail() {
    const [dispatch, history, { id }] = [useDispatch(), useHistory(), useParams()];
    const movie = useSelector(store => store.movies)
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
                <div>
                    <div>
                        {movie[0].title}
                    </div>
                    <div>
                        {genres.map(x => <label key={x}>' {x} ' </label>)}
                    </div>
                    <div>
                        {movie[0].description}
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default MovieDetail;