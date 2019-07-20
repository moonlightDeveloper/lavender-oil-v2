import React, { Component } from 'react';
import ContactForm from '../Contact-Form';
import FamilyContent from "./Family-Content";
import ManufacturingContent from "./Manufacturing-Content";
import BenefitsContent from './Benefits-Content';
import HomeHeader from './Home-Header';
import { MailContext } from '../../config.js';



class Home extends Component {

    render() {
        return (
            <div id="home" className="main">
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
                                <div className="col-md-12">
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
        );
    }
}


export default Home;
