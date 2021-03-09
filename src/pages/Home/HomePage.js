import React, { Fragment } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./HomePage.css";

// initialization
AOS.init();

const HomePage = () => (
  <div>
    <Fragment>
      <h1>Home</h1>
      <div className="container text-center">
        {/* <!-- main --> */}
        <main>
          {/* <!-- services --> */}
          <section id="services">
            {/* <!-- <h1>Services</h1>--> */}
            <div className="row">
              <div
                className="col-xs-12 col-sm-4"
                data-aos="zoom-out-down"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                <div className="well well-lg">
                  <h1>1</h1>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4"
                data-aos="zoom-out-left"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                <div className="well well-lg">
                  <h1>2</h1>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4"
                data-aos="zoom-out-right"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                <div className="well well-lg">
                  <h1>3</h1>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- about --> */}
          <section id="about">
            <h1>About</h1>
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 col-md-8"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="50"
              >
                <div className="well well-lg">
                  <h1>4</h1>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-4"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="50"
              >
                <div className="well well-lg">
                  <h1>5</h1>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- contact --> */}
          <section id="contact">
            <h1>Contact</h1>
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <div className="well well-lg">
                  <h1>6</h1>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                data-aos="fade-zoom-out"
                data-aos-easing="ease-in-back"
                data-aos-delay="1000"
                data-aos-offset="0"
              >
                <div className="well well-lg">
                  <h1>7</h1>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Fragment>

    {/* WhatsApp icon */}
    <a
      href="https://wa.me/2348100000000"
      class="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fa fa-whatsapp whatsapp-icon"></i>
    </a>
  </div>
);

export default HomePage;

