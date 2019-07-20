import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };
    return (
        <header className="navbar navbar-inverse navbar-fixed-top " role="banner">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <i className="fa fa-bars"></i>
                </button>
                <div className="navbar-brand"><img src="/logoM.svg" className="back-image" alt="not found"/><span
                    className="pe-7s-gleam bounce-in"></span></div>             
            </div>
            <nav className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to='/'>{t('navigation.home')}</Link></li>
                    <li><Link to='/lavenderOil'>{t('navigation.lavenderOil')}</Link></li>
                    <li><Link to='/contact'>{t('navigation.contact')}</Link></li>
                <ul class="languagepicker">
                    <a onClick={() => changeLanguage('bg')} ><li><img src="http://i65.tinypic.com/2d0kyno.png"/>BG</li></a>
                    <a onClick={() => changeLanguage('en')} ><li><img src="http://i64.tinypic.com/fd60km.png"/>EN</li></a>
                </ul>
                </ul>
             
            </nav>
        </div>
    </header>
    );
    
    };

export default Header;