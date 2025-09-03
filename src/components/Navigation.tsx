import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 h-8 w-8 text-accent animate-ping opacity-20">
                <Shield className="h-full w-full" />
              </div>
            </div>
            <span className="text-xl font-bold text-gradient">
              Sentinel FinGuard
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#scan" className="text-foreground hover:text-primary transition-colors">
              Fraud Scanner
            </a>
            <a href="#reports" className="text-foreground hover:text-primary transition-colors">
              Reports
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Sign In
            </Button>
            <Button className="btn-hero">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#home" className="block text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#scan" className="block text-foreground hover:text-primary transition-colors">
              Fraud Scanner
            </a>
            <a href="#reports" className="block text-foreground hover:text-primary transition-colors">
              Reports
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">
              About
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Sign In
              </Button>
              <Button className="w-full btn-hero">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;