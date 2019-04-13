import React, {Component} from 'react';
import { InstagramLogo, FacebookLogo, GoogleLogo } from '../../src/assets/images/logos.js';

class ContactForm extends Component {
    constructor() {
        super()
        this.state = {
            isFormVisible: false
        };
    }

    toggleForm = () => {
        const isVisible = this.state.isFormVisible;
        this.setState({isFormVisible: !isVisible});
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
                                    <br/>
                                    Emil Iliev 
                                    <br/> 
                                    Magdalena Ilieva 
                                    <br/>
                                    gmail: emona.bulgaria@gmail.com
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="front">
                            <button onClick={() => this.toggleForm()} className="flip close">X</button>
                            <form className="contact-form container" action="">
                                <input className="gutter" type="text"
                                       placeholder="Name"/>
                                <input type="text" placeholder="Company"/>
                                <input className="gutter" type="text" placeholder="Telephone"/>
                                <input type="text" placeholder="Email"/>
                                <textarea name="" id="tx" placeholder="Leave a message"></textarea>
                                <input type="submit" value="Send"/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        );
    }
}


export default ContactForm;




