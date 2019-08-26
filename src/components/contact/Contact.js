import React from 'react';
import Helmet from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { Config } from '../../config.js';
import ContactFormContainer from '../Contact-Form-Container';
import ContactUs from '../Contact-Us';

const bg = require('../../assets/images/bg-map.svg');

const Contact = ({ t }) => {
    return (
        <div id="lavender-slider" className="main">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{t('seo.title.contactPage')}</title>
                <meta name="description" content={t('seo.description.contactPage')} />
                <link rel="canonical" href={window.location.origin.toString()} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={t('seo.title.contactPage')} />
                <meta property="og:description" content={t('seo.description.contactPage')} />
                <meta property="og:image" content="LINK TO THE IMAGE FILE" />
                <meta property="og:url" content={window.location.origin.toString()} />
                <meta property="og:site_name" content={Config.SITE_NAME} />
            </Helmet>
            <section id="main-slider-contact" className="no-margin">
                <img className='bg-map' src={bg} alt='bulgarian map' />
                <div className="container absolute-centered">
                    <div className="txt-container">
                        <div className="main-container">
                            <h2 className="header-title">
                                {t('contact-page.main-title')}
                            </h2>
                            <h3 className="sub"> {t('contact-page.sub-title')}</h3>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content-wrapper">
                <section id="contact" className="container-fluid">
                    <div className="row row-no-padding">
                        <div className="col-xs-12">
                            <ContactFormContainer />
                        </div>
                        <ContactUs />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default withTranslation()(Contact);
