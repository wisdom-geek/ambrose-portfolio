// import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NoiseOverlay from "./components/NoiseOverlay";
import Spotlight from "./components/Spotlight";
import ScrollProgress from "./components/ScrollProgress";
import CursorFollower from "./components/CursorFollower";
import { Toaster } from "react-hot-toast";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <div className="relative min-h-screen bg-[#030712] text-zinc-100 overflow-x-hidden">
            <NoiseOverlay />
            <Spotlight />
            <CursorFollower />
            <ScrollProgress />
            <Toaster />
            <Router />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
