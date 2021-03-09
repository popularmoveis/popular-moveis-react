import React from "react";

import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    return (
        <div>
            <p className="social-container">
                <a href="https://www.facebook.com/popularmoveiis/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/popularmoveiis/"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </p>
        </div>
    );
}