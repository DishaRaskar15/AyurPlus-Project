import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-6">Contact Us</h1>
        <p className="text-center text-green-500 mb-10">
          Have questions or need help? Reach out to us and we'll get back to you shortly.
        </p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-green-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-green-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-green-700 mb-2">Message</label>
            <textarea
              placeholder="Type your message..."
              rows="5"
              className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-green-500 text-sm">
          Or email us at <span className="text-green-600 font-medium">support@ayurplus.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
