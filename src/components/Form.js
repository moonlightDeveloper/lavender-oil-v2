
import React from 'react';
import { useTranslation } from 'react-i18next';

const Form = props => {
    const { handleSubmit, showSuccess, showFail, btnAgainMessage, handleChange, userMail, userName, feedback, userCompany, userTelephone, onBlur, formError } = props;
    const { t } = useTranslation();

     return (
        <div className="container-contact2">
            <div className="wrap-contact2">
                <form className="contact2-form validate-form" onSubmit={handleSubmit}>
                    <span className="contact2-form-title">
                        Contact Us
					</span>
                    <div className="form-fetch-info">
                        {showSuccess &&
                            <svg id="successAnimation" class="animated" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 70 70">
                                <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#005596" stroke-width="2" stroke-linecap="round" fill="transparent" />
                                <polyline id="successAnimationCheck" stroke="#005596" stroke-width="2" points="23 34 34 43 47 27" fill="transparent" />
                            </svg>}

                        {showFail &&
                            <svg id="failureAnimation" class="animated" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 70 70">
                                <circle id="failureAnimationCircle" cx="35" cy="35" r="24" stroke="#005596" stroke-width="2" stroke-linecap="round" fill="transparent" />
                                <polyline class="failureAnimationCheckLine" stroke="#005596" stroke-width="2" points="25,25 45,45" fill="transparent" />
                                <polyline class="failureAnimationCheckLine" stroke="#005596" stroke-width="2" points="45,25 25,45" fill="transparent" />
                            </svg>}
                    </div>
                    {(!showSuccess && !showFail) &&
                        <React.Fragment>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div className="wrap-input2 validate-input" data-validate={`${t('contact-form.name-error')}`}>
                                        <input className="input2" type="text" name="userName" value={userName} onChange={handleChange} onBlur={onBlur} />
                                        <span className="focus-input2" data-placeholder={`${t('contact-form.name-label')}`}></span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div className="wrap-input2 validate-input">
                                        <input className="input2" type="text" name="userCompany" value={userCompany} onChange={handleChange} onBlur={onBlur} />
                                        <span className="focus-input2" data-placeholder={`${t('contact-form.company-label')}`}></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div className="wrap-input2 validate-input" data-validate={`${t('contact-form.email-error')}`}>
                                        <input className="input2" type="email" value={userMail} name="userMail" onChange={handleChange} onBlur={onBlur} />
                                        <span className="focus-input2" data-placeholder={`${t('contact-form.mail-label')}`}></span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div className="wrap-input2 validate-input" data-validate={`${t('contact-form.phone-error')}`}>
                                        <input className="input2" type="tel" pattern="\d+" value={userTelephone} name="userTelephone" onChange={handleChange} onBlur={onBlur} />
                                        <span className="focus-input2" data-placeholder={`${t('contact-form.telephone')}`}></span>
                                    </div>
                                </div>
                            </div>

                            <div className="wrap-input2 validate-input" data-validate={`${t('contact-form.message-error')}`}>
                                <textarea className="input2" name="feedback" id="tx" value={feedback} onChange={handleChange} onBlur={onBlur}></textarea>
                                <span className="focus-input2" data-placeholder={`${t('contact-form.textarea')}`} ></span>
                            </div>
                        </React.Fragment>
                    }

                    <div className="container-contact2-form-btn">
                        <div className="wrap-contact2-form-btn">
                            <div className={`contact2-form-bgbtn ${formError ? 'disabled' : ''}`}></div>
                            <button disabled={formError} className="contact2-form-btn" >
                                {btnAgainMessage}
							</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>




    )


};

export default Form;