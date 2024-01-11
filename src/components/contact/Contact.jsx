import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import Details from '../details/Details'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4bydeft', 'template_36iy01k', form.current, 'zK5VCbrbnemSeSLKE')
      .then((result) => {
          form.current.reset()
          console.log(result.text);
          console.log('Message Sent')
      }, (error) => {
          console.log(error.text);
      });
  }; 
  return (
    <div className='contacts-container'>
        <h1 className='contacts-title'>Contact Me</h1>
        <p className='contact-intro'>Let's connect! Whether you're interested in collaboration, have a question, or just want to say hello, I'm just a message away. Reach out, and let's start a conversation.</p>
        <div className="contacts">
            <div className="details-container-contact"><Details /></div>
            <div className="separator"></div>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" placeholder='Your name' autoComplete='off' />
                <label>Email</label>
                <input type="email" name="user_email" placeholder='Your message' autoComplete='off' />
                <label>Message</label>
                <textarea name="message" rows='5' placeholder='Your Message'  />
                <input type="submit" value="Send" className='btn' />
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact