import React, { Component } from 'react';
import { InstagramLogo, FacebookLogo, GoogleLogo } from '../../../src/assets/images/logos.js';

class Contact extends Component {
  
    render() {    
        return (
            <div id="lavender-slider" className="main">
            <section id="main-slider-contact" className="no-margin">
                    <img src="/map-bg.png" className="back-image-oil" alt="not found"/>  
                    <div className="txt-container">
                    <div className="container main-container">               
                        <h2 className="header-title">
                            BULGARIA
                        </h2>
                        <h3 className="sub">Dobrich</h3>
                    </div>
                    </div>       
            </section>
            <div className="prpl-title border-hr">
                    <div className="container ">
                        <h2 className="main-title">Contact Us</h2>
                        <hr />
                    </div>
                  </div>
            <div id="content-wrapper">
            <section id="contact" className="container">
            <div className="col-sm-6 col-xs-12">
            <div className="share active">
                <div className="fabs" src="/instagram-logo.svg"><InstagramLogo></InstagramLogo></div>
                <div className="fabs"><FacebookLogo></FacebookLogo></div>
                <div className="fabs"><GoogleLogo></GoogleLogo></div>
                <div className="content">
                 Company:  Emona 29
                 <br/>
                 Emil Iliev 
                 <br/>
                 Magdalena Ilieva 
                 <br/>
                 gmail: emona.bulgaria@gmail.com
                </div>
            </div>
            </div>
                <div className="cont-contactBtn col-sm-6 col-xs-12">
                <form className="contact-form" action="">
                                <input className="gutter" type="text"
                                       placeholder="Name"/>
                                <input type="text" placeholder="Company"/>
                                <input className="gutter" type="text" placeholder="Telephone"/>
                                <input type="text" placeholder="Email"/>
                                <textarea name="" id="tx" placeholder="Leave a message"></textarea>
                                <input type="submit" value="Send"/>
                            </form>
                </div>
            </section>
            </div>
        </div>
        );
    }
}


export default Contact;
