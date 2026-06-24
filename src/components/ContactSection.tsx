import React, { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import {
  EnvelopeIcon,
  UserCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { BsPersonCircle, BsChatLeftDots } from "react-icons/bs";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be under 100 characters")
    .regex(/^[\p{L}\p{M} '.\-]+$/u, "Name contains invalid characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be under 255 characters"),
  feedback: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be under 1000 characters"),
});

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "feedback", string>>>({});

  const FIELD_LIMITS = { name: 100, email: 255, feedback: 1000 } as const;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const limit = FIELD_LIMITS[name as keyof typeof FIELD_LIMITS];
    const next = limit ? value.slice(0, limit) : value;
    setFormData((prev) => ({ ...prev, [name]: next }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof typeof errors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    // TODO: send sanitized payload to backend endpoint when available.
    // Intentionally do NOT log form data — it contains user PII.
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", feedback: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-warm-white relative overflow-hidden scroll-mt-24"
    >
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
          <h2 className="font-larken text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal uppercase">
            Get In Touch
          </h2>
          <p className="font-inter text-sm sm:text-base text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Have any Questions or feedback? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-saffron/85 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-inter font-semibold text-sm sm:text-base text-charcoal">
                      Email Us
                    </h4>
                    <p className="font-inter text-sm text-charcoal/70 break-all">
                      hello@kundlee.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-700 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <BsChatLeftDots className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-inter font-semibold text-sm sm:text-base text-charcoal">
                      Response Time
                    </h4>
                    <p className="font-inter text-sm text-charcoal/70">
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
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
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
                        maxLength={100}
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className="w-full pl-10 pr-4 py-3 sm:py-4 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron transition-colors duration-200 text-sm sm:text-base"
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>
                    )}
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
                        maxLength={255}
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className="w-full pl-10 pr-4 py-3 sm:py-4 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron transition-colors duration-200 text-sm sm:text-base"
                        placeholder="Enter your email address"
                      />
                    </div>
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
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
                      maxLength={1000}
                      aria-invalid={!!errors.feedback}
                      aria-describedby={errors.feedback ? "feedback-error" : undefined}
                      className="w-full px-4 py-3 sm:py-4 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron transition-colors duration-200 resize-none text-sm sm:text-base"
                      placeholder="Tell us how we can help you ..."
                    />
                    <div className="mt-1 flex justify-between text-xs">
                      {errors.feedback ? (
                        <p id="feedback-error" className="text-red-600">{errors.feedback}</p>
                      ) : <span />}
                      <span className="text-charcoal/50">{formData.feedback.length}/1000</span>
                    </div>
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
