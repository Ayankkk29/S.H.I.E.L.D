import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  Plane, 
  Clock, 
  MapPin, 
  User, 
  BookOpen, 
  MessageSquare, 
  LogOut,
  Calendar,
  Navigation,
  CheckCircle,
  AlertCircle,
  Star
} from "lucide-react";
import ChatBot from "./ChatBot";

const TravellerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("schedule");

  const flightSchedule = [
    {
      id: "AA123",
      from: "New York (JFK)",
      to: "Los Angeles (LAX)",
      departure: "10:30 AM",
      arrival: "2:45 PM",
      date: "Today",
      status: "On Time",
      gate: "A12",
      terminal: "Terminal 4"
    },
    {
      id: "UA456",
      from: "Los Angeles (LAX)",
      to: "Chicago (ORD)",
      departure: "6:15 PM",
      arrival: "11:30 PM",
      date: "Tomorrow",
      status: "Delayed",
      gate: "B8",
      terminal: "Terminal 1"
    }
  ];

  const liveFlights = [
    {
      id: "DL789",
      route: "Miami → Seattle",
      altitude: "35,000 ft",
      speed: "485 mph",
      eta: "3h 42m",
      status: "In Flight"
    },
    {
      id: "SW321",
      route: "Dallas → Denver",
      altitude: "32,000 ft",
      speed: "520 mph",
      eta: "1h 15m",
      status: "In Flight"
    }
  ];

  const regulations = [
    {
      title: "Carry-on Restrictions",
      description: "Liquids must be in containers of 3.4 oz or less",
      priority: "high"
    },
    {
      title: "Check-in Requirements",
      description: "Check-in online 24 hours before departure",
      priority: "medium"
    },
    {
      title: "Documentation",
      description: "Valid ID required for domestic flights",
      priority: "high"
    }
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">S.H.I.E.L.D</span>
            <Badge variant="secondary">Traveller Portal</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Welcome, John Doe</span>
            <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Traveller Dashboard</h1>
          <p className="text-muted-foreground">Access your flight information and travel details</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="schedule">
              <Calendar className="h-4 w-4 mr-2" />
              Flight Schedule
            </TabsTrigger>
            <TabsTrigger value="tracking">
              <Navigation className="h-4 w-4 mr-2" />
              Live Tracking
            </TabsTrigger>
            <TabsTrigger value="personal">
              <User className="h-4 w-4 mr-2" />
              Personal Details
            </TabsTrigger>
            <TabsTrigger value="regulations">
              <BookOpen className="h-4 w-4 mr-2" />
              Rules & Regulations
            </TabsTrigger>
            <TabsTrigger value="feedback">
              <MessageSquare className="h-4 w-4 mr-2" />
              Feedback
            </TabsTrigger>
          </TabsList>

          {/* Flight Schedule Tab */}
          <TabsContent value="schedule">
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Your Flight Schedule</span>
                  </CardTitle>
                  <CardDescription>Upcoming flights and travel itinerary</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {flightSchedule.map((flight) => (
                      <Card key={flight.id} className="border-border/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline">{flight.id}</Badge>
                                <Badge variant={flight.status === "On Time" ? "default" : "destructive"}>
                                  {flight.status === "On Time" ? (
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                  ) : (
                                    <AlertCircle className="h-3 w-3 mr-1" />
                                  )}
                                  {flight.status}
                                </Badge>
                              </div>
                              <div className="flex items-center space-x-4">
                                <div className="text-sm">
                                  <p className="font-medium">{flight.from}</p>
                                  <p className="text-muted-foreground">{flight.departure}</p>
                                </div>
                                <Plane className="h-4 w-4 text-primary" />
                                <div className="text-sm">
                                  <p className="font-medium">{flight.to}</p>
                                  <p className="text-muted-foreground">{flight.arrival}</p>
                                </div>
                              </div>
                            </div>
                            <div className="text-right text-sm">
                              <p className="font-medium">{flight.date}</p>
                              <p className="text-muted-foreground">Gate {flight.gate}</p>
                              <p className="text-muted-foreground">{flight.terminal}</p>
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

          {/* Live Tracking Tab */}
          <TabsContent value="tracking">
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Navigation className="h-5 w-5 text-primary" />
                    <span>Live Flight Tracking</span>
                  </CardTitle>
                  <CardDescription>Real-time flight information and status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {liveFlights.map((flight) => (
                      <Card key={flight.id} className="border-border/50">
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Badge variant="outline">{flight.id}</Badge>
                              <Badge className="bg-green-500">{flight.status}</Badge>
                            </div>
                            <div>
                              <p className="font-medium">{flight.route}</p>
                              <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-muted-foreground">
                                <p>Altitude: {flight.altitude}</p>
                                <p>Speed: {flight.speed}</p>
                                <p>ETA: {flight.eta}</p>
                              </div>
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

          {/* Personal Details Tab */}
          <TabsContent value="personal">
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-primary" />
                    <span>Personal Travel Profile</span>
                  </CardTitle>
                  <CardDescription>Your personal information and travel preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Personal Information</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="text-muted-foreground">Name:</span> John Doe</p>
                          <p><span className="text-muted-foreground">Email:</span> john.doe@email.com</p>
                          <p><span className="text-muted-foreground">Phone:</span> +1 (555) 123-4567</p>
                          <p><span className="text-muted-foreground">Frequent Flyer:</span> Gold Status</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Travel Preferences</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="text-muted-foreground">Seat Preference:</span> Aisle</p>
                          <p><span className="text-muted-foreground">Meal Preference:</span> Vegetarian</p>
                          <p><span className="text-muted-foreground">Special Assistance:</span> None</p>
                          <p><span className="text-muted-foreground">Notifications:</span> SMS + Email</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Rules & Regulations Tab */}
          <TabsContent value="regulations">
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Travel Rules & Regulations</span>
                  </CardTitle>
                  <CardDescription>Important guidelines and requirements for air travel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regulations.map((rule, index) => (
                      <Card key={index} className="border-border/50">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <Badge 
                              variant={rule.priority === "high" ? "destructive" : "secondary"}
                              className="mt-1"
                            >
                              {rule.priority}
                            </Badge>
                            <div>
                              <h4 className="font-medium">{rule.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{rule.description}</p>
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

          {/* Feedback Tab */}
          <TabsContent value="feedback">
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Travel Feedback</span>
                  </CardTitle>
                  <CardDescription>Share your experience and help improve our services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Rate Your Recent Flight</h4>
                      <Card className="border-border/50">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Flight AA123 - JFK to LAX</p>
                              <p className="text-sm text-muted-foreground">March 15, 2024</p>
                            </div>
                            <div className="flex space-x-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <div className="mt-3">
                            <textarea
                              className="w-full p-3 border border-border rounded-md text-sm"
                              placeholder="Share your feedback about this flight..."
                              rows={3}
                            />
                            <Button className="mt-3" variant="aviation">
                              Submit Feedback
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* V.I.M.A.N Chatbot */}
      <ChatBot
        botName="V.I.M.A.N"
        botInitials="VM"
        features={[
          "Flight Schedule",
          "Live Tracking", 
          "Personal Details",
          "Rules and Regulations",
          "Feedback"
        ]}
      />
    </div>
  );
};

export default TravellerDashboard;