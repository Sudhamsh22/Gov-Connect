import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Login from "./pages/Login";
import {Register}  from "./pages/Register";
import NotFound from "./pages/NotFound";
import CitizenServices from "./pages/CitizenServices";
import DepartmentServices from './pages/DepartmentServices';

const queryClient = new QueryClient();

const App = () => {
  const [userType, setUserType] = useState<'Citizen' | 'Department' | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login onLoginSuccess={setUserType} />} />
            <Route path="/register" element={<Register />} />

            <Route 
              path="/CitizenServices" 
              element={
                userType === 'Citizen' 
                  ? <CitizenServices /> 
                  : <Navigate to="/login" replace />
              } 
            />
            
            <Route 
              path="/DepartmentServices" 
              element={
                userType === 'Department' 
                  ? <DepartmentServices /> 
                  : <Navigate to="/login" replace />
              } 
            />
            
            <Route path="/CitizenServices" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
