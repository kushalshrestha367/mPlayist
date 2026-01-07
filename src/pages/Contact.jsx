import React from "react";

function Contact() {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-200 text-black">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="font-semibold text-3xl flex justify-center">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-600 flex justify-center text-center">
          Get in touch with us for any inquiries, feedback, or suggestions.
        </p>
        <form className="mt-8 space-y-5">
          <div>
            <label
              className="block mb-2 font-semibold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 font-semibold"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded font-semibold hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
