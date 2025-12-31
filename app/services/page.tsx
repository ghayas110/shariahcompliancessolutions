"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { 
  ShieldCheck, 
  FileText, 
  Briefcase, 
  TrendingUp, 
  Scale, 
  Users,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Shariah Advisory",
    description: "Expert guidance on ensuring your business operations and financial structures strictly adhere to Shariah principles.",
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Compliance Audit",
    description: "Comprehensive reviews of your corporate workflows and financial statements to verify ethical compliance.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: "Financial Structuring",
    description: "Developing bespoke Sukuk and Islamic financing instruments tailored to your capital requirements.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "Halal Asset Management",
    description: "Strategic investment advisory focused on high-growth, Shariah-compliant asset classes.",
  },
  {
    icon: <Scale className="w-10 h-10 text-primary" />,
    title: "Legal Frameworks",
    description: "Assisting in the drafting of corporate documents and contracts that uphold Islamic ethical standards.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Training & Education",
    description: "Equipping your leadership and staff with the knowledge to maintain internal Shariah governance.",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 border-b border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Our Solutions</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto font-light">
            Bespoke advisory services designed to navigate the complexities of modern business with unwavering ethical integrity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group p-10 glass border-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              
              <div className="mb-8 relative z-10">{service.icon}</div>
              <h3 className="text-2xl font-serif font-semibold text-white mb-4 relative z-10">{service.title}</h3>
              <p className="text-muted leading-relaxed mb-8 relative z-10">{service.description}</p>
              
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Specialty Section */}
      <AnimatedSection className="py-24 px-6 bg-primary/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white italic">&quot;Excellence is not an act, but a habit of compliance.&quot;</h2>
          <p className="text-muted text-lg font-light leading-relaxed">
            We don&apos;t just provide a checklist; we partner with you to instill a culture of ethical excellence. 
            Our consultants are available for both project-based advisory and long-term Shariah Council appointments.
          </p>
          <div className="pt-8">
            <Link 
              href="/contact" 
              className="inline-block px-10 py-4 gold-gradient text-primary-foreground font-bold rounded-sm hover:scale-105 active:scale-95 transition-transform"
            >
              Request a Custom Audit
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
