import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import SortsContent from './Sorts-Content';
import Gallery from './Gallery';
import ContactForm from '../Contact-Form';
const lavenderBack = require("../../assets/images/gallery/lavender-back.jpg");

const LavenderOil = () => {
    const section = useRef(null);
    const scrollToMyRef = () => section.current.scrollIntoView({ behavior: 'smooth' });
    const { t } = useTranslation();
        return (
        <div id="lavender lavender-slider" className="main">
            <section id="main-slider-lavender" className="no-margin">
                    <img src={lavenderBack} className="back-image-oil" alt="not found"/>  
                    <div className="txt-container">
                    <div className="container main-container">               
                        <h2 className="header-title">
                        {t('oil-page.main-title-first-line')}<br /> {t('oil-page.main-title-second-line')}
                        </h2>
                        <h3 className="sub"> {t('oil-page.main-subtitle')}</h3>
                        <div id="section05">
                            <button className="black" onClick={()=>scrollToMyRef()}><div>{t('oil-page.main-button')}</div><span></span></button>
                        </div>
                    </div>
                    </div> 
                    <div ref={section} ></div>      
            </section>
            <div id="content-wrapper">
            <SortsContent/>
            <Gallery/>             
            <ContactForm isContainerStyle/>          
            </div>
        </div>
        );
}

export default LavenderOil;
