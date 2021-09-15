import React from 'react';
import './questions.css';
import Header from './header';
import { Link } from 'react-router-dom';
// import { Question1 } from '.';

const Home = () => {

    

    
    return (
        <div className="home">
        <Header />
        <div className="home-body">
            <li> 
                <Link className="linkHome" to="./question1"> START THE IMPOSSIBLE QUIZ !!!! 🙅🏿	🙅🏾	🙅🏽	🙅🏼	🙅🏻</Link>
            </li>
        </div>
        </div>
    )
} 
export {Home};