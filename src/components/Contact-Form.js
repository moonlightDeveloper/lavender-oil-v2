import React, { Component } from 'react';
import { InstagramLogo, FacebookLogo, GoogleLogo } from '../../src/assets/images/logos.js';

class ContactForm extends Component {
    constructor() {
        super()
        this.state = {
            isFormVisible: false,
            feedback: '',
            formSubmitted: false
        };
    }

    static sender = 'magdalena.e.ilieva@gmail.com';

    toggleForm = () => {
        const isVisible = this.state.isFormVisible;
        this.setState({ isFormVisible: !isVisible });
    }

    handleCancel = () => {
        this.setState({
            feedback: ''
        });
    }

    handleChange = event => {
        this.setState({
            feedback: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
     
        const {
            userId: receiverEmail,
            templateId: template
        } = this.props;

        this.sendFeedback(
            template,
            this.sender,
            receiverEmail,
            this.state.feedback
        );

        this.setState({
            formSubmitted: true
        });
    }

    sendFeedback = (templateId, senderEmail, receiverEmail, feedback) => {
        debugger;
        window.emailjs
            .send('mailgun', templateId, {
                senderEmail,
                receiverEmail,
                feedback
            })
            .then(res => {
                this.setState({
                    formEmailSent: true
                });
            })
            // Handle errors here however you like
            .catch(err => console.error('Failed to send feedback. Error: ', err));
    }


    render() {
        return (

            <section id="contact">

                <div className="cont-contactBtn">
                    <div className={this.state.isFormVisible ? 'cont-flip' : 'cont-flip flipped'}>
                        <div className='back'>
                            <button onClick={() => this.toggleForm()} className="btn btn-white flip">CONTACT US
                            </button>
                            <div className="container contacts black-contacts">
                                <div className="col-xs-12 col-sm-6">
                                    <div className="share active">
                                        <div className="fabs" src="/instagram-logo.svg"><InstagramLogo></InstagramLogo></div>
                                        <div className="fabs"><FacebookLogo></FacebookLogo></div>
                                        <div className="fabs"><GoogleLogo></GoogleLogo></div>
                                        <div className="content">
                                            Company:  Emona 29
                                    <br />
                                            Emil Iliev
                                    <br />
                                            Magdalena Ilieva
                                    <br />
                                            gmail: emona.bulgaria@gmail.com
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="front">
                            <button onClick={() => this.toggleForm()} className="flip close">X</button>
                            <form className="contact-form container" action=""  onSubmit={this.handleSubmit}>
                                <input className="gutter" type="text"
                                    placeholder="Name" />
                                <input type="text" placeholder="Company" />
                                <input className="gutter" type="text" placeholder="Telephone" />
                                <input type="text" placeholder="Email" />
                                <textarea name="" id="tx" placeholder="Leave a message"  value={this.state.feedback} onChange={this.handleChange}></textarea>
                                <input type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>

            </section>

        );
    }
}


export default ContactForm;




