import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Plane, Shield, BarChart3, Users, Brain, AlertTriangle, TrendingUp, Eye } from "lucide-react";
import heroImage from "@/assets/aviation-hero.jpg";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze aviation incidents to identify patterns and predict risks"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety Prediction",
      description: "Predict potential safety issues before they occur using historical data and real-time monitoring"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Damage Assessment",
      description: "Accurately predict damage severity and maintenance requirements using AI models"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Real-time Monitoring",
      description: "Live tracking and monitoring of flight operations with instant alert systems"
    }
  ];

  const userTypes = [
    {
      type: "Traveller",
      description: "Access flight schedules, live tracking, personal details, and safety information",
      features: ["Flight Schedule", "Live Tracking", "Personal Details", "Rules & Regulations", "Feedback"],
      color: "bg-primary"
    },
    {
      type: "Pilot",
      description: "Professional dashboard with advanced analytics and safety tools",
      features: ["Behaviour Analysis", "Cockpit Voice Decoder", "Maintenance Reports", "Risk Predictor", "Safety Recommendations"],
      color: "bg-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">AeroSafe AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Sign In
            </Button>
            <Button variant="hero" onClick={() => navigate("/login")}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="relative container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 animate-pulse-glow">
            🚀 AI-Powered Aviation Safety Platform
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Revolutionizing
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Flight Safety
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Advanced AI analytics to predict aviation risks, analyze incidents, and improve flight safety through intelligent data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate("/login")} className="text-lg">
              Start Analysis
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advanced Aviation Analytics
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Harness the power of AI to transform aviation safety with predictive analytics and real-time insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Choose Your Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored experiences for different aviation stakeholders
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {userTypes.map((userType, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl">{userType.type} Portal</CardTitle>
                    <Badge className={userType.color}>
                      {userType.type === "Traveller" ? <Users className="h-4 w-4 mr-1" /> : <Shield className="h-4 w-4 mr-1" />}
                      {userType.type}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {userType.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {userType.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-6" 
                    variant="aviation"
                    onClick={() => navigate("/login", { state: { userType: userType.type.toLowerCase() } })}
                  >
                    Access {userType.type} Dashboard
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">99.8%</div>
              <div className="text-muted-foreground">Prediction Accuracy</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">10,000+</div>
              <div className="text-muted-foreground">Incidents Analyzed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Real-time Monitoring</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Airlines Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Plane className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">AeroSafe AI</span>
            </div>
            <div className="text-muted-foreground text-center md:text-right">
              <p>© 2024 AeroSafe AI. Advancing aviation safety through AI.</p>
              <p className="text-sm mt-1">Built for Aviation Safety Hackathon</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;