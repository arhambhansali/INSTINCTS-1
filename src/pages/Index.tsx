
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Index = () => {
  const [isTechnical, setIsTechnical] = useState(false);

  return (
    <div className="min-h-screen p-6 animated-gradient">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="glass-card p-8 space-y-6">
          <div className="flex justify-center items-center space-x-4">
            <span className={`text-sm font-medium ${!isTechnical ? 'text-primary' : 'text-muted-foreground'}`}>
              Non-Technical
            </span>
            <Switch
              checked={isTechnical}
              onCheckedChange={setIsTechnical}
              className="toggle-switch"
            >
              <span className="toggle-thumb" />
            </Switch>
            <span className={`text-sm font-medium ${isTechnical ? 'text-primary' : 'text-muted-foreground'}`}>
              Technical
            </span>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
              <p className="text-xl text-muted-foreground">
                {isTechnical 
                  ? "Access advanced features and technical documentation"
                  : "Get started with our user-friendly interface"}
              </p>
            </div>

            <div className="glass p-6 space-y-4">
              <h2 className="text-2xl font-semibold">
                {isTechnical ? "Technical Documentation" : "Quick Start Guide"}
              </h2>
              <p className="text-muted-foreground">
                {isTechnical
                  ? "Explore our API documentation, system architecture, and developer tools."
                  : "Learn the basics and get started with our intuitive features."}
              </p>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                {isTechnical ? "View Documentation" : "Get Started"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
