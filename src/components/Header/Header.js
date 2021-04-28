import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/newHeader.jpg';


const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/"> <span style={{ fontSize: '35PX' }}>InFo <span style={{ color: 'red' }}> Travel </span></span>  </Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>

                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>

                </ul>
            </nav>
            <div className="title-container">

                <h4 style={{ fontFamily: 'Helvetica' }}>And if travel is like love, it is, in the end, mostly because it's a heightened state of awareness, in which we are mindful, receptive, undimmed by familiarity and ready to be transformed...</h4>
                <h3 style={{ fontFamily: "-moz-initial" }}>“The world is a book and those who do not travel read only one page.”</h3>


            </div>
        </div>
    );
};

export default Header;