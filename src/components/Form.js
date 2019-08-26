
import React from 'react';
import { useTranslation } from 'react-i18next';

const Form = props => {
    const { handleSubmit, handleChange, userMail, userName, feedback, userCompany, userTelephone, onBlur, formError} = props;
    const { t } = useTranslation();

    return (
        <div className="container-contact2">
            <div className="wrap-contact2">
                <form className="contact2-form validate-form" onSubmit={handleSubmit}>
                    <span className="contact2-form-title">
                    {t('contact-form.main-title')}
					</span>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <div className="wrap-input2 validate-input" data-validate={`${t('contact-form.required')}`}>
                                <input className="input2" type="text" name="userName" value={userName} onChange={handleChange} onBlur={onBlur} />
                                <span className="focus-input2" data-placeholder={`${t('contact-form.name-label')}`}></span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="wrap-input2 validate-input">
                                <input className="input2" type="text" name="userCompany" value={userCompany} onChange={handleChange} onBlur={onBlur} />
                                <span className="focus-input2" data-placeholder={`${t('contact-form.company-label')}`}></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <div className="wrap-input2 validate-input" data-validate={`${t('contact-form.required')}`}>
                                <input className="input2" type="email" value={userMail} name="userMail" onChange={handleChange} onBlur={onBlur} />
                                <span className="focus-input2" data-placeholder={`${t('contact-form.mail-label')}`}></span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="wrap-input2 validate-input" data-validate={`${t('contact-form.required')}`}>
                                <input className="input2" type="tel" pattern="\d+"  value={userTelephone} name="userTelephone" onChange={handleChange} onBlur={onBlur} />
                                <span className="focus-input2" data-placeholder={`${t('contact-form.telephone')}`}></span>
                            </div>
                        </div>
                    </div>

                    <div className="wrap-input2 validate-input" data-validate={`${t('contact-form.required')}`}>
                        <textarea className="input2" name="feedback" id="tx" value={feedback} onChange={handleChange} onBlur={onBlur}></textarea>
                        <span className="focus-input2" data-placeholder={`${t('contact-form.textarea')}`} ></span>
                    </div>

                    <div className="container-contact2-form-btn">
                        <div className="wrap-contact2-form-btn">
                            <div className={`contact2-form-bgbtn ${formError ? 'disabled' : ''}`}></div>
                            <button disabled={formError} className="contact2-form-btn">
                            {t('contact-form.send')}
							</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>




    )


};

export default Form;