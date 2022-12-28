import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "tine snow",
    review: "abc the kind and strong person and recommended",
  },
  {
    avatar: AVTR2,
    name: "Edward El Hayak",
    review: "abc the kind and strong person and recommended",
  },
  {
    avatar: AVTR3,
    name: "Philip Rein",
    review: "abc the kind and strong person and recommended",
  },
  {
    avatar: AVTR4,
    name: "Kevin Tan",
    review: "abc the kind and strong person and recommended",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Rreviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
