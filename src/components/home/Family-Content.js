import React, {Component} from 'react';
import AOS from "aos";


const RESPONSIVE_CLASS = 'col-xs-12 col-sm-6 img-animation-family';

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
                    <div id="meet-the-team" className="container-fluid grid">
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <figure className="effect-bubba">
                                <img src={"./emil.jpg"} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <h2>The <br/><span> Guy who</span>
                                        <p>made it all possible</p>
                                        </h2>
                                    
                                    </figcaption>			
					            </figure>
                        </div>
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <figure className="effect-bubba">
                                <img src={"./magdalena.jpg"} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <h2>The  <br/><span> Woman who </span>
                                        <p>speaks with you</p>
                                        </h2>
                                       
                                    </figcaption>			
					        </figure>
                        </div>
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <figure className="effect-bubba">
                                <img src={"./nadia.jpg"} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <h2>The <br/><span> woman who </span>
                                          <p>prepare the documents</p>
                                        </h2>
                                     
                                    </figcaption>			
					        </figure>
                        </div>
                        <div className={RESPONSIVE_CLASS + ' img-animation'}>
                            <figure className="effect-bubba">
                                <img src={"./emona.jpg"} className="about-us-image" alt="not found"/>
                                    <figcaption>
                                        <h2>And  <br/> the<span> one who </span>
                                           <p>control the oil production process</p>
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
}


export default FamilyContent;
