import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Search, AlertTriangle, CheckCircle, XCircle, Loader2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ScanResult {
  advisorVerified: boolean;
  riskScore: number;
  riskLevel: "Low" | "Medium" | "High";
  explanation: string;
  advisorName: string;
}

const ScanSection = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [formData, setFormData] = useState({
    advisorName: "",
    advisorCode: "",
    content: ""
  });

  const handleScan = async () => {
    setIsScanning(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock response based on input
      const mockResult: ScanResult = {
        advisorVerified: formData.advisorName.toLowerCase().includes("verified"),
        riskScore: Math.floor(Math.random() * 100),
        riskLevel: Math.random() > 0.7 ? "High" : Math.random() > 0.4 ? "Medium" : "Low",
        explanation: "Analysis found suspicious keywords including 'guaranteed returns' and 'risk-free investment'. Advisor registration could not be verified in SEBI database.",
        advisorName: formData.advisorName || "Unknown Advisor"
      };
      
      setScanResult(mockResult);
      setIsScanning(false);
    }, 2000);
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
    <section id="scan" className="smooth-section py-32 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            AI Fraud <span className="text-gradient">Scanner</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Enter advisor details and content to check for potential fraud
          </p>
          <Link to="/scan">
            <Button className="btn-hero">
              Try Full Scanner
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Quick Scan Form */}
          <Card className="card-glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                Quick Fraud Check
              </CardTitle>
              <CardDescription>
                Basic fraud detection for immediate results
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quickContent">Content to Analyze</Label>
                <Textarea
                  id="quickContent"
                  placeholder="Paste investment advice or message to verify..."
                  className="min-h-24"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                />
              </div>

              <Button 
                onClick={handleScan} 
                disabled={isScanning || !formData.content.trim()}
                className="w-full btn-hero"
              >
                {isScanning ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Quick Scan
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="card-glass">
            <CardHeader>
              <CardTitle>Scan Results</CardTitle>
              <CardDescription>
                AI analysis and fraud detection results
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!scanResult && !isScanning && (
                <div className="text-center py-12 text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="mb-4">Enter content above and click "Quick Scan"</p>
                  <Link to="/scan">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Advanced Scanner
                    </Button>
                  </Link>
                </div>
              )}

              {isScanning && (
                <div className="text-center py-12">
                  <Loader2 className="h-12 w-12 mx-auto mb-4 animate-spin text-primary" />
                  <p className="text-foreground font-semibold">Analyzing content...</p>
                  <p className="text-sm text-muted-foreground mt-2">This may take a few seconds</p>
                </div>
              )}

              {scanResult && (
                <div className="space-y-6">
                  {/* Risk Score */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Risk Score</span>
                      <Badge variant={getRiskColor(scanResult.riskLevel) as any}>
                        {scanResult.riskLevel} Risk
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Score: {scanResult.riskScore}/100</span>
                        <span className="text-muted-foreground">{scanResult.riskLevel}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-1000 ${
                            scanResult.riskLevel === "High" ? "bg-destructive" :
                            scanResult.riskLevel === "Medium" ? "bg-warning" : "bg-success"
                          }`}
                          style={{ width: `${scanResult.riskScore}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-warning" />
                      <span className="font-semibold">Analysis Details</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {scanResult.explanation}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4">
                    <Link to="/scan" className="flex-1">
                      <Button className="w-full btn-hero">
                        Detailed Scan
                      </Button>
                    </Link>
                    <Link to="/reports" className="flex-1">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Report Fraud
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScanSection;