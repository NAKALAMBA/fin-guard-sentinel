import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Shield, AlertTriangle } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Shield,
      value: "10,000+",
      label: "Advisors Verified",
      description: "SEBI registered advisors in our database",
      color: "text-primary"
    },
    {
      icon: AlertTriangle,
      value: "2,847",
      label: "Frauds Detected",
      description: "Suspicious activities flagged this month",
      color: "text-destructive"
    },
    {
      icon: Users,
      value: "50,000+",
      label: "Protected Investors",
      description: "Users actively using our platform",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      value: "98.5%",
      label: "Accuracy Rate",
      description: "AI fraud detection accuracy",
      color: "text-success"
    }
  ];

  return (
    <section className="smooth-section py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Protecting India's <span className="text-gradient">Financial Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time statistics from our AI-powered fraud detection platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-glass hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="mb-6 relative z-10">
                  <stat.icon className={`h-16 w-16 mx-auto ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="space-y-3 relative z-10">
                  <p className="text-4xl font-bold text-gradient">{stat.value}</p>
                  <p className="font-semibold text-foreground text-lg">{stat.label}</p>
                  <p className="text-muted-foreground leading-relaxed">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary font-semibold mr-2">●</span>
            <span className="text-foreground">Real-time data updated every 5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;