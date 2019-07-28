import React, { Component } from 'react';
import Form from './Form.js';
import { InstagramLogo, FacebookLogo, GoogleLogo } from '../../src/assets/images/logos.js';

class ContactForm extends Component {
    constructor(props) {
        super(props)
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

    toggleForm = () => {
        const isVisible = this.state.isFormVisible;
        this.setState({ isFormVisible: !isVisible });
    }

    handleCancel = () => {
        this.setState({
            feedback: ''
        });
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const {templateId} = this.props      
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
        return (

            <section id="contact">

                <div className="cont-contactBtn">
                    <div className={this.state.isFormVisible ? 'cont-flip' : 'cont-flip flipped'}>
                        <div className='back'>
                            <button onClick={() => this.toggleForm()} className="btn btn-white flip">CONTACT US
                            </button>
                            <div className="container contacts black-contacts">
                                <div className="col-xs-12 col-sm-6">
                                    <div className="share active">
                                        <div className="fabs" src="/instagram-logo.svg"><InstagramLogo></InstagramLogo></div>
                                        <div className="fabs"><FacebookLogo></FacebookLogo></div>
                                        <div className="fabs"><GoogleLogo></GoogleLogo></div>
                                        <div className="content">
                                            Company:  Emona 29
                                    <br />
                                            Emil Iliev
                                    <br />
                                            Magdalena Ilieva
                                    <br />
                                            gmail: emona.bulgaria@gmail.com
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="front">
                            <button onClick={() => this.toggleForm()} className="flip close">X</button>
                            <Form handleSubmit={this.handleSubmit} 
                                  userName={this.state.userName}
                                  handleChange={this.handleChange}
                                  feedback={this.state.feedback}
                                  userCompany={this.state.userCompany}
                                  userTelephone={this.state.userTelephone}
                                  userMail={this.state.userMail}
                                  isContainerStyle={this.props.isContainerStyle}                                  
                                />                        
                        </div>
                    </div>
                </div>

            </section>

        );
    }
}


export default ContactForm;




