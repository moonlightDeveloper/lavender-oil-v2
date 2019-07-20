
import React from 'react';

const Form = props => {
    const { handleSubmit, handleChange, userMail, userName, feedback, userCompany, userTelephone } = props;

    return <form className="contact-form container" action="" onSubmit={handleSubmit}>
                <input className="gutter" type="text"
                    placeholder="Name" name="userName" value={userName} onChange={handleChange} />
                <input name="userCompany" type="text" placeholder="Company" onChange={handleChange} value={userCompany}/>
                <input name="userTelephone" className="gutter" type="text" placeholder="Telephone" value={userTelephone} onChange={handleChange} />
                <input type="text" placeholder="Email" value={userMail} name="userMail" onChange={handleChange} />
                <textarea name="feedback" id="tx" placeholder="Leave a message" value={feedback} onChange={handleChange}></textarea>
                <input type="submit" value="Send" />
            </form>
};

export default Form;