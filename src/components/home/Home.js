import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactFormContainer from '../Contact-Form-Container';
import FamilyContent from "./Family-Content";
import ManufacturingContent from "./Manufacturing-Content";
import BenefitsContent from './Benefits-Content';
import HomeHeader from './Home-Header';
import { Config } from '../../config.js';
import ContactUs from '../Contact-Us';
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
                    <meta property="og:description" content={t('seo.description.homepage')}/>
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
                                            
                                         <h4 style={{lineHeight:"25px", fontWeight:"bold"}}>{t('home-page.section1.title')}</h4>
                                            
                                        </div>
                                        <br />
                                        <h5 style={{lineHeight:"25px", fontSize:"16px"}}>
                                        {t('home-page.section1.content')}
                                        </h5>
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
                    <ContactFormContainer />
                    <ContactUs />              
                </div>
            </div>
        )
}


export default Home;
