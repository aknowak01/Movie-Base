import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import NavigationBar from '../../../../WebstormProjects/untitled/src/components/NavigationBar';
import './css/LoginPage.css';
import Footer from '../../../../WebstormProjects/untitled/src/components/Footer';
import axios from 'axios';


const AddMovie = () => {

    const [form, setForm] = useState({
        title: "",
        image: "",
        content: "",
    });

    const onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        }
        setForm(nextFormState);
    }
    const onSubmitAddMovie = (e) => {
        e.preventDefault()

        axios({
            method: 'post',
            url: 'https://at.usermd.net/api/movies',
            data: {
                ...form
            }
        }).then((response) => {
            console.log(response);
            e.target.reset();
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <>
            <div className='login'>
                <NavigationBar/>
                <h2 className='login-heading'>Dodaj Nowy Film</h2>

                <form className='login__form' onSubmit={onSubmitAddMovie}>
                    <div className='login__form-top'>
                        <label htmlFor='email' className='login__form-label'>
                            Tytuł filmu:
                        </label>
                        <input
                            type='text'
                            className='login__form-input'
                            id='title'
                            name='title'
                            placeholder='Tytuł'
                            onChange={onUpdateField}

                        />

                        <label htmlFor='login' className='login__form-label'>
                            Obrazek:
                        </label>
                        <input
                            type='text'
                            className='login__form-input'
                            id='image'
                            name='image'
                            placeholder='Link do obrazu z formatem jpg'
                            onChange={onUpdateField}

                        />

                        <label htmlFor='password' className='login__form-label'>
                            Opis:
                        </label>
                        <input
                            type='text'
                            id='content'
                            name='content'
                            className='login__form-input'
                            placeholder='Opis'
                            onChange={onUpdateField}
                        >
                        </input>

                        <div className='login__form-btns'>
                            <Link to='/'>
                                <button className='login__form-btn login__form-btn--register'>
                                    Anuluj
                                </button>
                            </Link>
                            <button type='submit' className='login__form-btn'>
                                Dodaj
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    );
};
export default AddMovie;
