import React from "react";
import phonecall from "../assets/icons/phonecall.svg";
import email from "../assets/icons/email.svg";
import location from "../assets/icons/location.svg";
const ContactForm = () => {
  return (
    <div className=" flex items-center justify-center text-gray-300 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4 md:px-10">
        <div className="p-4">
          <h2 className="text-4xl font-bold text-green-400 mb-2">
            Let's work together
          </h2>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            sit illo esse commodi.
          </p>
          <form className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                className="p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                required
                type="text"
                name="lastname"
                placeholder="Last name"
                className="p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                name="email"
                type="email"
                placeholder="Email address"
                className="p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
              required
              name="number"
                type="tel"
                placeholder="Phone number"
                className="p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"

              />
            </div>
            <select
            name="select"
              className="p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"           
            >
              <option>Select a service</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Digital Marketing</option>
            </select>
            <textarea
              placeholder="Type your message here."
              name="message"
              className="p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full h-32"
            />
            <button
              type="submit"
              className="bg-[#00FF99] hover:bg-green-600 text-gray-900 px-6 py-3 rounded-3xl font-semibold "
            >
              Send message
            </button>
          </form>
        </div>

        <div className="flex flex-col  justify-center space-y-8">
          <div className="flex items-center space-x-3">
            <div className="bg-green-400 p-3 rounded-full">
              <img src={phonecall} alt="Phone Icon" className="h-6 w-6" />
            </div>
            <p>(+40) 182 28493</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-green-400 p-3 rounded-full">
              <img src={email} alt="Email Icon" className="h-6 w-6" />
            </div>
            <p>hamza@gmail.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-green-400 p-3 rounded-full">
              <img src={location} alt="Location Icon" className="h-6 w-6" />
            </div>
            <p>Code Corner, Tech Town 13579</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;