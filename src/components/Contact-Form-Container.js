import React, { Component } from 'react';
import Form from './Form.js';
import { env } from '../config.js';
import { withTranslation } from 'react-i18next';


class ContactFormContainer extends Component {
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
        const { REACT_APP_EMAILJS_TEMPLATEID: templateId } = env;

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
    onBlur = event => {
        if(event.target.value.trim() !== ''){
            event.target.classList.add('has-val');
        } else {
            event.target.classList.remove('has-val');
        }
    }

    render() {
        return (
            <Form handleSubmit={this.handleSubmit}
                    formError={this.state.formError}
                    userName={this.state.userName}
                    onBlur={this.onBlur}
                    handleChange={this.handleChange}
                    feedback={this.state.feedback}
                    userCompany={this.state.userCompany}
                    userTelephone={this.state.userTelephone}
                    userMail={this.state.userMail}                                               
                />
        );
    }
}


export default withTranslation()(ContactFormContainer);




