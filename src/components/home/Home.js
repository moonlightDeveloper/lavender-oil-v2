import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../Contact-Form';
import FamilyContent from "./Family-Content";
import ManufacturingContent from "./Manufacturing-Content";
import BenefitsContent from './Benefits-Content';
import HomeHeader from './Home-Header';
import { MailContext, Config } from '../../config.js';


import Helmet from 'react-helmet';

const Home = () => {
    const { t } = useTranslation();

    const theBoss = require("../../assets/images/gallery/theBoss.jpg");
        return (
            <div id="home" className="main">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{t('seo.title.homepage')}</title>
                    <meta name="description" content={t('seo.description.homepage')}/>
                    <link rel="canonical" href={window.location.origin.toString()} />
                    <meta property="og:type" content="article"/>
                    <meta property="og:title" content={t('seo.title.homepage')} />
                    <meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
                    <meta property="og:image" content="LINK TO THE IMAGE FILE" />
                    <meta property="og:url" content={window.location.origin.toString()} />
                    <meta property="og:site_name" content={Config.SITE_NAME} />
                </Helmet>
                <HomeHeader />
                <div id="content-wrapper">
                    <div className="light-prpl">
                        <div className="container ">
                            <h2 className="main-title">{t('home-page.header.section1')}</h2>
                        </div>
                    </div>
                    <section id="about-us" className="white">
                        <div className="container">
                            <div className="gap"></div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className=" gap fade-down section-heading">
                                        <div className="testimonial-quote">
                                            <blockquote>
                                                <p>{t('home-page.section1.title')}”</p>
                                            </blockquote>
                                        </div>
                                        <br />
                                        <p>
                                        {t('home-page.section1.content')}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center grid">
                                <figure className="effect-layla">
                                <img src={theBoss} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <p>{t('home-page.section1.second-quotes')}</p>
                                    </figcaption>			
					            </figure>
                                </div>
                            </div>
                            <div className="gap"></div>
                        </div>
                    </section>
                    <ManufacturingContent />
                    <BenefitsContent />
                    <FamilyContent />
                    <MailContext.Consumer>
                        { value => (<ContactForm userId={value.REACT_APP_EMAILJS_USERID} templateId={value.REACT_APP_EMAILJS_TEMPLATEID} isContainerStyle/>)}
                    </MailContext.Consumer>
                </div>
            </div>
        )
}


export default Home;
