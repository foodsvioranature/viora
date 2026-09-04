import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/data/products";

const WhatsAppButton = () => {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-[hsl(0,0%,100%)] flex items-center justify-center shadow-elevated transition-all duration-300 hover:scale-110 animate-fade-up"
      style={{ animationDelay: "1.5s" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
