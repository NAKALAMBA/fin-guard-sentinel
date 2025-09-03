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
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Protecting India's <span className="text-gradient">Financial Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time statistics from our AI-powered fraud detection platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="card-glass hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <stat.icon className={`h-12 w-12 mx-auto ${stat.color}`} />
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
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