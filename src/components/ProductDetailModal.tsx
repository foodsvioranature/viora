import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Leaf, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { Product, buildWhatsAppLink } from "@/data/products";
import { cn } from "@/lib/utils";

type Props = {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ProductDetailModal = ({ product, open, onOpenChange }: Props) => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (open) setActiveIdx(0);
  }, [open, product?.id]);

  if (!product) return null;

  const gallery = product.images?.length ? product.images : [product.image];
  const next = () => setActiveIdx((i) => (i + 1) % gallery.length);
  const prev = () => setActiveIdx((i) => (i - 1 + gallery.length) % gallery.length);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-primary/20 max-h-[90vh] overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image gallery */}
          <div className="bg-gradient-to-b from-cream/40 to-muted p-4 md:p-6 flex flex-col">
            <div className="relative flex-1 flex items-center justify-center bg-background/40 rounded-xl overflow-hidden aspect-square">
              <img
                src={gallery[activeIdx]}
                alt={`${product.name} — view ${activeIdx + 1}`}
                className="w-full h-full object-contain max-h-[420px] transition-opacity duration-300"
              />
              <span className="absolute top-3 left-3 bg-gradient-gold text-secondary font-body text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                {product.tag}
              </span>
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-secondary/85 text-primary hover:bg-secondary flex items-center justify-center transition"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-secondary/85 text-primary hover:bg-secondary flex items-center justify-center transition"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <span className="absolute bottom-3 right-3 bg-secondary/85 text-primary text-[11px] font-body px-2 py-0.5 rounded-full">
                    {activeIdx + 1} / {gallery.length}
                  </span>
                </>
              )}
            </div>

            {gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-2 mt-3">
                {gallery.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`View image ${i + 1}`}
                    className={cn(
                      "aspect-square rounded-lg overflow-hidden bg-background/60 border transition",
                      i === activeIdx
                        ? "border-primary ring-2 ring-primary/40"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <img src={src} alt="" className="w-full h-full object-contain p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-8">
            <DialogTitle className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {product.name}
            </DialogTitle>
            <div className="flex items-center gap-3 mt-2 mb-4">
              <span className="text-primary font-heading font-bold text-2xl">{product.price}</span>
              <span className="text-muted-foreground text-sm">/ {product.size}</span>
            </div>

            <DialogDescription className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
              {product.longDesc}
            </DialogDescription>

            <div className="mb-4">
              <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                <Leaf className="h-4 w-4 text-primary" /> Highlights
              </h4>
              <ul className="space-y-1.5">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                Best For
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.uses.map((u) => (
                  <span
                    key={u}
                    className="text-xs font-body text-secondary bg-primary/15 border border-primary/30 px-3 py-1 rounded-full"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={buildWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-gradient-gold text-secondary font-semibold hover:opacity-90">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Order on WhatsApp
              </Button>
            </a>
            <p className="text-center text-xs text-muted-foreground mt-2">
              Direct from manufacturer • FSSAI certified
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
