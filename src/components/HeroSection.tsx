import { ArrowRight, Shield, Zap, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-security.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI-powered financial security" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20"></div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/30 to-accent/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-r from-accent/20 to-primary-glow/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-success/30 to-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-primary-glow/40 to-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full">
            <span className="text-accent font-semibold text-sm mr-2">NEW</span>
            <span className="text-foreground text-sm">AI-Powered Fraud Detection</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Protect Your
            <br />
            <span className="text-gradient">Financial Future</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Advanced AI technology that detects investment frauds, verifies advisors, and safeguards your money in real-time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="btn-hero text-lg px-8 py-6">
              Start Free Scan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Watch Demo
            </Button>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="card-glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Advisor Verification</h3>
              <p className="text-muted-foreground text-sm">
                Instantly verify SEBI registration and credentials
              </p>
            </div>
            <div className="card-glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Real-time Detection</h3>
              <p className="text-muted-foreground text-sm">
                AI algorithms spot fraud patterns instantly
              </p>
            </div>
            <div className="card-glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <Eye className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Risk Assessment</h3>
              <p className="text-muted-foreground text-sm">
                Get detailed risk scores and explanations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;