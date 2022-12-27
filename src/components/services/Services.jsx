import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>WordPress Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>
          </ul>
        </article>

        {/* End of the WordPress service  */}

        <article className="service">
          <div className="service__head">
            <h3>XR and Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>
          </ul>
        </article>

        {/* End of the XR and Web Developement service  */}

        <article className="service">
          <div className="service__head">
            <h3>Graphic and 3D Designing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design with UX</p>
            </li>
          </ul>
        </article>

        {/* End of the Graphic Design service  */}
      </div>
    </section>
  );
};

export default Services;
