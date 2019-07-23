import React, {Component} from 'react';
import AOS from "aos";


const RESPONSIVE_CLASS = 'col-xs-12 col-md-6';

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
                    <div id="meet-the-team" className="row grid">
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <figure className="effect-bubba">
                                <img src={"./emil.jpg"} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <h2>Crazy <span>Layla</span></h2>
                                        <p>When Layla appears, she brings an eternal summer along.</p>
                                    </figcaption>			
					            </figure>
                        </div>
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <figure className="effect-bubba">
                                <img src={"./magdalena.jpg"} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <h2>Crazy <span>Layla</span></h2>
                                        <p>When Layla appears, she brings an eternal summer along.</p>
                                    </figcaption>			
					        </figure>
                        </div>
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <figure className="effect-bubba">
                                <img src={"./nadia.jpg"} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <h2>Crazy <span>Layla</span></h2>
                                        <p>When Layla appears, she brings an eternal summer along.</p>
                                    </figcaption>			
					        </figure>
                        </div>
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <figure className="effect-bubba">
                                <img src={"./emona.jpg"} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <h2>Crazy <span>Layla</span></h2>
                                        <p>When Layla appears, she brings an eternal summer along.</p>
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
}


export default FamilyContent;
