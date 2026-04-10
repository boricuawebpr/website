import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

import HomePage from "@/pages/home";
import ServiciosPage from "@/pages/servicios";
import PortafolioPage from "@/pages/portafolio";
import PreciosPage from "@/pages/precios";
import ContactoPage from "@/pages/contacto";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/servicios" component={ServiciosPage} />
      <Route path="/portafolio" component={PortafolioPage} />
      <Route path="/precios" component={PreciosPage} />
      <Route path="/contacto" component={ContactoPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-1 w-full">
              <Router />
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
