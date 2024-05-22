import React from "react";
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a href="/about" className="link link-hover">About us</a>
          <a href="/contact" className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="hover:scale-110">
            <span className='cursor-pointer'><FaFacebook size={25}/></span>
            </a>
            <a className="hover:scale-110">
            <span className='cursor-pointer'><FaInstagram size={25}/></span>
            </a>
            <a className="hover:scale-110">
            <span className='cursor-pointer'><FaLinkedin size={25}/></span>
            </a>
            <a className="hover:scale-110">
            <span className='cursor-pointer'><FaTwitter size={25}/></span>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
