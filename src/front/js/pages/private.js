import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Context } from '../store/appContext';

export const Private = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        store.token == null ? navigate('/login') : null
    }, [store.token])

    return (
        <div className='container-fluid w-50'>
            <div className="card">
                <img src="https://i.kym-cdn.com/entries/icons/original/000/021/290/bounsa.png" className="card-img-top w-75 mx-auto" alt="Rigo" />
                <div className="card-body">
                    <h1 className="card-title">Get in king, you earn it!</h1>
                    <p className="card-text">Keep this token until you exit: {store.token}</p>
                    <h1>Good luck in there </h1>
                </div>
            
                <div className="card-body">
                    <Link to="/" className="card-link">Return to Home</Link>
                </div>
            </div>

        </div>
    )

}