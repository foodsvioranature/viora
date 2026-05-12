import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

const App = () => {
  const renderRoute = () => {
    const path = window.location.pathname || "/";
    if (path === "/") return <Index />;
    if (path === "/shop") return <Shop />;
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
