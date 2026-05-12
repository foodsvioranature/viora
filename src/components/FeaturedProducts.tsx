import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Eye } from "lucide-react";
import { products, buildWhatsAppLink, Product } from "@/data/products";
import ProductDetailModal from "./ProductDetailModal";

const FeaturedProducts = () => {
  const [selected, setSelected] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);

  const openModal = (p: Product) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <section id="products" className="section-spacing">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Our Range
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Featured Products
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Two pure expressions of mustard — crafted with care in every drop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 * i}s` }}
            >
              <button
                onClick={() => openModal(p)}
                className="relative overflow-hidden bg-gradient-to-b from-cream/40 to-muted aspect-[4/5] w-full block"
                aria-label={`View ${p.name} details`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-contain p-6 group-hover:opacity-0 transition-opacity duration-500"
                  loading="lazy"
                />
                {p.images?.[1] && (
                  <img
                    src={p.images[1]}
                    alt=""
                    aria-hidden
                    loading="lazy"
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
      </div>

      <ProductDetailModal product={selected} open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default FeaturedProducts;
