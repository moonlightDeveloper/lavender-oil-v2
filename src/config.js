import React from 'react';

export const env = {
    REACT_APP_EMAILJS_USERID: process.env.REACT_APP_EMAILJS_USERID,
    REACT_APP_EMAILJS_TEMPLATEID: process.env.REACT_APP_EMAILJS_TEMPLATEID
};


export const MailContext = React.createContext(
    env
);