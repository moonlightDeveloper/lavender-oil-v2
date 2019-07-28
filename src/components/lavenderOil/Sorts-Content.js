import React from 'react';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';


const SortsContent = () => {
    AOS.init();
    const { t } = useTranslation();

        return (
            <div className="light-prpl">
                <div className="container">
                    <div className="gap fade-down section-heading">
                        <h2 className="main-title">{t('oil-page.section1-title')}</h2>
                    </div>
                </div>

                <section id="stats" className="divider-section">
                    <div className="gap"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-xs-12">
                                <div className="center bounce-in">
                                    <span className="stat-icon prpl"><i data-aos="flip-left" data-aos-duration="2000"
                                                                   className="fas fa-spa"/></span>
                                    <h3> {t('oil-page.title1')}</h3>
                                </div>
                            </div>
                             <div className="col-md-4 col-xs-12">
                                <div className="center bounce-in">
                                    <span className="stat-icon prpl"><i data-aos="flip-left" data-aos-duration="2000"
                                                                   className="fab fa-pagelines"/></span>
                                    <h3>{t('oil-page.title2')}</h3>
                                </div>
                            </div>                          
                            <div className="col-md-4 col-xs-12">
                                <div className="center bounce-in">
                                    <span className="stat-icon prpl"><i data-aos="flip-left" data-aos-duration="2000"
                                                                   className="fas fa-leaf"/></span>
                                    <h3>{t('oil-page.title3')}</h3>
                                </div>
                            </div>                         
                        </div>
                    </div>
                    <div className="gap"></div>
                </section>
            </div>
        );
}


export default SortsContent;

