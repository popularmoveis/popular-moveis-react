import React, { Fragment } from "react";

import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    return (
        <div>
            <Fragment>
                <p className="social-container">
                    <a href="https://www.facebook.com/popularmoveiis/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/popularmoveiis/"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>

                    <a href="https://www.instagram.com/popularmoveiis/"
                        className="whatsapp social">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>

                </p>
            </Fragment>
        </div>
    );
}