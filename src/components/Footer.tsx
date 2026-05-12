import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">VIORA</h3>
            <p className="font-body text-secondary-foreground/70 text-sm leading-relaxed mb-4">
              Viora Nature Foods — Manufacturing purity, delivering trust. Premium cold pressed black mustard oil from Kanpur.
            </p>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 96487 93434</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@vioranaturefoods.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Plot No. 44, Upper LIG Block C, Phase-1, Tatya Tope Nagar, Kanpur</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-secondary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm text-secondary-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/shop" className="hover:text-primary transition-colors">Marketplace</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-secondary-foreground mb-4">Policies</h4>
            <ul className="space-y-2 font-body text-sm text-secondary-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-secondary-foreground mb-4">Certifications</h4>
            <ul className="space-y-2 font-body text-sm text-secondary-foreground/70">
              <li>FSSAI: 12725052000613</li>
              <li>GST Registered</li>
              <li>Lab Tested & Certified</li>
            </ul>
            <div className="mt-6">
              <h4 className="font-heading text-lg font-semibold text-secondary-foreground mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "YouTube"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 hover:bg-primary hover:text-secondary transition-colors text-xs font-bold"
                  >
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-secondary-foreground/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-secondary-foreground/50 font-body">
          <span>© 2026 Viora Nature Foods. All Rights Reserved.</span>
          <span>Made with care in Kanpur, India 🇮🇳</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
