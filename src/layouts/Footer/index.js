import React from "react";
import logo from "../../assets/images/logo.png";
import fci from "../../assets/images/fci.png";
import akc from "../../assets/images/akc.png";
import akd from "../../assets/images/akd.png";
import kc from "../../assets/images/kc.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3  pl-lg-5 mb-3 mb-md-0">
            <h2 className="footer-heading">Site Links</h2>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="py-2 d-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#"  className="py-2 d-block">
                  About KCP
                </Link>
              </li>
              <li>
                <Link to="#"  className="py-2 d-block">
                  Become A Member
                </Link>
              </li>
              <li>
                <Link to="#"  className="py-2 d-block">
                Kennel Club of Pakistan
                </Link>
              </li>
        
            </ul>
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="footer-images mt-5">
              <div className=" patner-imgaes d-flex flex-wrap justify-content-between align-items-center">
                <img src={akc} />
                <img src={akd} />
                <img src={kc} />
                <img src={fci} />
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h2 className="footer-heading">Address</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                  <span className="icon fa fa-map"></span>
                  <span className="text">
                    LG 21 Gulberg Arcade Main Market Gulberg 2 Lahore Pakistan
                  </span>
                </li>
              </ul>
            </div>
            <h2 className="footer-heading">Contact Details</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                  <a href="#">
                    <span className="icon fa fa-phone"></span>
                    <span className="text">+92 331 144 4482</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon fa fa-paper-plane"></span>
                    <span className="text">info@kcp.com.pk</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p className="copyright">
              Copyright &copy;{new Date().getFullYear()}- Kennel Club of
              Pakistan. All Rights Reserved. Powered by Inspedium Corp.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
