import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { SiteDataProvider } from "@/contexts/SiteDataContext";
import Index from "./pages/Index.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminRoute from "./pages/AdminRoute.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleDone = useCallback(() => setLoading(false), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SiteDataProvider>
          <Toaster />
          <Sonner />
          <CustomCursor />
          {loading && <LoadingScreen onDone={handleDone} />}
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/admin" element={<AdminRoute />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Analytics />
          <SpeedInsights />
        </SiteDataProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
