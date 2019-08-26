import React, { Component } from 'react';
import Form from './Form.js';
import { InstagramLogo, FacebookLogo, GoogleLogo } from '../../src/assets/images/logos.js';
import { withTranslation } from 'react-i18next';


class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFormVisible: true,
            userName: '',
            feedback: '',
            userMail: '',
            userTelephone: '',
            userCompany: '',
            formSubmitted: false,
            formError:true
        };
    }

    handleCancel = () => {
        this.setState({
            feedback: ''
        });
    }

    handleChange = event => {
        
        if(event.target.name !== 'userCompany'){
            if(event.target.value.trim() === '') {
                event.target.parentElement.classList.add("alert-validate");
            } else {
                event.target.parentElement.classList.remove("alert-validate");
    
            }    
        }

        this.setState({
            [event.target.name]: event.target.value
        }, () =>{this.validate()})
    }

    validate = () => {
        let formError = true;
        const {userName, feedback, userMail, userTelephone} = this.state;
        debugger
        if(userName !== '' && feedback !== '' && userMail !== '' && userTelephone !== '') {
            formError = false;
        } else {
            formError = true
        }    
        this.setState({
            formError
        })
    }

    onBlur = event => {
        if(event.target.value.trim() !== '') {
            event.target.classList.add("has-val");
        } else {
            event.target.classList.remove("has-val");

        }
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
        const {t} = this.props;
        return (

            <section id="contact">

                <div className="cont-contactBtn">
                    <div className={this.state.isFormVisible ? 'cont-flip' : 'cont-flip flipped'}>
                    
                        <div className="front">
                            <Form handleSubmit={this.handleSubmit} 
                                    formError={this.state.formError}
                                  userName={this.state.userName}
                                  onBlur={this.onBlur}
                                  handleChange={this.handleChange}
                                  feedback={this.state.feedback}
                                  userCompany={this.state.userCompany}
                                  userTelephone={this.state.userTelephone}
                                  userMail={this.state.userMail}
                                  isContainerStyle={this.props.isContainerStyle}                                  
                                />                        
                        </div>
                        <div className="container contacts our-contacts">
                                <div className="col-xs-12">
                                    <div className="share active">
                                        <div className="fabs" src="/instagram-logo.svg"><InstagramLogo></InstagramLogo></div>
                                        <div className="fabs"><FacebookLogo></FacebookLogo></div>
                                        <div className="fabs"><GoogleLogo></GoogleLogo></div>
                                        <div className="content">
                                        {t('contact-form.company')}
                                    <br />
                                        {t('contact-form.email')}
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default withTranslation()(ContactForm);




