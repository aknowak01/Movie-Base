import React from 'react';
import {Link} from 'react-router-dom';
import './css/ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className='header'>
            <div className='header__text'>
                <h1 className='header__heading'>
                    404
                </h1>
                <h2 className='header__description--first'>Strona nie została odnaleziona!</h2>
                <p className='header__description--second'>
                    Przepraszamy, strona, której szukasz, nie istnieje. Przejdź do strony głównej.
                </p>
                <Link to="/" className='header__btn btn-special-animation'>Strona Główna</Link>

            </div>

            <div className='header__hero-img'></div>
            <div className='header__hero-shadow'></div>
        </div>
    );
};

export default ErrorPage;
