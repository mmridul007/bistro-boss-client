import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 text-white">
      <div className="bg-[#1F2937] text-center">
        <div className=" md:my-12 p-2">
            <h2 className="font-semibold sm:text-xl md:text-2xl my-3">Contact Us</h2>
            <p className="font-light">Datta Para, Ashulia Model Town, Dhaka, Bangladesh</p>
            <p className="font-light">+8801719877736</p>
            <p className="font-light">Mon - Fri: 08:00 - 22:00</p>
            <p className="font-light">Sat - Sun: 10:00 - 23:00</p>
        </div>
      </div>
      <div className="bg-[#111827] text-center p-2">
        <div className="sm:my-4 md:my-12">
            <h2 className="font-semibold sm:text-xl md:text-2xl my-3">Follow Us</h2>
            <p className="font-light">Join us on social media</p>
            <div className="grid grid-cols-3 justify-items-stretch md:mx-32 mt-2">
            <FaFacebookF className=" md:justify-self-end text-3xl" />
            <FaInstagram className="md:justify-self-center text-4xl"/>
            <SlSocialTwitter className=" md:justify-self-start text-4xl" />
            </div>
        </div>
      </div>
      <div className="text-center col-span-2 bg-black py-3">
        <p className="font-light">Copyright © Mostak Mridul. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
