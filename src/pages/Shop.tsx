import { useState } from "react";
import { ShoppingBag, Eye, ShieldCheck, Truck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductDetailModal from "@/components/ProductDetailModal";
import { products, buildWhatsAppLink, Product } from "@/data/products";

const Shop = () => {
  const [selected, setSelected] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);

  const openModal = (p: Product) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-secondary/95 pt-32 pb-16 text-center text-primary-foreground">
        <div className="section-container">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Marketplace
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            Shop Viora Mustard Oil
          </h1>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
          <p className="font-body text-primary-foreground/70 mt-5 max-w-xl mx-auto">
            Order directly from the manufacturer. Pure, cold pressed and delivered fresh from our Kanpur facility.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 text-xs md:text-sm font-body">
            <span className="flex items-center gap-2 text-primary-foreground/80">
              <ShieldCheck className="h-4 w-4 text-primary" /> FSSAI Certified
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/80">
              <Leaf className="h-4 w-4 text-primary" /> 100% Pure
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/80">
              <Truck className="h-4 w-4 text-primary" /> Pan-India Delivery
            </span>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((p, i) => (
              <div
                key={p.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.15 * i}s` }}
              >
                <button
                  onClick={() => openModal(p)}
                  className="relative overflow-hidden bg-gradient-to-b from-cream/40 to-muted aspect-[4/5] w-full block"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-contain p-6 group-hover:opacity-0 transition-opacity duration-500"
                  />
                  {p.images?.[1] && (
                    <img
                      src={p.images[1]}
                      alt=""
                      aria-hidden
                      className="absolute inset-0 w-full h-full object-contain p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  )}
                  <span className="absolute top-4 left-4 bg-gradient-gold text-secondary font-body text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase z-10">
                    {p.tag}
                  </span>
                  {p.images?.length > 1 && (
                    <span className="absolute top-4 right-4 bg-secondary/85 text-primary text-[11px] font-body font-semibold px-2.5 py-1 rounded-full z-10">
                      +{p.images.length} photos
                    </span>
                  )}
                  <span className="absolute bottom-4 right-4 bg-secondary/90 text-primary text-xs font-body font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <Eye className="h-3.5 w-3.5" /> Quick View
                  </span>
                </button>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2 gap-3">
                    <h3 className="font-heading text-xl font-semibold text-foreground leading-tight">
                      {p.name}
                    </h3>
                    <span className="text-primary font-heading font-bold text-lg whitespace-nowrap">
                      {p.price}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{p.size}</p>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                    {p.shortDesc}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => openModal(p)}
                      className="flex-1 border-primary/40 text-secondary hover:bg-primary/10"
                    >
                      Details
                    </Button>
                    <a
                      href={buildWhatsAppLink(p)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Buy Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Help strip */}
          <div className="mt-16 max-w-3xl mx-auto bg-card border border-primary/20 rounded-2xl p-8 text-center shadow-card">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
              Need bulk orders or have questions?
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Reach out directly on WhatsApp — we usually reply within minutes.
            </p>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-gold text-secondary font-semibold hover:opacity-90">
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <ProductDetailModal product={selected} open={open} onOpenChange={setOpen} />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Shop;