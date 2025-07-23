import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { 
  Plane, 
  Brain, 
  Mic, 
  Wrench, 
  Navigation, 
  Monitor, 
  Shield, 
  TrendingDown, 
  AlertTriangle, 
  BarChart3, 
  LogOut,
  Activity,
  CheckCircle,
  XCircle,
  Clock,
  Zap
} from "lucide-react";

const PilotDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("behavior");

  const behaviorMetrics = [
    { metric: "Reaction Time", value: 85, status: "good" },
    { metric: "Decision Making", value: 92, status: "excellent" },
    { metric: "Stress Management", value: 78, status: "good" },
    { metric: "Communication", value: 88, status: "good" }
  ];

  const maintenanceReports = [
    {
      aircraft: "Boeing 737-800",
      registration: "N123AA",
      lastCheck: "2024-03-10",
      nextDue: "2024-06-10",
      status: "Operational",
      issues: 2
    },
    {
      aircraft: "Airbus A320",
      registration: "N456BB",
      lastCheck: "2024-03-05",
      nextDue: "2024-06-05",
      status: "Maintenance Required",
      issues: 5
    }
  ];

  const liveFlights = [
    {
      flight: "AA123",
      aircraft: "B737",
      route: "JFK-LAX",
      status: "In Flight",
      altitude: "35,000 ft",
      riskLevel: "Low"
    },
    {
      flight: "UA456",
      aircraft: "A320",
      route: "ORD-DEN",
      status: "Boarding",
      altitude: "Ground",
      riskLevel: "Medium"
    }
  ];

  const riskPredictions = [
    {
      type: "Weather Impact",
      probability: 25,
      severity: "Low",
      timeframe: "Next 2 hours"
    },
    {
      type: "Mechanical Issue",
      probability: 15,
      severity: "Medium",
      timeframe: "Next 24 hours"
    },
    {
      type: "Air Traffic Delay",
      probability: 60,
      severity: "Low",
      timeframe: "Next 6 hours"
    }
  ];

  const safetyRecommendations = [
    {
      title: "Pre-flight Inspection Protocol",
      description: "Enhanced inspection recommended for hydraulic systems",
      priority: "High",
      implemented: false
    },
    {
      title: "Weather Monitoring",
      description: "Increased monitoring for turbulence in sector 7",
      priority: "Medium",
      implemented: true
    },
    {
      title: "Communication Protocol",
      description: "Update radio frequency protocols for better clarity",
      priority: "Low",
      implemented: false
    }
  ];

  const handleLogout = () => {
    navigate("/");
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "excellent": return "bg-green-500";
      case "good": return "bg-blue-500";
      case "average": return "bg-yellow-500";
      case "poor": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getRiskColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "low": return "bg-green-500";
      case "medium": return "bg-yellow-500";
      case "high": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">AeroSafe AI</span>
            <Badge variant="secondary" className="bg-accent">Pilot Portal</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Welcome, Captain Smith</span>
            <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Pilot Command Center</h1>
          <p className="text-muted-foreground">Advanced analytics and safety monitoring dashboard</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="behavior">
              <Brain className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Behavior</span>
            </TabsTrigger>
            <TabsTrigger value="voice">
              <Mic className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Voice</span>
            </TabsTrigger>
            <TabsTrigger value="maintenance">
              <Wrench className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Maintenance</span>
            </TabsTrigger>
            <TabsTrigger value="tracking">
              <Navigation className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Tracking</span>
            </TabsTrigger>
            <TabsTrigger value="monitoring">
              <Monitor className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Monitor</span>
            </TabsTrigger>
            <TabsTrigger value="predictor">
              <TrendingDown className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Predictor</span>
            </TabsTrigger>
            <TabsTrigger value="safety">
              <Shield className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Safety</span>
            </TabsTrigger>
            <TabsTrigger value="dashboard">
              <BarChart3 className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
          </TabsList>

          {/* Behavior Analysis Tab */}
          <TabsContent value="behavior">
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <span>Pilot Behavior Analysis</span>
                  </CardTitle>
                  <CardDescription>AI-powered analysis of pilot performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {behaviorMetrics.map((metric, index) => (
                      <Card key={index} className="border-border/50">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium">{metric.metric}</h4>
                            <Badge className={getStatusColor(metric.status)}>
                              {metric.status}
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Score</span>
                              <span>{metric.value}%</span>
                            </div>
                            <Progress value={metric.value} className="h-2" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Cockpit Voice Decoder Tab */}
          <TabsContent value="voice">
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mic className="h-5 w-5 text-primary" />
                    <span>Cockpit Voice Decoder</span>
                  </CardTitle>
                  <CardDescription>AI-powered voice analysis and transcription</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Card className="border-border/50">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">Real-time Voice Analysis</h4>
                          <Badge className="bg-green-500">Active</Badge>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Activity className="h-4 w-4 text-primary" />
                            <span className="text-sm">Stress Level: Normal</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Zap className="h-4 w-4 text-primary" />
                            <span className="text-sm">Speech Clarity: 95%</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-sm">Response Time: 1.2s</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-border/50">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-3">Recent Transcriptions</h4>
                        <div className="space-y-2 text-sm">
                          <div className="p-2 bg-muted rounded">
                            <p className="text-muted-foreground text-xs">15:42:33</p>
                            <p>"Tower, this is Flight 123, requesting permission to land runway 24L"</p>
                          </div>
                          <div className="p-2 bg-muted rounded">
                            <p className="text-muted-foreground text-xs">15:42:45</p>
                            <p>"Flight 123, you are cleared to land runway 24L, wind 270 at 8 knots"</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Aircraft Maintenance Report Tab */}
          <TabsContent value="maintenance">
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    <span>Aircraft Maintenance Reports</span>
                  </CardTitle>
                  <CardDescription>Maintenance status and predictive analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {maintenanceReports.map((report, index) => (
                      <Card key={index} className="border-border/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-medium">{report.aircraft}</h4>
                                <Badge variant="outline">{report.registration}</Badge>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                                <div>
                                  <p>Last Check: {report.lastCheck}</p>
                                  <p>Next Due: {report.nextDue}</p>
                                </div>
                                <div>
                                  <p>Open Issues: {report.issues}</p>
                                  <p className="flex items-center space-x-1">
                                    {report.status === "Operational" ? (
                                      <CheckCircle className="h-3 w-3 text-green-500" />
                                    ) : (
                                      <XCircle className="h-3 w-3 text-red-500" />
                                    )}
                                    <span>{report.status}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <Button variant="aviation" size="sm">
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Live Tracking Tab */}
          <TabsContent value="tracking">
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Navigation className="h-5 w-5 text-primary" />
                    <span>Live Flight Tracking</span>
                  </CardTitle>
                  <CardDescription>Real-time flight monitoring and position tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {liveFlights.map((flight, index) => (
                      <Card key={index} className="border-border/50">
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Badge variant="outline">{flight.flight}</Badge>
                              <Badge className={getRiskColor(flight.riskLevel)}>
                                {flight.riskLevel} Risk
                              </Badge>
                            </div>
                            <div>
                              <p className="font-medium">{flight.route}</p>
                              <p className="text-sm text-muted-foreground">{flight.aircraft}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <p>Status: {flight.status}</p>
                              <p>Altitude: {flight.altitude}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Monitor Ongoing Flights Tab */}
          <TabsContent value="monitoring">
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Monitor className="h-5 w-5 text-primary" />
                    <span>Flight Monitoring Center</span>
                  </CardTitle>
                  <CardDescription>Comprehensive monitoring of all ongoing operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card className="border-border/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary">24</div>
                        <div className="text-sm text-muted-foreground">Active Flights</div>
                      </CardContent>
                    </Card>
                    <Card className="border-border/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-green-500">18</div>
                        <div className="text-sm text-muted-foreground">On Schedule</div>
                      </CardContent>
                    </Card>
                    <Card className="border-border/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-500">6</div>
                        <div className="text-sm text-muted-foreground">Delayed</div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Critical Alerts</h4>
                    <Card className="border-red-200 bg-red-50">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                          <span className="text-sm">Weather alert: Severe turbulence reported in sector 7</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Risk Predictor Tab */}
          <TabsContent value="predictor">
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingDown className="h-5 w-5 text-primary" />
                    <span>AI Risk Predictor</span>
                  </CardTitle>
                  <CardDescription>Predictive analytics for potential safety risks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {riskPredictions.map((risk, index) => (
                      <Card key={index} className="border-border/50">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium">{risk.type}</h4>
                            <Badge variant={risk.severity === "Low" ? "secondary" : risk.severity === "Medium" ? "default" : "destructive"}>
                              {risk.severity}
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Probability</span>
                              <span>{risk.probability}%</span>
                            </div>
                            <Progress value={risk.probability} className="h-2" />
                            <p className="text-sm text-muted-foreground">Expected: {risk.timeframe}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Safety Recommendations Tab */}
          <TabsContent value="safety">
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Safety Recommendations</span>
                  </CardTitle>
                  <CardDescription>AI-generated safety recommendations and protocols</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {safetyRecommendations.map((rec, index) => (
                      <Card key={index} className="border-border/50">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="space-y-2 flex-1">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-medium">{rec.title}</h4>
                                <Badge variant={rec.priority === "High" ? "destructive" : rec.priority === "Medium" ? "default" : "secondary"}>
                                  {rec.priority}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{rec.description}</p>
                            </div>
                            <div className="ml-4">
                              {rec.implemented ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              ) : (
                                <Button variant="aviation" size="sm">
                                  Implement
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Dashboard Overview Tab */}
          <TabsContent value="dashboard">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-gradient-card shadow-elegant">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">98.5%</div>
                    <div className="text-sm text-muted-foreground">Safety Score</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-card shadow-elegant">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">24</div>
                    <div className="text-sm text-muted-foreground">Active Flights</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-card shadow-elegant">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Risk Alerts</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-card shadow-elegant">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-500 mb-2">156</div>
                    <div className="text-sm text-muted-foreground">Flights Today</div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle>System Overview</CardTitle>
                  <CardDescription>Real-time status of all aviation safety systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">System Status</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">AI Analysis Engine</span>
                          <Badge className="bg-green-500">Online</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Voice Recognition</span>
                          <Badge className="bg-green-500">Online</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Risk Predictor</span>
                          <Badge className="bg-green-500">Online</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Maintenance Tracker</span>
                          <Badge className="bg-yellow-500">Updating</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Recent Activity</h4>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">15:45 - Risk analysis completed for Flight AA123</p>
                        <p className="text-muted-foreground">15:42 - Voice analysis updated for Captain Smith</p>
                        <p className="text-muted-foreground">15:40 - Maintenance alert generated for Aircraft N456BB</p>
                        <p className="text-muted-foreground">15:38 - Safety recommendation implemented</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PilotDashboard;