import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { withTranslation } from 'react-i18next';
import {Config,  env } from '../../config.js';
import Form from '../Form.js';
import { InstagramLogo, FacebookLogo, GoogleLogo } from '../../../src/assets/images/logos.js';







const bg = require('../../assets/images/bg-map.svg');

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

    render() {
        const { t } = this.props;

        return (
            <div id="lavender-slider" className="main">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{t('seo.title.contactPage')}</title>
                    <meta name="description" content={t('seo.description.contactPage')} />
                    <link rel="canonical" href={window.location.origin.toString()} />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content={t('seo.title.contactPage')} />
                    <meta property="og:description" content={t('seo.description.contactPage')} />
                    <meta property="og:image" content="LINK TO THE IMAGE FILE" />
                    <meta property="og:url" content={window.location.origin.toString()} />
                    <meta property="og:site_name" content={Config.SITE_NAME} />
                </Helmet>
                <section id="main-slider-contact" className="no-margin">
                    <img className='bg-map' src={bg} />
                    <div className="container absolute-centered">
                        <div className="txt-container">
                            <div className="main-container">
                                <h2 className="header-title">
                                    {t('contact-page.main-title')}
                                </h2>
                                <h3 className="sub"> {t('contact-page.sub-title')}</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="content-wrapper">
                    <section id="contact" className="container-fluid">

                        <div className="row row-no-padding">

                            <div className="col-xs-12">
                                <Form handleSubmit={this.handleSubmit}
                                    userName={this.state.userName}
                                    handleChange={this.handleChange}
                                    feedback={this.state.feedback}
                                    userCompany={this.state.userCompany}
                                    userTelephone={this.state.userTelephone}
                                    userMail={this.state.userMail}
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
                    </section>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Contact);;


const divStyle = {
    backgroundImage: "url(" + bg + ")",
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    backgroundPosition: 'center center'
};
