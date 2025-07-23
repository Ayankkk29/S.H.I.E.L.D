import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useLocation } from "react-router-dom";
import { Plane, Users, Shield, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const initialUserType = location.state?.userType || "traveller";

  const handleLogin = async (userType: string) => {
    setIsLoading(true);
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Login Successful",
      description: `Welcome to your ${userType} dashboard!`,
    });

    // Navigate to appropriate dashboard
    if (userType === "traveller") {
      navigate("/traveller-dashboard");
    } else {
      navigate("/pilot-dashboard");
    }
    
    setIsLoading(false);
  };

  const LoginForm = ({ userType, title, description, icon }: { 
    userType: string; 
    title: string; 
    description: string;
    icon: React.ReactNode;
  }) => (
    <Card className="bg-gradient-card border-border/50 shadow-elegant">
      <CardHeader className="text-center pb-6">
        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4 text-primary">
          {icon}
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`${userType}-email`}>Email</Label>
          <Input
            id={`${userType}-email`}
            type="email"
            placeholder="Enter your email"
            className="border-border/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${userType}-password`}>Password</Label>
          <Input
            id={`${userType}-password`}
            type="password"
            placeholder="Enter your password"
            className="border-border/50"
          />
        </div>
        <Button
          className="w-full"
          variant="hero"
          onClick={() => handleLogin(userType)}
          disabled={isLoading}
        >
          {isLoading ? "Signing In..." : `Sign In as ${title}`}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="absolute top-4 left-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Plane className="h-8 w-8 text-primary" />
            <span className="text-3xl font-bold text-foreground">S.H.I.E.L.D</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Access Your Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose your role to access specialized aviation safety tools
          </p>
        </div>

        {/* Login Tabs */}
        <Tabs defaultValue={initialUserType} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="traveller" className="text-base py-3">
              <Users className="h-4 w-4 mr-2" />
              Traveller Portal
            </TabsTrigger>
            <TabsTrigger value="pilot" className="text-base py-3">
              <Shield className="h-4 w-4 mr-2" />
              Pilot Portal
            </TabsTrigger>
          </TabsList>

          <TabsContent value="traveller">
            <LoginForm
              userType="traveller"
              title="Traveller Portal"
              description="Access flight schedules, live tracking, and personal travel information"
              icon={<Users className="h-8 w-8" />}
            />
          </TabsContent>

          <TabsContent value="pilot">
            <LoginForm
              userType="pilot"
              title="Pilot Portal"
              description="Advanced analytics dashboard with safety tools and monitoring systems"
              icon={<Shield className="h-8 w-8" />}
            />
          </TabsContent>
        </Tabs>

        {/* Demo Credentials */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg text-center">Demo Credentials</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Use any email and password to access the demo dashboards
            </p>
            <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
              <span>Email: demo@shield.ai</span>
              <span>Password: demo123</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;