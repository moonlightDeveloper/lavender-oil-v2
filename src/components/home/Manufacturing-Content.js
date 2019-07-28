import React from 'react';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
const production11 = require("../../assets/images/gallery/production11.jpg");
const production22 = require("../../assets/images/gallery/production22.jpg");
const production33 = require("../../assets/images/gallery/production33.jpg");
const production44 = require("../../assets/images/gallery/production44.jpg");

const RESPONSIVE_CLASS = 'col-sm-6 col-xs-12 col-md-3';

const ManufacturingContent = () =>  {
    AOS.init();
    const { t } = useTranslation();
   
        return (<section id="portfolio" className="white">
                <div className="container">
                    <div className="gap"></div>
                    <div className=" gap fade-down section-heading">
                        <h2 className="prpl-title">{t('home-page.header.section2')}</h2>
                        <h4>{t('home-page.section2.title')}</h4>
                        <hr/>
                    </div>
                    <div className="img-production-container">
                        <div className={RESPONSIVE_CLASS}>
                            <div className="img-prod"><h5>
                              {t('home-page.section2.desc1')}
                            </h5>
                                <div className="production-img"
                                     style={{backgroundImage: `url(${production11}`}}  data-aos="fade-left" alt="XYZ"
                                     data-aos-delay="0" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                                    <div className="img-transperant"></div>
                                    <div className="img-gradient"></div>
                                </div>
                            </div>
                        </div>
                        <div className={RESPONSIVE_CLASS}>
                            <div className="img-prod"><h5>
                               {t('home-page.section2.desc2')}
                            </h5>
                                <div className="production-img"
                                     style={{backgroundImage: `url(${production22}`}} data-aos="fade-left"
                                     data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                                    <div className="img-transperant"></div>
                                    <div className="img-gradient"></div>
                                </div>
                            </div>
                        </div>
                        <div className={RESPONSIVE_CLASS}>
                            <div className="img-prod"><h5>
                              {t('home-page.section2.desc3')}
                            </h5>
                                <div className="production-img"
                                     style={{backgroundImage: `url(${production33}`}} data-aos="fade-left"
                                     data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                                    <div className="img-transperant"></div>
                                    <div className="img-gradient"></div>
                                </div>
                            </div>
                        </div>
                        <div className={RESPONSIVE_CLASS}>
                            <div className="img-prod"><h5>
                               {t('home-page.section2.desc4')}
                            </h5>
                                <div className="production-img"
                                     style={{backgroundImage: `url(${production44}`}}  data-aos="fade-left"
                                     data-aos-delay="300" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                                    <div className="img-transperant"></div>
                                    <div className="img-gradient"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default ManufacturingContent;

