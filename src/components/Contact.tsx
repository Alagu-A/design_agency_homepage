'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please write your project description';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field when typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-50 dark:bg-[#0f1526] border-t border-slate-200/50 dark:border-slate-850/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5" data-aos="fade-right" data-aos-duration="800">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
              Contact Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Let's Create Something Dynamic Together
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Have an idea or a project in mind? We'd love to chat. Reach out and our team will get back to you within 24 hours to schedule a consultation.
            </p>

            <div className="space-y-6">
              {/* Info Item 1 */}
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-xl bg-white dark:bg-[#0b0f19] border border-slate-200/50 dark:border-slate-800/40 shadow-sm flex items-center justify-center text-indigo-500 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Email Address</h4>
                  <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">hello@aura.agency</p>
                </div>
              </div>

              {/* Info Item 2 */}
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-xl bg-white dark:bg-[#0b0f19] border border-slate-200/50 dark:border-slate-800/40 shadow-sm flex items-center justify-center text-indigo-500 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Office HQ</h4>
                  <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    100 Innovation Way, Suite 400<br />San Francisco, CA 94107
                  </p>
                </div>
              </div>

              {/* Info Item 3 */}
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-xl bg-white dark:bg-[#0b0f19] border border-slate-200/50 dark:border-slate-800/40 shadow-sm flex items-center justify-center text-indigo-500 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Working Hours</h4>
                  <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">Mon – Fri, 9:00 AM – 6:00 PM PST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
            <div className="p-8 md:p-10 rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200/60 dark:border-slate-800/40 shadow-xl relative overflow-hidden">
              {/* Form submit success overlay */}
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-16 animate-fade-in">
                  <CheckCircle className="h-16 w-16 text-emerald-500 mb-6 animate-scale-up" />
                  <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-8 leading-relaxed">
                    Thank you for reaching out! Our creative team is already reviewing your request and will contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-350 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`px-4 py-3.5 rounded-xl border bg-slate-50/50 dark:bg-slate-900/30 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-250 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <span className="text-xs text-red-500 flex items-center mt-1">
                          <AlertCircle className="h-3.5 w-3.5 mr-1" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`px-4 py-3.5 rounded-xl border bg-slate-50/50 dark:bg-slate-900/30 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-250 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500 flex items-center mt-1">
                          <AlertCircle className="h-3.5 w-3.5 mr-1" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="px-4 py-3.5 rounded-xl border border-slate-250 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-500 transition-all"
                      placeholder="Project Inquiry / Partnership"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`px-4 py-3.5 rounded-xl border bg-slate-50/50 dark:bg-slate-900/30 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-250 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500'
                      }`}
                      placeholder="Tell us about your project requirements..."
                    />
                    {errors.message && (
                      <span className="text-xs text-red-500 flex items-center mt-1">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm hover:from-indigo-600 hover:to-purple-700 disabled:opacity-75 transition-all duration-300 shadow-md shadow-indigo-500/10 dark:shadow-indigo-950/20 hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Submitting Proposal...
                      </>
                    ) : (
                      <>
                        <Send className="h-4.5 w-4.5 mr-2" />
                        Send Proposal
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
