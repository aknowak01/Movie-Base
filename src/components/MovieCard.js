import React from 'react';
import {Link} from 'react-router-dom';

import './css/MovieCard.css';

const MovieCard = (props) => {
    const URL = `/details`
    const myData = {
        id: props.id
    }

    const getRandomFloat = (min, max, decimals) => {
        const number = (Math.random() * (max - min) + min).toFixed(decimals);

        return parseFloat(number);
    }
    return (

        <div className='movie-card'>
            <div className="movie-card__img">
                <img className="movie-img" src={props.image} alt={props.title}/>
            </div>
            <div className='movie-card__text'>

                <h3>{props.title}</h3>
                <p>{props.content.length <= 100 ? props.content : props.content.slice(0, 90) + '...'}</p>
                <p>
					<span>
						<i className='fa-regular fa-star rate-symbol'> {getRandomFloat(0, 10, 2)} / 10.00</i>
					</span>

                </p>
                <Link to={URL} state={myData}>Szczegóły...</Link>

            </div>
        </div>

    );
};

export default MovieCard;
