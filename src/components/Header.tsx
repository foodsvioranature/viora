import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products" },
    { label: "Our Process", href: "/#process" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-elevated py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-primary-foreground">
            VIORA
          </span>
          <span className="hidden sm:block text-xs font-body uppercase tracking-[0.3em] text-primary-foreground/70">
            Nature Foods
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body font-medium text-primary-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a href="/shop">
            <Button variant="default" size="sm" className="bg-gradient-gold text-secondary font-semibold hover:opacity-90 transition-opacity hidden sm:flex items-center gap-2 rounded-lg">
              <ShoppingBag className="h-4 w-4" />
              Enter Marketplace
            </Button>
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-secondary/95 backdrop-blur-md border-t border-primary/20 animate-fade-in">
          <nav className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary font-medium tracking-wide uppercase text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="/shop" onClick={() => setMenuOpen(false)}>
              <Button variant="default" className="bg-gradient-gold text-secondary font-semibold w-full mt-2 rounded-lg">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Enter Marketplace
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
