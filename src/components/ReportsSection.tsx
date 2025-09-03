import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, MapPin, TrendingUp, ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const ReportsSection = () => {
  const recentReports = [
    {
      id: 1,
      type: "Ponzi Scheme",
      location: "Mumbai, Maharashtra",
      riskLevel: "High",
      timestamp: "2 hours ago",
      description: "Fake investment app promising 50% returns in 30 days"
    },
    {
      id: 2,
      type: "Deepfake Video",
      location: "Delhi, NCR",
      riskLevel: "Medium",
      timestamp: "4 hours ago",
      description: "Manipulated celebrity endorsement for crypto scheme"
    },
    {
      id: 3,
      type: "Pump & Dump",
      location: "Bangalore, Karnataka",
      riskLevel: "High",
      timestamp: "6 hours ago",
      description: "Coordinated social media campaign for penny stocks"
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "High": return "destructive";
      case "Medium": return "warning";
      case "Low": return "success";
      default: return "secondary";
    }
  };

  return (
    <section id="reports" className="smooth-section py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Recent Fraud <span className="text-gradient">Reports</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Real-time fraud alerts from across India
          </p>
          <Link to="/reports">
            <Button className="btn-hero">
              View All Reports
              <Eye className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Reports List */}
          <div className="lg:col-span-2 space-y-4">
            {recentReports.map((report) => (
              <Card key={report.id} className="card-glass hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 group">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-warning/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{report.type}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {report.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {report.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge variant={getRiskColor(report.riskLevel) as any}>
                      {report.riskLevel}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {report.description}
                  </p>
                </CardContent>
              </Card>
            ))}
            
            <div className="text-center pt-4">
              <Link to="/reports">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View All Reports
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Report Actions */}
          <div className="space-y-6">
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Report Fraud
                </CardTitle>
                <CardDescription>
                  Help protect others by reporting suspicious activities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/reports">
                  <Button className="w-full btn-hero">
                    Submit Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <div className="text-center text-sm text-muted-foreground">
                  <p>Anonymous reporting available</p>
                  <p className="mt-2">Your identity will be protected</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="text-lg">Live Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Today's Reports</span>
                  <span className="font-bold text-destructive">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">This Week</span>
                  <span className="font-bold text-warning">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">This Month</span>
                  <span className="font-bold text-primary">347</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Money Saved</span>
                    <span className="font-bold text-success">₹2.4 Cr</span>
                  </div>
                </div>
                <Link to="/reports">
                  <Button variant="outline" className="w-full mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    View Analytics
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;