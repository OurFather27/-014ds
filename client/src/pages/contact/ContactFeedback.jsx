import './contact.css'
import { MdCancel ,MdPermMedia,MdOutlineLocationOn, MdLabelImportant,MdEmojiEmotions } from "react-icons/md";
import { useContext, useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import emailjs from '@emailjs/browser';


export default function ContactFeedback() {
  const fristname = useRef();
  const lastname = useRef();
  const email = useRef();
  const contact_desc = useRef();
  const history = useHistory();

  const form = useRef();




  const submitFeedBack = async (e) => {
    e.preventDefault();

    // email dirctely send  by this
    emailjs.sendForm('service_hcoa4aa', 'template_g6q563e', form.current, 'cN0Bum34isJ487PJm')

      const NewContact = {
        fristname: fristname.current.value,
        lastname: lastname.current.value,
        email: email.current.value,
        contact_desc: contact_desc.current.value,
      }
      try {
        await axios.post("https://marsilapi.onrender.com/api/auth/contact", NewContact);
        alert('succss')
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
  };

  return (
    <>
    <div className="contactFeedbackContinaire">

        <form className="contact-Feedback-box"ref={form} onSubmit={submitFeedBack}>
        <h2>Connect With Us</h2>
        <input className="contact-Feedback-input"name="fristname"required type="text"placeholder="frist name"ref={fristname}/>
        <input className="contact-Feedback-input"name="lastname"required type="text"placeholder="last name"ref={lastname}/>
        <input className="contact-Feedback-input"name="email"required type="email"placeholder="Email"ref={email}/>
        <br></br>
        <textarea className="textarea"name="contact_desc" placeholder="description"ref={contact_desc}></textarea>
          <button className="ContactButton" type="submit">
            Submit
          </button>
        </form>
        </div>
    </>
  );
}
