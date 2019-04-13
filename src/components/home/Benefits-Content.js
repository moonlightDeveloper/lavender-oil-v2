import React from 'react';
import AOS from 'aos';


class BenefitsContent extends React.Component {

    componentDidMount() {
        AOS.init();
    }

    componentWillReceiveProps() {
        AOS.refresh();
    }

    render() {
        return (
            <div className="light-prpl">
                <div className="container">
                    <div className="gap fade-down section-heading">
                        <h2 className="main-title">What We Can Provide</h2>
                    </div>
                </div>

                <section id="stats" className="divider-section prpl">
                    <div className="gap"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-xs-6">
                                <div className="center bounce-in">
                                    <span className="stat-icon"><i data-aos="flip-left" data-aos-duration="2000"
                                                                   className="fas fa-award"/></span>
                                    <h3>100% NATURAL PRODUCT</h3>
                                </div>
                            </div>
                             <div className="col-md-3 col-xs-6">
                                <div className="center bounce-in">
                                    <span className="stat-icon"><i data-aos="flip-left" data-aos-duration="2000"
                                                                   className="far fa-file-alt"/></span>
                                    <h3>SERTIFICATE OF ANALYSIS</h3>
                                </div>
                            </div>                          
                            <div className="col-md-3 col-xs-6">
                                <div className="center bounce-in">
                                    <span className="stat-icon"><i data-aos="flip-left" data-aos-duration="2000"
                                                                   className="fas fa-dollar-sign"/></span>
                                    <h3>SAMPLE FOR TESTING</h3>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="center bounce-in">
                                    <span className="stat-icon"><i data-aos="flip-left" data-aos-duration="2000"
                                                                   className="fas fa-phone-volume"/></span>
                                    <h3>FAST REPLY</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gap"></div>
                </section>
            </div>
        );
    }

}


export default BenefitsContent;

