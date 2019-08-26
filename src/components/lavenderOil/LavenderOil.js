import React, { useRef } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import SortsContent from './Sorts-Content';
import Gallery from './Gallery';
import ContactFormContainer from '../Contact-Form-Container';
import ContactUs from '../Contact-Us';
import { Config } from '../../config.js';

const lavenderBack = require("../../assets/images/gallery/lavender-back.jpg");

const LavenderOil = () => {
    const section = useRef(null);
    const scrollToMyRef = () => section.current.scrollIntoView({ behavior: 'smooth' });
    const { t } = useTranslation();
    return (
        <div id="lavender lavender-slider" className="main">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{t('seo.title.oilPage')}</title>
                <meta name="description" content={t('seo.description.oilPage')} />
                <link rel="canonical" href={window.location.origin.toString()} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={t('seo.title.homepage')} />
                <meta property="og:description" content={t('seo.description.oilPage')} />
                <meta property="og:image" content="LINK TO THE IMAGE FILE" />
                <meta property="og:url" content={window.location.origin.toString()} />
                <meta property="og:site_name" content={Config.SITE_NAME} />
            </Helmet>
            <section id="main-slider-lavender" className="no-margin">
                <img src={lavenderBack} className="back-image-oil" alt="not found" />
                <div className="txt-container">
                    <div className="container main-container">
                        <h2 className="header-title">
                            {t('oil-page.main-title-first-line')}<br /> {t('oil-page.main-title-second-line')}
                        </h2>
                        <h3 className="sub"> {t('oil-page.main-subtitle')}</h3>
                        <div id="section05">
                            <button className="black" onClick={() => scrollToMyRef()}><div>{t('oil-page.main-button')}</div><span></span></button>
                        </div>
                    </div>
                </div>
                <div ref={section} ></div>
            </section>
            <div id="content-wrapper">
                <SortsContent />
                <Gallery />
                <ContactFormContainer />
                <ContactUs />
            </div>
        </div>
    );
}

export default LavenderOil;
