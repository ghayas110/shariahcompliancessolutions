"use client";

import AnimatedSection from "@/components/AnimatedSection";

const team = [
  { name: "Suleman Ahmed", role: "Principal Consultant", specialty: "Shariah Governance" },
  { name: "Fatima Khan", role: "Senior Advisor", specialty: "Financial Structuring" },
  { name: "Ibrahim Malik", role: "Compliance Lead", specialty: "Audit & Risk" }
];

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 border-b border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Our Legacy</h1>
          <p className="text-xl text-primary font-serif italic">Dedication to Ethics, Excellence, and Expertise.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-serif font-semibold text-white mb-6">Our Mission</h2>
            <p className="text-muted text-lg leading-relaxed">
              To provide businesses with robust Shariah-compliant frameworks that not only meet ethical requirements but also drive professional excellence and competitive advantage in the global market.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-semibold text-white mb-6">Our Vision</h2>
            <p className="text-muted text-lg leading-relaxed">
              To be the world&apos;s most trusted partner for Shariah business solutions, bridging the gap between centuries-old ethical principles and modern commercial landscapes.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Professional Values */}
      <AnimatedSection className="py-24 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-serif font-semibold text-white">A Commitment to <span className="text-primary italic">Precision</span></h2>
              <p className="text-muted leading-relaxed">
                Founded by experts in both Islamic Law and Modern Finance, Shariah Compliance Solutions understands the nuances of operating a global business while maintaining religious integrity. 
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-primary font-bold text-3xl mb-1">15+</h4>
                  <p className="text-xs uppercase tracking-widest text-muted">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-3xl mb-1">200+</h4>
                  <p className="text-xs uppercase tracking-widest text-muted">Corporates Advised</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-video glass relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                  <span className="text-white/20 font-serif text-8xl font-bold select-none italic">ETHICS</span>
               </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Preview */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold text-white mb-16 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 bg-white/5 rounded-full border border-border group-hover:border-primary transition-colors flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 gold-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
                   <span className="text-primary font-serif text-4xl font-bold">{member.name[0]}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted text-xs uppercase tracking-widest">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
