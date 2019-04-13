import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (

    <header className="navbar navbar-inverse navbar-fixed-top " role="banner">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <i className="fa fa-bars"></i>
                </button>
                <div className="navbar-brand"><img src="/logo.png" className="back-image" alt="not found"/><span
                    className="pe-7s-gleam bounce-in"> EMONA</span></div>             
            </div>
            <nav className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/lavenderOil'>Lavender Oil</Link></li>
                    <li><Link to='/contact'>contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;