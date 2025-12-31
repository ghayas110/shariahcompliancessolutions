"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, Globe, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Unwavering Integrity",
    description: "Our solutions are anchored in the highest standards of Shariah ethical principles."
  },
  {
    icon: <Scale className="w-8 h-8 text-primary" />,
    title: "Rigorous Compliance",
    description: "We ensure every facet of your business aligns with complex regulatory and Shariah frameworks."
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Global Excellence",
    description: "Bridging the gap between traditional ethics and modern global business standards."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Professional Business Meeting"
            fill
            className="object-cover opacity-40 grayscale-[0.5]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8"
          >
            Pioneering <span className="text-primary italic">Ethical</span> <br />
            Corporate Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12 font-light"
          >
            Bespoke Shariah Compliance and Business Consulting solutions for forward-thinking enterprises.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Link
              href="/services"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-accent transition-all duration-300"
            >
              Our Solutions
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/20 hover:border-primary text-white font-semibold rounded-sm backdrop-blur-sm transition-all duration-300"
            >
              Consult an Expert
            </Link>
          </motion.div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary/50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <AnimatedSection className="py-24 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-white">Our Core Principles</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 glass hover:border-primary/50 transition-colors group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {v.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-white">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Preview Section */}
      <AnimatedSection className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8 text-white leading-tight">
              Bespoke Advisory <br />
              <span className="text-primary italic">Tailored</span> for You
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              We provide end-to-end Shariah advisory services, from initial structuring to ongoing compliance audits, ensuring your business remains competitive and ethically sound.
            </p>
            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all group">
              Explore All Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-white/5 rounded-sm p-8 flex flex-col justify-center border border-white/10 hover:border-primary/30 transition-colors">
              <span className="text-primary font-serif font-bold text-3xl mb-2">01</span>
              <h4 className="text-white font-medium">Compliance Audit</h4>
            </div>
            <div className="aspect-square bg-white/5 rounded-sm p-8 mt-8 flex flex-col justify-center border border-white/10 hover:border-primary/30 transition-colors">
              <span className="text-primary font-serif font-bold text-3xl mb-2">02</span>
              <h4 className="text-white font-medium">Asset Management</h4>
            </div>
            <div className="aspect-square bg-white/5 rounded-sm p-8 -mt-8 flex flex-col justify-center border border-white/10 hover:border-primary/30 transition-colors">
              <span className="text-primary font-serif font-bold text-3xl mb-2">03</span>
              <h4 className="text-white font-medium">Legal Structuring</h4>
            </div>
            <div className="aspect-square bg-white/5 rounded-sm p-8 flex flex-col justify-center border border-white/10 hover:border-primary/30 transition-colors">
              <span className="text-primary font-serif font-bold text-3xl mb-2">04</span>
              <h4 className="text-white font-medium">Shariah Council</h4>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
