import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>abuzarhanjra786@gmail.com</h5>
            <a href="mailto:abuzarhanjra786@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <MdOutlineMail />
            <h4>Messenger</h4>
            <h5>abuzarhanjra786@gmail.com</h5>
            <a href="https://m.me/muhammadabuzar">Send a Message</a>
          </article>

          <article className="contact__option">
            <MdOutlineMail />
            <h4>WhatsApp</h4>
            <h5>+4740599866</h5>
            <a href="mailto:abuzarhanjra786@gmail.com">Send a Message</a>
          </article>
        </div>

        {/* End of contact options */}

        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
