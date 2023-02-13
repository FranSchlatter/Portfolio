import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';

function Contact( {contactRef} ) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Portfolio-FranSchlatter', 'template_f3lghkr', form.current, 'MLOzqjyfDNwrO1Rht')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='main_contact_app' ref={contactRef}>
      <h1 className='contact_title_h1'>CONTACT</h1>
      <div className="contact_app">
        <div className='about_section'>
          <form className='contact_section_form' ref={form} onSubmit={sendEmail}>
            <input placeholder='Your Name' type="text" name="nombre" />
            <input placeholder='Your Email' type="email" name="email" />
            <textarea placeholder='Messaje' name="mensaje" />
            <input className="contact_button_send" type="Submit" value="Send" />
          </form>
        </div>

        <div className='contact_section_div'>
          <div>
            <a href="https://calendly.com/franschlatter/30min" target={'_blank'}><EventIcon style={{color: "blue"}}/></a>
            <span>Schedule an interview</span>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/francisco-schlatter/" target={'_blank'}><LinkedInIcon style={{color: "blue"}}/></a>
            <span>Send me a DM</span>
          </div>
          <div>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target={'_blank'}><EmailIcon style={{color: "blue"}}/></a>
            <span>franchi13579@gmail.com</span>
          </div>
          <div>
            <a href="https://api.whatsapp.com/send?phone=3424365585" target={'_blank'}><WhatsAppIcon style={{color: "blue"}}/></a>
            <span>+5493424365585</span>
          </div>
          <div>
            <a href="https://www.instagram.com/fran.schlatter/" target={'_blank'}><InstagramIcon style={{color: "blue"}}/></a>
            <span>@FranSchlatter</span>
          </div>
        </div>

      </div> 
    </div>
    
  );
}

export default Contact;