import React from "react";
import { IoCallOutline, IoChatbubbleOutline } from "react-icons/io5";
import Card from "./card";

const Footer = () => {
  return (
    <footer className="footer bg-primaryNdpc text-white p-10">
      {/* <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav> */}
      {/* <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav> */}
      <nav>
        <h6 className="footer-title">Help & Support</h6>
        <div className="flex items-center gap-1">
          <label htmlFor="">Ncell: 18102150500</label>
          <a className="link link-hover" href="tel:18102150500">
            <button
              type="button"
              className="btn btn-sm text-white  bg-buttonColorNdpc "
            >
              <IoCallOutline />
              Call Now
            </button>
          </a>
        </div>
        <div className="flex items-center gap-1">
          <label htmlFor="">NTC: 16600150500</label>
          <a className="link link-hover" href="tel:16600150500">
            <button
              type="button"
              className="btn btn-sm text-white  bg-buttonColorNdpc "
            >
              <IoCallOutline />
              Call Now
            </button>
          </a>
        </div>
        <div className="flex items-center gap-1">
          <label htmlFor="">Viber: +977-5050050500</label>
          <a className="link link-hover" href="viber://chat?number=5050050500">
            <button
              type="button"
              className="btn btn-sm text-white  bg-buttonColorNdpc "
            >
              <IoChatbubbleOutline />
              Chat Now
            </button>
          </a>
        </div>
        <div className="flex items-center gap-1">
          <label htmlFor="">WhatsApp: +977-9851250500</label>
          <a className="link link-hover" href="whatsapp://send?phone=9851250500">
            <button
              type="button"
              className="btn btn-sm text-white  bg-buttonColorNdpc "
            >
              <IoChatbubbleOutline />
              Chat Now
            </button>
          </a>
        </div>
       
      </nav>
      <form>
        <h6 className="footer-title">Contact Email</h6>
        <fieldset className="form-control w-80">
          <div className="join">
            <label className="input input-bordered join-item  flex items-center justify-center bg-transparent">
              support@namastepay.com
            </label>
            <a href="mailto:support@namastepay.com">
              <button
                type="button"
                className="btn  bg-buttonColorNdpc text-white join-item"
              >
                Send Mail
              </button>
            </a>
          </div>
        </fieldset>
      </form>
      <div className="size-max "> <Card/> </div>
    </footer>
  );
};

export default Footer;
