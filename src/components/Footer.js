import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setEmail("");
  };

  return (
    <div className="w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4">
        <div className="">
          <h6 className="font-bold uppercase pt-2">solutions</h6>
          <ul>
            <li className="py-1">Travel</li>
            <li className="py-1">Booking</li>
            <li className="py-1">Flights</li>
            <li className="py-1">Cruises</li>
            <li className="py-1">Ground</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold uppercase pt-2">support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Tours</li>
            <li className="py-1">Refunds</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold uppercase pt-2">company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold uppercase pt-2">legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policy</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold uppercase">subscribe to our newsletter</p>
          <p className="py-4">
            The lastest deals, articles and resources sent to your inbox weekly
          </p>
          <form className="flex flex-col sm:flex-row " onSubmit={handleSubmit}>
            <input
              className="w-full p-2 mr-4 rounded mb-4 text-gray-900"
              type="email"
              name=""
              id=""
              value={email}
              placeholder="Enter Email.."
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="p-2 mb-4 rounded-md">Subscribe</button>
          </form>
          {submit && (
            <span className="py-4 text-white">Thank you for subscribing!</span>
          )}
        </div>
      </div>
      <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Experiences LLC, All Rights Reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <TiSocialPinterest size={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
