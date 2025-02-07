
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Index = () => {
  const [isTechnical, setIsTechnical] = useState(false);

  const technicalEvents = [
    "Aeromodelling Workshop",
    "Airborne",
    "Techno-Celestia",
    "Tec-H-ealth Talk Show",
    "Rescue Warrior",
    "Inflate & Explode",
    "Puzzle Pursuit",
    "Halt & Grind",
    "Mind Matrix",
    "Cirature",
    "ArcTech 2"
  ];

  return (
    <div className={`min-h-screen p-6 ${isTechnical ? 'technical-bg' : 'non-technical-bg'} animated-gradient`}>
      <div className="max-w-5xl mx-auto space-y-8">
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
              <h1 className="text-4xl font-bold mb-2">Instincts – Indus University Fest</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Where Innovation Meets Celebration
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                  Schedule
                </button>
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                  Register Now
                </button>
              </div>
            </div>

            <div className="glass p-6 space-y-4">
              <h2 className="text-2xl font-semibold">
                {isTechnical ? "Technical Events" : "Non-Technical Events"}
              </h2>
              
              <div className="grid gap-4">
                {isTechnical ? (
                  technicalEvents.map((event, index) => (
                    <div key={index} className="p-4 glass-card hover:scale-[1.02] transition-transform">
                      <h3 className="font-medium mb-2">{event}</h3>
                      <button className="px-4 py-1.5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm">
                        Register Now
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="grid gap-4 md:grid-cols-2">
                    {Array.from({ length: 32 }, (_, i) => (
                      <div key={i} className="p-4 glass-card hover:scale-[1.02] transition-transform">
                        <h3 className="font-medium mb-2">Event {i + 1}</h3>
                        <button className="px-4 py-1.5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm">
                          Register Now
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
