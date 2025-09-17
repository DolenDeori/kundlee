import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  UserCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { BsPersonCircle, BsChatLeftDots } from "react-icons/bs";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", feedback: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-warm-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-full sunray-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
            <p className="font-inter font-medium uppercase text-sm text-saffron tracking-wide">
              Contact Us
            </p>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
          </div>
          <h2 className="font-larken text-4xl lg:text-5xl text-charcoal uppercase">
            Get In Touch
          </h2>
          <p className="font-inter text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Have any Questions or feedback? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between h-full py-8"
            >
              <div>
                <h3 className="font-inter font-semibold text-2xl text-charcoal mb-2 tracking-tight">
                  We're Here to Help
                </h3>
                <p className="font-inter text-charcoal/70 leading-relaxed">
                  Whether you're curious about our services, seeking guidance
                  for your life's path, or have feedback to share, we welcome
                  your message. Our team is committed to providing you with a
                  clear and thoughtful response.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-saffron/85 rounded-full flex items-center justify-center mr-4">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-charcoal">
                      Email Us
                    </h4>
                    <p className="font-inter text-charcoal/70">
                      hello@kundlee.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center mr-4">
                    <BsChatLeftDots className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-charcoal">
                      Response Time
                    </h4>
                    <p className="font-inter text-charcoal/70">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-border rounded-[20px] rounded-b-[40px] p-4 shadow-elegant"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-inter text-sm font-medium text-charcoal mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <UserCircleIcon className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal/50" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron transition-colors duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-inter text-sm font-medium text-charcoal mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal/50" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron transition-colors duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Feedback Field */}
                  <div>
                    <label
                      htmlFor="feedback"
                      className="block font-inter text-sm font-medium text-charcoal mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="feedback"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron transition-colors duration-200 resize-none"
                      placeholder="Tell us how we can help you ..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group w-full bg-teal text-white font-inter font-medium py-3 px-6 rounded-full transition-all duration-300 hover:bg-teal-dark focus:ring-4 focus:ring-teal/20 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <PaperAirplaneIcon className="h-6 w-6" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-larken text-xl font-bold text-charcoal mb-2 uppercase">
                    Message Sent!
                  </h3>
                  <p className="font-inter text-charcoal/70">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
