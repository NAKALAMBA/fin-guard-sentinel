import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, AlertTriangle, CheckCircle, XCircle, Loader2, Upload, 
  FileText, Shield, Brain, Zap, TrendingUp 
} from "lucide-react";

interface ScanResult {
  advisorVerified: boolean;
  riskScore: number;
  riskLevel: "Low" | "Medium" | "High";
  explanation: string;
  advisorName: string;
  detailedAnalysis: {
    keywordFlags: string[];
    sentimentScore: number;
    urlAnalysis?: string;
    imageAnalysis?: string;
  };
}

const FraudScan = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [formData, setFormData] = useState({
    advisorName: "",
    advisorCode: "",
    content: "",
    urls: "",
    files: null as FileList | null
  });

  const handleScan = async () => {
    setIsScanning(true);
    
    // Simulate comprehensive API call
    setTimeout(() => {
      const suspiciousKeywords = ["guaranteed returns", "risk-free", "double your money", "insider tip"];
      const foundKeywords = suspiciousKeywords.filter(keyword => 
        formData.content.toLowerCase().includes(keyword)
      );

      const mockResult: ScanResult = {
        advisorVerified: formData.advisorName.toLowerCase().includes("verified"),
        riskScore: Math.min(90, foundKeywords.length * 25 + Math.floor(Math.random() * 30)),
        riskLevel: foundKeywords.length > 2 ? "High" : foundKeywords.length > 0 ? "Medium" : "Low",
        explanation: foundKeywords.length > 0 
          ? `Analysis detected ${foundKeywords.length} suspicious keywords commonly used in investment fraud schemes. ${formData.advisorName ? 'Advisor verification failed.' : 'No advisor information provided.'}`
          : "Content appears legitimate with no major red flags detected. However, always verify advisor credentials independently.",
        advisorName: formData.advisorName || "Unknown Advisor",
        detailedAnalysis: {
          keywordFlags: foundKeywords,
          sentimentScore: Math.floor(Math.random() * 100),
          urlAnalysis: formData.urls ? "URLs checked against fraud databases" : undefined,
          imageAnalysis: formData.files ? "Image content analyzed for deepfakes" : undefined
        }
      };
      
      setScanResult(mockResult);
      setIsScanning(false);
    }, 3000);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case "High": return "destructive";
      case "Medium": return "warning";
      case "Low": return "success";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Advanced AI <span className="text-gradient">Fraud Scanner</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive fraud detection with AI-powered analysis of text, URLs, images, and advisor verification
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Scanning Interface */}
            <div className="space-y-6">
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-6 w-6 text-primary" />
                    AI-Powered Analysis
                  </CardTitle>
                  <CardDescription>
                    Upload content, URLs, or files for comprehensive fraud detection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="text" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="text">Text Analysis</TabsTrigger>
                      <TabsTrigger value="advisor">Advisor Check</TabsTrigger>
                      <TabsTrigger value="media">Media Scan</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="text" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="content">Investment Content</Label>
                        <Textarea
                          id="content"
                          placeholder="Paste investment advice, promotional content, or suspicious messages here..."
                          className="min-h-32"
                          value={formData.content}
                          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="urls">URLs to Check</Label>
                        <Input
                          id="urls"
                          placeholder="Enter URLs (comma-separated)"
                          value={formData.urls}
                          onChange={(e) => setFormData({ ...formData, urls: e.target.value })}
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="advisor" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="advisorName">Advisor Name</Label>
                        <Input
                          id="advisorName"
                          placeholder="Enter financial advisor's full name"
                          value={formData.advisorName}
                          onChange={(e) => setFormData({ ...formData, advisorName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="advisorCode">SEBI Registration Code</Label>
                        <Input
                          id="advisorCode"
                          placeholder="Enter SEBI registration number"
                          value={formData.advisorCode}
                          onChange={(e) => setFormData({ ...formData, advisorCode: e.target.value })}
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="media" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="files">Upload Files</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                          <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                          <p className="text-muted-foreground mb-2">
                            Drag & drop files or click to browse
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Supports images, videos, PDFs (Max 10MB)
                          </p>
                          <Input
                            type="file"
                            multiple
                            className="hidden"
                            accept="image/*,video/*,.pdf"
                            onChange={(e) => setFormData({ ...formData, files: e.target.files })}
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <Button 
                    onClick={handleScan} 
                    disabled={isScanning || (!formData.content.trim() && !formData.advisorName.trim() && !formData.files)}
                    className="w-full btn-hero mt-6"
                    size="lg"
                  >
                    {isScanning ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Running AI Analysis...
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 h-5 w-5" />
                        Start Advanced Scan
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="card-glass p-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-success" />
                    <div>
                      <p className="font-semibold">SEBI Verification</p>
                      <p className="text-sm text-muted-foreground">Real-time advisor check</p>
                    </div>
                  </div>
                </Card>
                <Card className="card-glass p-4">
                  <div className="flex items-center gap-3">
                    <Brain className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">AI Analysis</p>
                      <p className="text-sm text-muted-foreground">Advanced NLP & ML</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Results Panel */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Scan Results
                </CardTitle>
                <CardDescription>
                  Comprehensive fraud analysis and risk assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!scanResult && !isScanning && (
                  <div className="text-center py-16 text-muted-foreground">
                    <Search className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-semibold mb-2">Ready to Scan</p>
                    <p>Fill in the form and click "Start Advanced Scan" to begin analysis</p>
                  </div>
                )}

                {isScanning && (
                  <div className="text-center py-16">
                    <Loader2 className="h-16 w-16 mx-auto mb-4 animate-spin text-primary" />
                    <p className="text-lg font-semibold mb-2">AI Analysis in Progress</p>
                    <p className="text-muted-foreground mb-6">
                      Checking against fraud databases and analyzing patterns...
                    </p>
                    <Progress value={60} className="w-full max-w-xs mx-auto" />
                  </div>
                )}

                {scanResult && (
                  <div className="space-y-6">
                    {/* Overall Risk Score */}
                    <div className="text-center p-6 border border-border/50 rounded-lg">
                      <div className="text-4xl font-bold text-gradient mb-2">
                        {scanResult.riskScore}/100
                      </div>
                      <Badge variant={getRiskColor(scanResult.riskLevel) as any} className="text-lg px-4 py-2">
                        {scanResult.riskLevel} Risk
                      </Badge>
                    </div>

                    {/* Advisor Verification */}
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        {scanResult.advisorVerified ? (
                          <CheckCircle className="h-6 w-6 text-success" />
                        ) : (
                          <XCircle className="h-6 w-6 text-destructive" />
                        )}
                        <div>
                          <p className="font-semibold">{scanResult.advisorName}</p>
                          <p className="text-sm text-muted-foreground">
                            {scanResult.advisorVerified ? "SEBI Verified Advisor" : "Verification Failed"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Analysis */}
                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-warning" />
                        Detailed Analysis
                      </h3>
                      
                      {scanResult.detailedAnalysis.keywordFlags.length > 0 && (
                        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                          <p className="font-semibold text-destructive mb-2">Suspicious Keywords Detected</p>
                          <div className="flex flex-wrap gap-2">
                            {scanResult.detailedAnalysis.keywordFlags.map((keyword, index) => (
                              <Badge key={index} variant="destructive">{keyword}</Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="p-4 border border-border/50 rounded-lg">
                        <p className="font-semibold mb-2">AI Analysis Report</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {scanResult.explanation}
                        </p>
                      </div>

                      {scanResult.detailedAnalysis.urlAnalysis && (
                        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                          <p className="font-semibold text-primary">URL Security Check</p>
                          <p className="text-sm text-muted-foreground">{scanResult.detailedAnalysis.urlAnalysis}</p>
                        </div>
                      )}

                      {scanResult.detailedAnalysis.imageAnalysis && (
                        <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                          <p className="font-semibold text-accent">Media Analysis</p>
                          <p className="text-sm text-muted-foreground">{scanResult.detailedAnalysis.imageAnalysis}</p>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <FileText className="mr-2 h-4 w-4" />
                        Download Report
                      </Button>
                      <Button className="btn-hero">
                        <AlertTriangle className="mr-2 h-4 w-4" />
                        Report Fraud
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FraudScan;