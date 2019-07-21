import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    let swithToLang = i18n.language === 'bg' ? 'en' : 'bg';
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };
    return (
        <header className="navbar navbar-inverse navbar-fixed-top " role="banner">
        <div className="container">
            <div className="navbar-header">
                <button onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <i className="fa fa-bars"></i>
                </button>
                
                <div className="navbar-brand">
                    <Link to='/'>
                        <img src="/logoM.svg" className="back-image" alt="not found"/>
                    </Link>
                </div>             
            </div>
            <nav className={`${mobileMenuOpen ? '':'collapse'} navbar-collapse`}>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to='/'>{t('navigation.home')}</Link></li>
                    <li><Link to='/lavender-oil'>{t('navigation.lavenderOil')}</Link></li>
                    <li><Link to='/contact'>{t('navigation.contact')}</Link></li>
                    <li onClick={() => changeLanguage(swithToLang)} className="languagepicker-wrap">
                        <ul className="languagepicker">
                            <li><a><img src={`/flags/${swithToLang}.svg`}/>{swithToLang.toUpperCase()}</a></li>
                        </ul>
                    </li>
               
                </ul>
             
            </nav>
        </div>
    </header>
    );
    
    };

export default Header;
