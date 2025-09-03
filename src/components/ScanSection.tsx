import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Search, AlertTriangle, CheckCircle, XCircle, Loader2 } from "lucide-react";

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
          <p className="text-xl text-muted-foreground">
            Enter advisor details and content to check for potential fraud
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Scan Form */}
          <Card className="card-glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                Fraud Detection Scan
              </CardTitle>
              <CardDescription>
                Enter the advisor information and content you want to verify
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="advisorName">Advisor Name</Label>
                <Input
                  id="advisorName"
                  placeholder="Enter advisor's full name"
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
              
              <div className="space-y-2">
                <Label htmlFor="content">Content to Analyze</Label>
                <Textarea
                  id="content"
                  placeholder="Paste the investment advice, message, or content you want to verify..."
                  className="min-h-32"
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
                    Scan for Fraud
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
                  <p>Enter content above and click "Scan for Fraud" to begin analysis</p>
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
                  {/* Advisor Verification */}
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {scanResult.advisorVerified ? (
                        <CheckCircle className="h-5 w-5 text-success" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive" />
                      )}
                      <div>
                        <p className="font-semibold">{scanResult.advisorName}</p>
                        <p className="text-sm text-muted-foreground">
                          {scanResult.advisorVerified ? "SEBI Verified" : "Not Verified"}
                        </p>
                      </div>
                    </div>
                    <Badge variant={scanResult.advisorVerified ? "default" : "destructive"}>
                      {scanResult.advisorVerified ? "Verified" : "Unverified"}
                    </Badge>
                  </div>

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