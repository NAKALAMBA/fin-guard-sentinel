import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, Zap, BarChart3, History, Bell, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();

  const recentScans = [
    { id: 1, content: "Investment advice from advisor...", result: "Low Risk", timestamp: "2 hours ago", score: 15 },
    { id: 2, content: "Crypto trading platform message...", result: "High Risk", timestamp: "1 day ago", score: 85 },
    { id: 3, content: "Stock tip recommendation...", result: "Medium Risk", timestamp: "3 days ago", score: 45 }
  ];

  const stats = [
    { label: "Total Scans", value: "127", icon: Search, color: "text-primary" },
    { label: "Frauds Detected", value: "8", icon: AlertTriangle, color: "text-destructive" },
    { label: "Money Saved", value: "₹2.4L", icon: Shield, color: "text-success" },
    { label: "Risk Score", value: "Low", icon: CheckCircle, color: "text-success" }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="card-glass max-w-md w-full">
          <CardHeader className="text-center">
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>Please log in to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link to="/login">
              <Button className="btn-hero">
                Sign In
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getRiskColor = (level: string) => {
    switch (level) {
      case "High Risk": return "destructive";
      case "Medium Risk": return "warning";
      case "Low Risk": return "success";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Welcome back, <span className="text-gradient">{user?.name}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your fraud protection dashboard
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="card-glass">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Scans */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <History className="h-5 w-5 text-primary" />
                    Recent Scans
                  </CardTitle>
                  <CardDescription>
                    Your latest fraud detection scans
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentScans.map((scan) => (
                    <div key={scan.id} className="border border-border/50 rounded-lg p-4 hover:bg-muted/20 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm text-muted-foreground truncate flex-1 mr-4">
                          {scan.content}
                        </p>
                        <Badge variant={getRiskColor(scan.result) as any}>
                          {scan.result}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{scan.timestamp}</span>
                        <span>Risk Score: {scan.score}/100</span>
                      </div>
                    </div>
                  ))}
                  <Link to="/scan">
                    <Button className="w-full btn-hero">
                      New Scan
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Link to="/scan">
                      <Button variant="outline" className="w-full h-24 flex flex-col gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Search className="h-6 w-6" />
                        <span>Fraud Scan</span>
                      </Button>
                    </Link>
                    <Link to="/reports">
                      <Button variant="outline" className="w-full h-24 flex flex-col gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                        <TrendingUp className="h-6 w-6" />
                        <span>View Reports</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Alerts */}
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-warning" />
                    Security Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                    <p className="text-sm font-semibold text-warning">New Fraud Pattern</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Deepfake videos targeting crypto investors
                    </p>
                  </div>
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <p className="text-sm font-semibold text-destructive">High Risk Area</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Increased Ponzi schemes in Mumbai region
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Protection Level */}
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-success" />
                    Protection Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-3xl font-bold text-success">Excellent</div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-success h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You're well protected against investment fraud
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Analytics */}
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-accent" />
                    This Month
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Scans Performed</span>
                    <span className="font-semibold">32</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Threats Blocked</span>
                    <span className="font-semibold text-destructive">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Money Protected</span>
                    <span className="font-semibold text-success">₹1.2L</span>
                  </div>
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

export default Dashboard;