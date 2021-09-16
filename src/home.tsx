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
                <> 
                    <Link className="linkHome" to="./question1"><h3> START THE IMPOSSIBLE QUIZ !!!! 🙅🏿	🙅🏾	🙅🏽	🙅🏼	🙅🏻</h3></Link>
                </>
            </div>
        </div>
    )
} 
export {Home};