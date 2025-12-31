"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    text: "Shariah Compliance Solutions transformed our financial operations. Their expertise in both global finance and Shariah law is unparalleled. We now operate with full confidence in our ethical standing.",
    author: "Ziad Al-Khouri",
    company: "Capital Trust UAE",
    rating: 5,
  },
  {
    text: "A truly professional experience. Their consultants didn't just provide a report; they stayed with us through the entire implementation phase. Highly recommended for any corporate looking for integrity.",
    author: "Omar Bin Salem",
    company: "Qasid Financial Group",
    rating: 5,
  },
  {
    text: "The most comprehensive Shariah audit we have ever undergone. Precision, punctuality, and deep knowledge are what define this team. They are the gold standard in the industry.",
    author: "Amina Jaber",
    company: "Global Ethical Inv.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 border-b border-border bg-secondary/30 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Client Stories</h1>
          <p className="text-xl text-primary font-serif italic">Voices of Excellence & Ethical Trust.</p>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto relative px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center space-y-8"
            >
              <Quote className="w-16 h-16 text-primary/20 mx-auto" />
              <div className="flex justify-center gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed italic">
                &quot;{testimonials[activeIndex].text}&quot;
              </p>
              <div>
                <h4 className="text-xl font-serif font-semibold text-primary">{testimonials[activeIndex].author}</h4>
                <p className="text-muted text-sm uppercase tracking-widest">{testimonials[activeIndex].company}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:border-primary transition-colors text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:border-primary transition-colors text-white"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 transition-all duration-300 ${i === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <AnimatedSection className="py-24 px-6 bg-secondary/50 border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl font-serif font-bold text-white">98%</h3>
            <p className="text-xs uppercase tracking-widest text-primary font-bold">Client Retention</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-serif font-bold text-white">500+</h3>
            <p className="text-xs uppercase tracking-widest text-primary font-bold">Successful Audits</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-serif font-bold text-white">$2B+</h3>
            <p className="text-xs uppercase tracking-widest text-primary font-bold">Assets Advised</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-serif font-bold text-white">12</h3>
            <p className="text-xs uppercase tracking-widest text-primary font-bold">Global Awards</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Logos Section */}
      <section className="py-24 px-6 grayscale">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12 opacity-30">
          <div className="text-white font-serif text-2xl font-bold tracking-tighter italic">FINANCE CORP</div>
          <div className="text-white font-serif text-2xl font-bold tracking-tighter italic">AL-AMAN GROUP</div>
          <div className="text-white font-serif text-2xl font-bold tracking-tighter italic">GLOBAL ETHICS</div>
          <div className="text-white font-serif text-2xl font-bold tracking-tighter italic">TRUST BANK</div>
        </div>
      </section>
    </div>
  );
}
