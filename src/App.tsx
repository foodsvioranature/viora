import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ComingSoon = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-background">
    <Header />
    {/* Dark bar to sit behind the transparent header */}
    <div className="bg-secondary pt-32 pb-16 text-center">
      <h1 className="font-heading text-4xl font-bold text-primary-foreground">{title}</h1>
    </div>
    <div className="flex flex-col items-center justify-center py-20 text-center px-4">
      <p className="mb-6 text-xl text-muted-foreground font-body">This page is coming soon.</p>
      <a href="/">
        <button className="bg-gradient-gold text-secondary font-semibold font-body px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
          Return to Home
        </button>
      </a>
    </div>
    <Footer />
  </div>
);
const App = () => {
  const renderRoute = () => {
    const path = window.location.pathname || "/";
    if (path === "/") return <Index />;
    if (path === "/shop") return <Shop />;
    if (path === "/privacy-policy") return <ComingSoon title="Privacy Policy" />;
    if (path === "/refund-policy") return <ComingSoon title="Refund Policy" />;
    if (path === "/terms") return <ComingSoon title="Terms & Conditions" />;
    if (path === "/shipping-policy") return <ComingSoon title="Shipping Policy" />;
    return <NotFound />;
  };

  return (
    <TooltipProvider>
      <Toaster />
      {renderRoute()}
    </TooltipProvider>
  );
};

export default App;