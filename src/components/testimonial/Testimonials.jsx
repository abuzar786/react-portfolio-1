import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Rreviews from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            
          </div>
          <h5>Enest Achiever</h5>
            <small className="client__review">
              He is very knowledgeable and expert person and he is very
              responsive. He did great Job for me and I really want to work with
              him again and again. He is strongly recommended.
            </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5>Enest Achiever</h5>
          <small className="client__review">
            He is very knowledgeable and expert person and he is very
            responsive. He did great Job for me and I really want to work with
            him again and again. He is strongly recommended.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5>Enest Achiever</h5>
          <small className="client__review">
            He is very knowledgeable and expert person and he is very
            responsive. He did great Job for me and I really want to work with
            him again and again. He is strongly recommended.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5>Enest Achiever</h5>
          <small className="client__review">
            He is very knowledgeable and expert person and he is very
            responsive. He did great Job for me and I really want to work with
            him again and again. He is strongly recommended.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
