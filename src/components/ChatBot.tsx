import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User, Minimize2, Maximize2 } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  botName: string;
  botInitials: string;
  features: string[];
  onFeatureActivate?: (feature: string) => void;
}

const ChatBot = ({ botName, botInitials, features, onFeatureActivate }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Hello! I'm ${botName}, your AI assistant. I can help you access and manage various features. Type a feature name or ask me anything!`,
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Check if message matches any feature
    const matchedFeature = features.find(feature => 
      inputValue.toLowerCase().includes(feature.toLowerCase()) ||
      feature.toLowerCase().includes(inputValue.toLowerCase())
    );

    setTimeout(() => {
      let botResponse = "";
      
      if (matchedFeature) {
        botResponse = `Activating ${matchedFeature}... This feature is now ready for use!`;
        onFeatureActivate?.(matchedFeature);
      } else if (inputValue.toLowerCase().includes("help")) {
        botResponse = `I can help you with: ${features.join(", ")}. Just mention any feature name!`;
      } else if (inputValue.toLowerCase().includes("status")) {
        botResponse = `All systems operational. Available features: ${features.length} modules ready for deployment.`;
      } else {
        botResponse = `I understand you're asking about "${inputValue}". While I'm processing your request, you can try mentioning: ${features.slice(0, 3).join(", ")} or ask for help.`;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (isMinimized) {
    return (
      <Card className="fixed bottom-4 right-4 w-80 bg-gradient-card border-border/50 shadow-elegant">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  {botInitials}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-sm">{botName} Assistant</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(false)}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-96 h-[500px] bg-gradient-card border-border/50 shadow-elegant flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                {botInitials}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-sm">{botName} Assistant</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(true)}
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-4 pt-0">
        <ScrollArea className="flex-1 pr-2">
          <div className="space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${
                  message.isBot ? "" : "flex-row-reverse space-x-reverse"
                }`}
              >
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs">
                    {message.isBot ? <Bot className="h-3 w-3" /> : <User className="h-3 w-3" />}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`max-w-[250px] p-2 rounded-lg text-sm ${
                    message.isBot
                      ? "bg-muted text-muted-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div ref={messagesEndRef} />
        </ScrollArea>

        <div className="flex space-x-2 mt-3">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`Ask ${botName}...`}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="sm">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatBot;