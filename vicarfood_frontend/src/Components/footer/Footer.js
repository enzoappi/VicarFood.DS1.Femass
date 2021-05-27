import React from 'react'

import { FaInstagram } from "react-icons/fa";

import './Footer.css'

const Footer = () => (
    <footer className="app-footer">
        <a href="https://www.instagram.com/vicarfood">
            <FaInstagram className="Instagram" />
            <span  className="app-footer__message" >
                @VicarFood
            </span>
        </a>
    </footer>
)

export default Footer