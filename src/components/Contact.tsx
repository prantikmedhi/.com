"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-background py-24 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
            Let&apos;s <span className="text-secondary font-medium">Connect.</span>
          </h2>
          <p className="text-gray-600 font-light text-lg">
            Ready to start your design journey? We&apos;d love to hear from you. Please fill out the form or reach out directly.
          </p>
          <div className="space-y-4 text-gray-800 font-light">
            <p>
              <span className="block font-medium text-gray-900">Email</span>
              <a href="mailto:hello@studio.com" className="hover:text-secondary transition-colors">hello@studio.com</a>
            </p>
            <p>
              <span className="block font-medium text-gray-900">Phone</span>
              <a href="tel:+15551234567" className="hover:text-secondary transition-colors">+1 (555) 123-4567</a>
            </p>
            <p>
              <span className="block font-medium text-gray-900">Location</span>
              123 Design Avenue, Suite 100<br />New York, NY 10001
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 tracking-wider uppercase">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:border-gray-900 focus:outline-none transition-colors rounded-none placeholder-gray-400 text-gray-900"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 tracking-wider uppercase">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:border-gray-900 focus:outline-none transition-colors rounded-none placeholder-gray-400 text-gray-900"
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-2 pt-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 tracking-wider uppercase">Project Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:border-gray-900 focus:outline-none transition-colors rounded-none resize-none placeholder-gray-400 text-gray-900"
              placeholder="Tell us about your project..."
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-8 py-4 rounded-none hover:bg-gray-800 transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
