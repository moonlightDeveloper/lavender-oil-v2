
import React from 'react';

const Form = props => {
    const { handleSubmit, handleChange, userMail, userName, feedback, userCompany, userTelephone, isContainerStyle } = props;

    return <form className={`contact-form ${isContainerStyle? "container" : ""}`} action="" onSubmit={handleSubmit}>
                <input className="gutter" type="text"
                    placeholder="Name" name="userName" value={userName} onChange={handleChange} />
                <input name="userCompany" type="text" placeholder="Company" onChange={handleChange} value={userCompany}/>
                <input name="userTelephone" className="gutter" type="text" placeholder="Telephone" value={userTelephone} onChange={handleChange} />
                <input type="text" placeholder="Email" value={userMail} name="userMail" onChange={handleChange} />
                <textarea name="feedback" id="tx" placeholder="Leave a message" value={feedback} onChange={handleChange}></textarea>
                <div class="g-recaptcha" data-sitekey="6LcM768UAAAAALhJLZjbcApG7UzZuoft9kArifqP"></div>
                <br/>
                <input type="submit" value="Send" />
            </form>
};

export default Form;