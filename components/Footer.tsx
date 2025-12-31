import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 gold-gradient flex items-center justify-center rounded-sm rotate-45">
               <span className="text-black font-serif font-bold text-sm -rotate-45">S</span>
            </div>
            <span className="text-lg font-serif font-semibold tracking-wider text-primary">
              SHARIAH<span className="text-white">COMPLIANCE</span>
            </span>
          </Link>
          <p className="text-muted text-sm leading-relaxed max-w-xs">
            Empowering businesses with bespoke Shariah-compliant financial and operational frameworks.
          </p>
        </div>

        <div>
          <h4 className="text-white font-serif font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-serif font-semibold mb-6">Services</h4>
           <ul className="space-y-3 text-sm text-muted">
             <li>Shariah Advisory</li>
             <li>Compliance Audit</li>
             <li>Ethical Investing</li>
             <li>Financial Structuring</li>
           </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-semibold mb-6">Connect</h4>
          <p className="text-muted text-sm mb-4">
            Suite 500, Corporate Plaza<br />
            Business District, DXB
          </p>
          <p className="text-primary text-sm font-semibold">
            info@shariahsolutions.com
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted gap-4">
        <p>© 2025 Shariah Compliance Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
