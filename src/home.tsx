import React from 'react';
import './questions.css';
import Header from './header';
import { Link } from 'react-router-dom';
// import { Question1 } from '.';

const Home = () => {

    return (
        <div className="home-page">
        <Header />
            <div className="home-body">
                <> 
                    <Link className="linkHome" to="./question1"><h1> START THE IMPOSSIBLE QUIZ !!!! <br></br>🙅🏿	🙅🏾	🙅🏽	🙅🏼	🙅🏻</h1></Link>
                </>
            </div>
        </div>
    )
} 
export {Home};