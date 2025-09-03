import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Shield, Mail, Phone, MapPin, Users, Brain, Zap, 
  CheckCircle, Award, TrendingUp, Send 
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Technology Officer",
      expertise: "AI & Machine Learning",
      description: "15+ years in fintech AI development"
    },
    {
      name: "Priya Sharma",
      role: "Head of Security",
      expertise: "Cybersecurity & Fraud Detection",
      description: "Former SEBI investigation officer"
    },
    {
      name: "Amit Patel",
      role: "Lead Data Scientist",
      expertise: "NLP & Fraud Patterns",
      description: "PhD in Financial Crime Analytics"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Technology",
      description: "State-of-the-art machine learning algorithms trained on millions of fraud cases"
    },
    {
      icon: Shield,
      title: "SEBI Integration",
      description: "Real-time verification against official regulatory databases"
    },
    {
      icon: Zap,
      title: "Real-time Detection",
      description: "Instant analysis and alerting system for immediate protection"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Crowd-sourced fraud reporting and verification network"
    }
  ];

  const achievements = [
    { icon: CheckCircle, stat: "50,000+", label: "Users Protected" },
    { icon: Shield, stat: "₹24.5 Cr", label: "Money Saved" },
    { icon: TrendingUp, stat: "98.5%", label: "Detection Accuracy" },
    { icon: Award, stat: "2,847", label: "Frauds Prevented" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Sentinel FinGuard</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to protect India's financial ecosystem through cutting-edge AI technology, 
              empowering every investor with the tools to identify and avoid investment fraud.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize fraud detection by making advanced AI-powered security accessible to every Indian investor, 
                  regardless of their financial knowledge or investment size. We believe in creating a safer, more transparent 
                  financial ecosystem for all.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted platform for investment fraud prevention, setting the global standard 
                  for AI-powered financial security. We envision a future where investment fraud becomes virtually impossible 
                  through our technology.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our <span className="text-gradient">Impact</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-glass text-center">
                  <CardContent className="p-6">
                    <achievement.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-gradient mb-2">{achievement.stat}</div>
                    <p className="text-muted-foreground">{achievement.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="card-glass">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="card-glass text-center">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-accent mb-3">{member.expertise}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology */}
          <div className="mb-16">
            <Card className="card-glass">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">
                  Our <span className="text-gradient">Technology</span>
                </CardTitle>
                <CardDescription className="text-lg">
                  Powered by cutting-edge AI and machine learning
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">AI-Powered Detection</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Natural Language Processing for content analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Computer vision for deepfake detection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Pattern recognition for fraud schemes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Real-time risk scoring algorithms
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      SEBI regulatory database integration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      End-to-end encryption for user data
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      ISO 27001 certified security practices
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Anonymous reporting capabilities
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Get in Touch
                </CardTitle>
                <CardDescription>
                  Have questions? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-24" />
                  </div>
                  <Button className="w-full btn-hero">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">support@sentinelfinguard.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+91 1800-SENTINEL</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted-foreground">
                        BKC, Mumbai, Maharashtra<br />
                        India 400051
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glass">
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/scan" className="block text-primary hover:underline">
                    Try Fraud Scanner
                  </Link>
                  <Link to="/reports" className="block text-primary hover:underline">
                    View Reports
                  </Link>
                  <Link to="/dashboard" className="block text-primary hover:underline">
                    User Dashboard
                  </Link>
                  <Link to="/login" className="block text-primary hover:underline">
                    Sign In / Register
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;