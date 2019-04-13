import React, {Component} from 'react';
import AOS from "aos";


const RESPONSIVE_CLASS = 'col-sm-6 col-xs-12 col-md-3';

class FamilyContent extends Component {

    componentDidMount() {
        AOS.init();
    }

    componentWillReceiveProps() {
        AOS.refresh();
    }

    render() {
        return (
            <section className="family-section">

                <div className="container">
                    <div className="gap"></div>
                    <div className="gap fade-down section-heading">
                        <h2 className="prpl-title">Meet Our Family</h2>                       
                    </div>
                    <div id="meet-the-team" className="row">
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <div className="center team-member">
                                <div className="team-image">
                                    <div className="front card">
                                        {/* <span>The guy who made it all possible</span> */}
                                        <div className="production-img"
                                             style={{backgroundImage: "url(/emil.jpg)"}} data-aos="flip-up"
                                             data-aos-delay="0" data-aos-duration="1000">
                                        </div>
                                    </div>
                                    <div className="back card"></div>
                                </div>
                            </div>
                        </div>
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <div className="center team-member">
                                <div className="team-image">
                                    <div className="front card">
                                        {/* <span>The woman who speaks with you</span> */}
                                        <div className="production-img"
                                             style={{backgroundImage: "url(/magdalena.jpg)"}} data-aos="flip-up"
                                             data-aos-delay="100" data-aos-duration="1000">
                                        </div>
                                    </div>
                                    <div className="back card"></div>
                                </div>
                            </div>
                        </div>
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <div className="center team-member">
                                <div className="team-image ">
                                    <div className="front card">
                                        {/* <span> The woman who prepare the documents</span> */}
                                        <div className="production-img"
                                             style={{backgroundImage: "url(/nadia.jpg)"}} data-aos="flip-up"
                                             data-aos-delay="200" data-aos-duration="1000">
                                        </div>
                                    </div>
                                    <div className="back card"></div>
                                </div>
                            </div>
                        </div>
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <div className="center team-member">
                                <div className="team-image ">
                                    <div className="front card">
                                        {/* <span>The woman who control the oil production process</span> */}
                                        <div className="production-img"
                                             style={{backgroundImage: "url(/emona.jpg)"}} data-aos="flip-up"
                                             data-aos-delay="300" data-aos-duration="1000">
                                        </div>
                                    </div>
                                    <div className="back card"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <div style={{backgroundImage: "url(/mapeurope.png)"}}></div>
                </div>
            </section>
        );
    }
}


export default FamilyContent;
