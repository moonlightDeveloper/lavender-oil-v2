import React from 'react';
import AOS from "aos";
import { useTranslation } from 'react-i18next';


const RESPONSIVE_CLASS = 'col-xs-12 col-sm-6 img-animation-family';

const FamilyContent = () => {
    AOS.init();

    const { t } = useTranslation();
 
        return (
            <section className="family-section">
                <div className="container">
                    <div className="gap"></div>
                    <div className="gap fade-down section-heading">
                        <h2 className="prpl-title">{t('home-page.header.section4')}</h2>                       
                    </div>
                    <div id="meet-the-team" className="container-fluid grid">
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <figure className="effect-bubba">
                                <img src={"./emil.jpg"} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <h2>{t('home-page.section4.title-first-line')} <br/><span> {t('home-page.section4.title-second-line')} </span>
                                        <p>{t('home-page.section4.subtitle1')} </p>
                                        </h2>
                                    
                                    </figcaption>			
					            </figure>
                        </div>
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <figure className="effect-bubba">
                                <img src={"./magdalena.jpg"} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <h2>{t('home-page.section4.title-first-line')}<br/><span> {t('home-page.section4.title2-second-line')} </span>
                                        <p>{t('home-page.section4.subtitle2')}</p>
                                        </h2>
                                    </figcaption>			
					        </figure>
                        </div>
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <figure className="effect-bubba">
                                <img src={"./nadia.jpg"} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <h2>{t('home-page.section4.title-first-line')}<br/><span> {t('home-page.section4.title2-second-line')}  </span>
                                          <p>{t('home-page.section4.subtitle3')}</p>
                                        </h2>
                                    </figcaption>			
					        </figure>
                        </div>
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <figure className="effect-bubba">
                                <img src={"./emona.jpg"} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <h2>{t('home-page.section4.and')}<br/>{t('home-page.section4.title-first-line')}<span> {t('home-page.section4.title3-second-line')} </span>
                                           <p>{t('home-page.section4.subtitle4')}</p>
                                        </h2>
                                      
                                    </figcaption>			
					        </figure>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <div style={{backgroundImage: "url(/mapeurope.png)"}}></div>
                </div>
            </section>
        );
}

export default FamilyContent;
