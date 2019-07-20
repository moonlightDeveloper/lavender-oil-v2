import React, { Component } from 'react';
import {env} from '../../config.js';
import Form from '../Form.js';
import { InstagramLogo, FacebookLogo, GoogleLogo } from '../../../src/assets/images/logos.js';

class Contact extends Component {

    constructor() {
        super()
        this.state = {
            isFormVisible: false,
            userName: '',
            feedback: '',
            userMail: '',
            userTelephone: '',
            userCompany: '',
            formSubmitted: false
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    
    handleSubmit = e => {
        e.preventDefault();
        const {REACT_APP_EMAILJS_TEMPLATEID : templateId} = env;
   
        window.emailjs
            .send(
                'mailgun',
                 templateId,
                {
                    "from_name": this.state.userName,
                    "user_feedback": this.state.feedback,
                    "user_mail": this.state.userMail,
                    "user_telephone": this.state.userTelephone,
                    "user_company": this.state.userCompany
                }
            )
            .then(res => {
                this.setState({
                    formEmailSent: true
                });
            })
            // Handle errors here however you like
            .catch(err => console.error('Failed to send feedback. Error: ', err));
    }


  
    render() {    
    
        const bg = require('../../assets/images/bg-map.svg')
        return (
            <div id="lavender-slider" className="main">
            <section id="main-slider-contact" className="no-margin">
                    <img className='bg-map' src={bg}/>
                    <div className="container absolute-centered">
                        <div className="txt-container">
                            <div  className="main-container">               
                                <h2 className="header-title">
                                    BULGARIA
                                </h2>
                                <h3 className="sub">Dobrich</h3>
                            </div>
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
                <Form handleSubmit={this.handleSubmit} 
                                  userName={this.state.userName}
                                  handleChange={this.handleChange}
                                  feedback={this.state.feedback}
                                  userCompany={this.state.userCompany}
                                  userTelephone={this.state.userTelephone}
                                  userMail={this.state.userMail}                                  
                                />  
                </div>
            </section>
            </div>
        </div>
        );
    }
}

export default Contact;
const bg = require('../../assets/images/bg-map.svg')

const divStyle = {
    backgroundImage:"url("+bg+")",
    backgroundSize:'cover',
    height:'100vh',
    width:'100%',
    backgroundPosition:'center center'
  };
