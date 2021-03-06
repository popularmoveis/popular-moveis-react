import React, { Fragment } from "react";
import AOS from 'aos';
import Carousel from '../../components/Categoria/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import 'aos/dist/aos.css';

import "./HomePage.css";

// initialization
AOS.init();

const HomePage = () => (
  <div>
    <Fragment>
      <h1> </h1>
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
                  <Carousel />
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
  </div>
);

export default HomePage;

