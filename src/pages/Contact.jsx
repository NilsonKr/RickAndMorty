import React from 'react'
import SendEmail from '../utils/sendEmail'

import './styles/Contact.css'
import ContactImg from '../assets/contactImage.png'

class Contact extends React.Component{

  // handleSubmit(ev){
  //   ev.preventDefault()
  //   SendEmail()
  // }

  render(){
    return (
      <section className="contact__container">
        <div className="contact__image">
          <img src={ContactImg} alt="Contact Hero"/>
        </div>
        <div className="contact__details">
          <h2>Lets Create Something Together!</h2>
          <form onSubmit={SendEmail} className="contact__form">
            <label htmlFor="email" className="contact__input">
              <input name="email" type="email" placeholder="Your E-mail"/>
              <span className="placeHolder">Your E-mail</span>
            </label>
            <button className="btn btn-primary send-button">Send</button>
          </form>
        </div>
        <a href="nilsonkr444@gmail.com" id="trick">jojojoj</a>
      </section>
    )
  }
}

export default Contact