import React, { useState } from "react";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userFirstName, userLastName, userEmail, userNumber } = formData;
    console.log(formData)
    console.log("senttttt")

    // Construct the WhatsApp message
    const message = `First Name: ${userFirstName}\nLast Name: ${userLastName}\nEmail: ${userEmail}\nPhone No.: ${userNumber}`;

    // Trigger the WhatsApp message
    const whatsappURL = `https://wa.me/2348141946580?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="fixed inset-0 min-h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form
          className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Book Now
          </h1>
          <div className="flex flex-col">
            <input
              className="py-3 px-3 bg-gray-50 rounded-lg"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
              value={formData.userFirstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-3 bg-gray-50 rounded-lg"
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              value={formData.userLastName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-3 bg-gray-50 rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
              value={formData.userEmail}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-3 bg-gray-50 rounded-lg"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
              value={formData.userNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-5">
            {/* <Button handleSubmit={handleSubmit} title="Book Appointment" /> */}
            <button onClick={handleSubmit} className=" bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">Book Appointment</button>
            <button
              type="button"
              className="bg-gray-400 hover:bg-red-300 text-white px-10 rounded-md active:bg-red-500"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
