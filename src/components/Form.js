
import React from 'react';
import { useTranslation } from 'react-i18next';

const Form = props => {
    const { handleSubmit, handleChange, userMail, userName, feedback, userCompany, userTelephone, isContainerStyle } = props;
    const { t } = useTranslation();

    return <form className={`contact-form ${isContainerStyle? "container" : ""}`} action="" onSubmit={handleSubmit}>
                <input className="gutter" type="text"
                    placeholder={`${t('contact-form.name-label')}`} name="userName" value={userName} onChange={handleChange} />
                <input name="userCompany" type="text" placeholder={`${t('contact-form.company-label')}`} onChange={handleChange} value={userCompany}/>
                <input name="userTelephone" className="gutter" type="text" placeholder={`${t('contact-form.telephone')}`} value={userTelephone} onChange={handleChange} />
                <input type="text" placeholder={`${t('contact-form.mail-label')}`} value={userMail} name="userMail" onChange={handleChange} />
                <textarea name="feedback" id="tx" placeholder={`${t('contact-form.textarea')}`}  value={feedback} onChange={handleChange}></textarea>
                <input type="submit" value={`${t('contact-form.send')}`} />
            </form>
};

export default Form;