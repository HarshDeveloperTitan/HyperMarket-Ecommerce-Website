import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-700 font-medium mb-3">I'd like to hear from you!</p>
          <p className="text-gray-600 leading-relaxed">
            If you have any inquiries or just want to say hi, please use the contact form!
          </p>
        </div>

        {/* Right Section (Form) */}
        <form className="bg-white p-8 rounded-xl shadow-md space-y-6 border border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b3e19]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b3e19]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b3e19]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b3e19]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#0d78f2] text-white px-6 py-2 rounded-md hover:bg-[#1b67f4] transition-all duration-200 shadow-sm cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
