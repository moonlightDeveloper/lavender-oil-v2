import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';
const woman = require("../../assets/images/gallery/woman-lavender.jpg");

const HomeHeader = () => {
    const section = useRef(null);
    const scrollToMyRef = () => section.current.scrollIntoView({ behavior: 'smooth' });
    const { t } = useTranslation();

    return (
        <section id="main-slider" className="no-margin">
            <div className="carousel slide" data-ride="carousel">
                <div className="">
                    <img src={woman} className="back-image" alt="not found" />
                    <div className="item active item active">
                        <div className="container main-container">
                            <div className="col-sm-12 header-lav">
                                <div className="carousel-content centered">
                                    <h2 className="boxed animation animated-item-1 fade-down header-title">{t('home-page.main-title-first-line')} <br /> {t('home-page.main-title-second-line')} <br /> {t('home-page.main-subtitele1')}</h2>
                                    <br />
                                    <h3 className="sub-main-title"> {t('home-page.main-subtitle2-first-line')}<br />
                                        {t('home-page.main-subtitle2-second-line')}</h3>
                                    <br />

                                    <div id="section05">
                                        <button onClick={() => scrollToMyRef()}><div>{t('home-page.button-more')}</div><span></span></button>
                                    </div>
                                    {/* <div className="natural-img-container">                                     
                                            <img src="/natural.svg" className="natural-img" alt="not found"/>
                                        </div> */}
                                    <br />
                                    {/* <a onClick={()=>scrollToMyRef()} className="btn btn-md animation bounce-in">Learn
                                            More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={section} ></div>
            <img src="/natural-svg" className="natural-img-mobile" alt="not found" />
        </section>
    );
}


export default HomeHeader;













