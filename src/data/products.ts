import productBlackStudio from "@/assets/product-black-studio.png";
import productBlackLabel from "@/assets/product-black-label.png";
import productYellowStudio from "@/assets/product-yellow-studio.png";
import productYellowReal from "@/assets/product-yellow-real.png";
import productDuoReal from "@/assets/product-duo-real.png";

export const WHATSAPP_NUMBER = "919648793434"; // +91 96487 93434

export type Product = {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  images: string[];
  size: string;
  price: string;
  tag: string;
  highlights: string[];
  uses: string[];
};

export const products: Product[] = [
  {
    id: "black-1l",
    name: "Cold Pressed Black Mustard Oil",
    shortDesc:
      "Bold pungency and traditional aroma — extracted slowly from premium black mustard seeds. Perfect for authentic Indian cooking, pickles, and tadka.",
    longDesc:
      "Our Cold Pressed Black Mustard Oil is crafted in small batches using the traditional kachi ghani method at low temperatures, preserving its natural pungency, deep golden colour and signature aroma. Sourced from carefully selected black mustard seeds and filtered without any chemicals, it retains all its natural antioxidants, Omega-3 and Omega-6 fatty acids.",
    image: productBlackStudio,
    images: [
      productBlackStudio,
      productBlackLabel,
      productDuoReal,
    ],
    size: "1 Litre",
    price: "₹250",
    tag: "Best Seller",
    highlights: [
      "100% pure & unrefined",
      "Cold pressed (kachi ghani)",
      "No chemicals or preservatives",
      "Rich in Omega-3 & Omega-6",
      "FSSAI certified",
    ],
    uses: [
      "Authentic Indian cooking & tadka",
      "Pickles and traditional preparations",
      "Body & hair massage",
      "Oil pulling",
    ],
  },
  {
    id: "yellow-1l",
    name: "Cold Pressed Yellow Mustard Oil",
    shortDesc:
      "Lighter, milder and golden — ideal for everyday cooking, salad dressings and massage. Naturally extracted with all nutrients retained.",
    longDesc:
      "Our Cold Pressed Yellow Mustard Oil is a lighter, milder alternative to traditional black mustard oil. Extracted from premium yellow mustard seeds using the cold press method, it delivers a smooth flavour with a beautiful golden hue. Ideal for everyday cooking and wellness use.",
    image: productYellowStudio,
    images: [
      productYellowStudio,
      productYellowReal,
      productDuoReal,
    ],
    size: "1 Litre",
    price: "₹320",
    tag: "New Arrival",
    highlights: [
      "100% pure & unrefined",
      "Mild, smooth flavour",
      "Cold pressed for nutrient retention",
      "Naturally golden colour",
      "FSSAI certified",
    ],
    uses: [
      "Everyday Indian cooking",
      "Salad dressings & marinades",
      "Skin & hair massage",
      "Healthier daily use",
    ],
  },
];

export const buildWhatsAppLink = (product?: Product) => {
  const text = product
    ? `Hi Viora Nature Foods! 👋\n\nI would like to order:\n• ${product.name} (${product.size})\n\nPlease share payment & delivery details. Thank you!`
    : `Hi Viora Nature Foods! 👋\n\nI'm interested in your cold pressed mustard oil. Please share product, pricing and delivery details. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
