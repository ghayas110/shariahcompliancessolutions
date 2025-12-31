"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 border-b border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Reach Out</h1>
          <p className="text-xl text-primary font-serif italic">Let&apos;s discuss your journey towards ethical excellence.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          {/* Info Side */}
          <div className="flex-1 space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-semibold text-white mb-8">Our Headquarters</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 glass rounded-sm text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-medium mb-1">Office Location</h4>
                    <p className="text-muted text-sm leading-relaxed">
                      Suite 500, Corporate Plaza, Financial Center Road<br />
                      Business Bay, Dubai, UAE
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 glass rounded-sm text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-medium mb-1">Direct Line</h4>
                    <p className="text-muted text-sm">+971 4 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 glass rounded-sm text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-medium mb-1">Email Inquiries</h4>
                    <p className="text-muted text-sm font-semibold text-primary">advisory@shariahsolutions.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 glass border-primary/20 bg-primary/5">
              <h3 className="text-xl font-serif font-semibold text-white mb-4">Advisory Hours</h3>
              <div className="space-y-2 text-sm text-muted">
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Monday — Friday</span>
                  <span>9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Saturday</span>
                  <span>10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between text-primary font-bold pt-2">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-[1.5]">
            <div className="p-10 glass border-border relative overflow-hidden">
               {submitted ? (
                 <div className="absolute inset-0 bg-background/90 z-20 flex flex-center items-center justify-center p-12 text-center flex-col space-y-6">
                    <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center text-primary-foreground animate-bounce">
                       <Send size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-serif font-bold text-white mb-2">Message Sent</h2>
                      <p className="text-muted">A senior consultant will review your inquiry and reach back within 24 hours.</p>
                    </div>
                 </div>
               ) : null}

              <h2 className="text-3xl font-serif font-semibold text-white mb-8">Consultation Request</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-border p-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold">Inquiry Type</label>
                  <select className="w-full bg-white/5 border border-border p-4 text-white focus:border-primary focus:outline-none transition-colors appearance-none">
                    <option className="bg-[#1a1a1a]">Compliance Audit</option>
                    <option className="bg-[#1a1a1a]">Shariah Advisory</option>
                    <option className="bg-[#1a1a1a]">Financial Structuring</option>
                    <option className="bg-[#1a1a1a]">General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold">Email Address</label>
                  <input required type="email" className="w-full bg-white/5 border border-border p-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="email@example.com" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold">Your Message</label>
                  <textarea required rows={5} className="w-full bg-white/5 border border-border p-4 text-white focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Describe your business needs..."></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="w-full py-5 gold-gradient text-primary-foreground font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all">
                    Initialize Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AnimatedSection className="py-24 px-6 bg-secondary/30 border-t border-border">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-serif font-semibold text-white mb-12 text-center">Frequently Asked Questions</h2>
           <div className="space-y-6">
             {[
               { q: "How long does a typical Shariah audit take?", a: "Depending on the complexity, a standard corporate audit ranges from 2 to 4 weeks." },
               { q: "Are your consultants certified in Islamic Finance?", a: "Yes, all our advisors hold advanced degrees and certifications from internationally recognized councils." },
               { q: "Do you offer remote advisory services?", a: "We provide both on-site evaluations at your headquarters and comprehensive remote consulting globally." }
             ].map((faq, i) => (
                <div key={i} className="p-6 glass border-border hover:border-primary/30 transition-colors group">
                   <h4 className="text-white font-serif font-medium mb-2 flex items-center gap-3">
                      <MessageCircle size={18} className="text-primary" /> {faq.q}
                   </h4>
                   <p className="text-muted text-sm leading-relaxed pl-7">{faq.a}</p>
                </div>
             ))}
           </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
