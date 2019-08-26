import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Form from './Form.js';
// import { env } from '../config.js';



const defaultState = {
    userName: '',
    feedback: '',
    userMail: '',
    userTelephone: '',
    userCompany: '',
    formError: true,
    showSuccess: false,
    showFail: false,
    formSubmitted: false,
    btnMessage: "",
    notificationMessage: ""
};

class ContactFormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...defaultState,
            btnMessage: this.props.t ? this.props.t('contact-form.send') : '',
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => { this.validate() })
    };

 

    validate = () => {
        let formError = true;
        const { userName, feedback, userMail, userTelephone } = this.state;
        debugger
        if (userName !== '' && feedback !== '' && userMail !== '' && userTelephone !== '') {
            formError = false;
        } else {
            formError = true
        }
        this.setState({
            formError 
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.showFail || this.state.showSuccess){
            this.setState({
                ...defaultState,
                btnMessage: this.props.t('contact-form.send') 
            });
        } else {
           // const { REACT_APP_EMAILJS_TEMPLATEID: templateId } = env;    
        const templateId = "lavender_template";
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
                if (res.status === 200) {
                    this.setState({
                        ...defaultState,
                        showSuccess: true,
                        formError: false,
                        notificationMessage: this.props.t('contact-form.form-success'),
                        btnMessage: this.props.t('contact-form.send-new')                        
                    })
                }
                else {
                    this.setState({
                        ...defaultState,
                        showFail: true,
                        formError: false,
                        notificationMessage: this.props.t('contact-form.form-error'),
                        btnMessage: this.props.t('contact-form.send-new')          
                    })
                }
            })
            // Handle errors here however you like
            .catch(err => {
                this.setState({
                    ...defaultState,
                    showFail: true,
                    formError: false,
                    notificationMessage: this.props.t('contact-form.form-error'),
                    btnMessage: this.props.t('contact-form.send')   
                })
                console.error('Failed to send feedback. Error: ', err)
            });
        }        
    }

    onBlur = event => {
        if (event.target.value.trim() !== '') {
            event.target.classList.add('has-val');
        } else {
            event.target.classList.remove('has-val');
        }
    }

    render() {
        return (
                <Form 
                    handleSubmit={this.handleSubmit}
                    formError={this.state.formError}
                    userName={this.state.userName}
                    onBlur={this.onBlur}
                    handleChange={this.handleChange}
                    feedback={this.state.feedback}
                    userCompany={this.state.userCompany}
                    userTelephone={this.state.userTelephone}
                    userMail={this.state.userMail}
                    showSuccess={this.state.showSuccess}
                    showFail={this.state.showFail}
                    btnAgainMessage={this.state.btnMessage}
                    notificationMessage={this.state.notificationMessage}
                />
        );
    }
}

export default withTranslation()(ContactFormContainer);




