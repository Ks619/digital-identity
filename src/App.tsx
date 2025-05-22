
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HeartDiseaseMl from "./pages/projects/HeartDiseaseMl";
import LanguageCompiler from "./pages/projects/LanguageCompiler";
import About from "./pages/About";
import Recommendations from "./pages/Recommendations";
import NotFound from "./pages/NotFound";
import PythonDataScience from "./pages/courses/PythonDataScience";
import DevOpsDockerKubernetes from "./pages/courses/DevOpsDockerKubernetes";
import PythonComputerVision from "./pages/courses/PythonComputerVision";
import QALead from "./pages/work/QALead";
import AutomationDeveloper from "./pages/work/AutomationDeveloper";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/digital-identity">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work/qa-lead" element={<QALead />} />
          <Route path="/work/automation-developer" element={<AutomationDeveloper />} />
          <Route path="/projects/heart-disease-ml" element={<HeartDiseaseMl />} />
          <Route path="/projects/language-compiler" element={<LanguageCompiler />} />
          <Route path="/courses/python-data-science" element={<PythonDataScience />} />
          <Route path="/courses/devops-docker-kubernetes" element={<DevOpsDockerKubernetes />} />
          <Route path="/courses/python-computer-vision" element={<PythonComputerVision />} />
          <Route path="/about" element={<About />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
