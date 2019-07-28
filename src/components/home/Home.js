import React from 'react';
import ContactForm from '../Contact-Form';
import FamilyContent from "./Family-Content";
import ManufacturingContent from "./Manufacturing-Content";
import BenefitsContent from './Benefits-Content';
import HomeHeader from './Home-Header';
import { MailContext, Config } from '../../config.js';
import { useTranslation } from 'react-i18next';

import Helmet from 'react-helmet';

const Home = () => {
    const { t, i18n } = useTranslation();

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
                            <h2 className="main-title">A Little About Us</h2>
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
                                                <p>Bulgaria scores of skilled farmers,
                                                    a favorable climate and unspoiled fields provides a promising blend
                                                    for
                                                    essential oil producers”</p>
                                            </blockquote>
                                        </div>
                                        <br />
                                        <p>
                                            We've growth surrounded by lands of richness which was the reason for us to
                                            founded our company more than 20 years ago. Inspired by passion and
                                            admiration of the nature we've decided
                                            to provide a way for people to be able to have a touch of its beauties.
                                            We've choose lavender due to it's benefits for our bodies used for both
                                            cosmetically and therapeutically methods.
                                            During the years we've taken care of the control for the whole process of
                                            manufacturing lavender oil including
                                            creation of plantations of particular varieties, proper care, mowing,
                                            transportation. Our goal is to meet customer demands.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center grid">
                                <figure className="effect-layla">
                                <img src={theBoss} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <h2>Crazy <span>Layla</span></h2>
                                        <p>When Layla appears, she brings an eternal summer along.</p>
                                        <a href="#">View more</a>
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
                        { value => (<ContactForm userId={value.REACT_APP_EMAILJS_USERID} templateId={value.REACT_APP_EMAILJS_TEMPLATEID}/>)}
                    </MailContext.Consumer>
                </div>
            </div>
        )
}


export default Home;
