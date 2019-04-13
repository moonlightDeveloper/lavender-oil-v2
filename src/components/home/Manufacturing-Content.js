import React from 'react';
import AOS from 'aos';

const RESPONSIVE_CLASS = 'col-sm-6 col-xs-12 col-md-3';


class ManufacturingContent extends React.Component {

    componentDidMount() {
        AOS.init();
    }

    componentWillReceiveProps() {
        AOS.refresh();
    }

    render() {
        return (<section id="portfolio" className="white">
                <div className="container">
                    <div className="gap"></div>
                    <div className=" gap fade-down section-heading">
                        <h2 className="prpl-title">The Process</h2>
                        <h4>Great ideas always have a beginning</h4>
                        <hr/>
                    </div>
                    <div className="img-production-container">
                        <div className={RESPONSIVE_CLASS}>
                            <div className="img-prod"><h5>
                                Best sowed seeds
                            </h5>
                                <div className="production-img"
                                     style={{backgroundImage: "url(/production-11.jpg"}} data-aos="fade-left" alt="XYZ"
                                     data-aos-delay="0" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                                    <div className="img-transperant"></div>
                                    <div className="img-gradient"></div>
                                </div>
                            </div>
                        </div>
                        <div className={RESPONSIVE_CLASS}>
                            <div className="img-prod"><h5>
                                Manual work guaranties quality
                            </h5>
                                <div className="production-img"
                                     style={{backgroundImage: "url(/production-22.jpg"}} data-aos="fade-left"
                                     data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                                    <div className="img-transperant"></div>
                                    <div className="img-gradient"></div>
                                </div>
                            </div>
                        </div>
                        <div className={RESPONSIVE_CLASS}>
                            <div className="img-prod"><h5>
                                Oil extraction under strictly controlled conditions
                            </h5>
                                <div className="production-img"
                                     style={{backgroundImage: "url(/production-33.jpeg"}} data-aos="fade-left"
                                     data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                                    <div className="img-transperant"></div>
                                    <div className="img-gradient"></div>
                                </div>
                            </div>
                        </div>
                        <div className={RESPONSIVE_CLASS}>
                            <div className="img-prod"><h5>
                                Lavender oil is stored and ready to
                                use.
                            </h5>
                                <div className="production-img"
                                     style={{backgroundImage: "url(/production-44.jpg"}} data-aos="fade-left"
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

}


export default ManufacturingContent;

