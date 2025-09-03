import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertTriangle, Clock, MapPin, TrendingUp, Filter, Search, 
  FileText, Send, Eye, BarChart3, Users, Shield
} from "lucide-react";

const Reports = () => {
  const [reportFormData, setReportFormData] = useState({
    title: "",
    description: "",
    location: "",
    evidence: "",
    contactInfo: ""
  });

  const fraudReports = [
    {
      id: 1,
      type: "Ponzi Scheme",
      title: "Fake Investment App Promising 50% Returns",
      location: "Mumbai, Maharashtra",
      riskLevel: "High",
      timestamp: "2 hours ago",
      description: "Mobile application claiming to generate 50% returns in 30 days through cryptocurrency trading",
      reporter: "Anonymous",
      status: "Under Investigation"
    },
    {
      id: 2,
      type: "Deepfake Video",
      title: "Manipulated Celebrity Endorsement",
      location: "Delhi, NCR",
      riskLevel: "Medium",
      timestamp: "4 hours ago",
      description: "Deepfake video showing Bollywood celebrity endorsing fraudulent crypto platform",
      reporter: "Verified User",
      status: "Verified"
    },
    {
      id: 3,
      type: "Pump & Dump",
      title: "Coordinated Social Media Campaign",
      location: "Bangalore, Karnataka",
      riskLevel: "High",
      timestamp: "6 hours ago",
      description: "Orchestrated promotion of penny stocks across WhatsApp groups and Telegram channels",
      reporter: "Financial Journalist",
      status: "Action Taken"
    },
    {
      id: 4,
      type: "Fake Advisor",
      title: "Unregistered Investment Advisor",
      location: "Chennai, Tamil Nadu",
      riskLevel: "Medium",
      timestamp: "8 hours ago",
      description: "Individual claiming SEBI certification while operating without proper registration",
      reporter: "Investor",
      status: "Under Review"
    }
  ];

  const analytics = [
    { label: "Total Reports", value: "2,847", change: "+12%", icon: FileText },
    { label: "Active Cases", value: "156", change: "+5%", icon: Eye },
    { label: "Money Saved", value: "₹24.5 Cr", change: "+18%", icon: Shield },
    { label: "Users Protected", value: "50,234", change: "+22%", icon: Users }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "High": return "destructive";
      case "Medium": return "warning";
      case "Low": return "success";
      default: return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Action Taken": return "success";
      case "Verified": return "primary";
      case "Under Investigation": return "warning";
      case "Under Review": return "secondary";
      default: return "secondary";
    }
  };

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle report submission
    console.log("Report submitted:", reportFormData);
    // Reset form
    setReportFormData({
      title: "",
      description: "",
      location: "",
      evidence: "",
      contactInfo: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Fraud <span className="text-gradient">Reports</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Community-driven fraud detection and reporting platform
            </p>
          </div>

          {/* Analytics Dashboard */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {analytics.map((stat, index) => (
              <Card key={index} className="card-glass">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                      <p className="text-xs text-success">{stat.change} this month</p>
                    </div>
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="browse" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="browse">Browse Reports</TabsTrigger>
              <TabsTrigger value="submit">Submit Report</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="browse" className="space-y-6">
              {/* Filters */}
              <Card className="card-glass">
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-semibold">Filters:</span>
                    </div>
                    <Button variant="outline" size="sm">All Reports</Button>
                    <Button variant="outline" size="sm">High Risk</Button>
                    <Button variant="outline" size="sm">Recent</Button>
                    <Button variant="outline" size="sm">Verified</Button>
                    <div className="ml-auto">
                      <Input placeholder="Search reports..." className="w-64" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reports List */}
              <div className="space-y-4">
                {fraudReports.map((report) => (
                  <Card key={report.id} className="card-glass hover:scale-[1.01] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-lg">{report.title}</h3>
                              <Badge variant={getRiskColor(report.riskLevel) as any}>
                                {report.riskLevel}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm mb-2">{report.type}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {report.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {report.timestamp}
                              </span>
                              <span>Reporter: {report.reporter}</span>
                            </div>
                            <p className="text-foreground leading-relaxed">{report.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant={getStatusColor(report.status) as any}>
                            {report.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Load More Reports
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="submit" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Report Form */}
                <Card className="card-glass">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Send className="h-5 w-5 text-primary" />
                      Submit Fraud Report
                    </CardTitle>
                    <CardDescription>
                      Help protect the community by reporting suspicious activities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitReport} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Report Title</Label>
                        <Input
                          id="title"
                          placeholder="Brief description of the fraud"
                          value={reportFormData.title}
                          onChange={(e) => setReportFormData({ ...reportFormData, title: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Detailed Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Provide detailed information about the fraudulent activity..."
                          className="min-h-32"
                          value={reportFormData.description}
                          onChange={(e) => setReportFormData({ ...reportFormData, description: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          placeholder="City, State"
                          value={reportFormData.location}
                          onChange={(e) => setReportFormData({ ...reportFormData, location: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="evidence">Evidence/URLs</Label>
                        <Textarea
                          id="evidence"
                          placeholder="URLs, screenshots, or other evidence (optional)"
                          value={reportFormData.evidence}
                          onChange={(e) => setReportFormData({ ...reportFormData, evidence: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactInfo">Contact Information (Optional)</Label>
                        <Input
                          id="contactInfo"
                          placeholder="Email for follow-up (kept confidential)"
                          value={reportFormData.contactInfo}
                          onChange={(e) => setReportFormData({ ...reportFormData, contactInfo: e.target.value })}
                        />
                      </div>

                      <Button type="submit" className="w-full btn-hero">
                        <Send className="mr-2 h-4 w-4" />
                        Submit Report
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Guidelines */}
                <div className="space-y-6">
                  <Card className="card-glass">
                    <CardHeader>
                      <CardTitle>Reporting Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary text-sm font-bold">1</span>
                          </div>
                          <div>
                            <p className="font-semibold">Be Specific</p>
                            <p className="text-muted-foreground text-sm">Provide clear details about the fraudulent activity</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary text-sm font-bold">2</span>
                          </div>
                          <div>
                            <p className="font-semibold">Include Evidence</p>
                            <p className="text-muted-foreground text-sm">Screenshots, URLs, or documents if available</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary text-sm font-bold">3</span>
                          </div>
                          <div>
                            <p className="font-semibold">Stay Anonymous</p>
                            <p className="text-muted-foreground text-sm">Your identity will be protected</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-glass">
                    <CardHeader>
                      <CardTitle>Impact Statistics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-gradient">₹24.5 Cr</div>
                          <p className="text-muted-foreground">Money saved through community reports</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-xl font-bold text-primary">2,847</div>
                            <p className="text-xs text-muted-foreground">Reports Filed</p>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-success">89%</div>
                            <p className="text-xs text-muted-foreground">Action Rate</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="card-glass">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-accent" />
                      Fraud Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Ponzi Schemes</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div className="bg-destructive h-2 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">78%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Fake Advisors</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div className="bg-warning h-2 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">65%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Deepfakes</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">45%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Pump & Dump</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div className="bg-accent h-2 rounded-full" style={{ width: '32%' }}></div>
                          </div>
                          <span className="text-sm font-semibold">32%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-glass">
                  <CardHeader>
                    <CardTitle>Regional Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Maharashtra</span>
                        <span className="font-semibold">487 reports</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delhi NCR</span>
                        <span className="font-semibold">342 reports</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Karnataka</span>
                        <span className="font-semibold">298 reports</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tamil Nadu</span>
                        <span className="font-semibold">234 reports</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gujarat</span>
                        <span className="font-semibold">189 reports</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reports;