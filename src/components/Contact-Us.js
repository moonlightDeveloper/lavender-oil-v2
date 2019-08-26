import React from 'react';
import { useTranslation } from 'react-i18next';
import { InstagramLogo, FacebookLogo, GoogleLogo } from '../assets/images/logos.js';


const ContactUs = () => {
    const { t } = useTranslation();

    return (<div className="container contacts our-contacts">
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
    </div>);
};

export default ContactUs;