
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
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-black tracking-wide">INSTINCTS</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Welcome to Indus University's premier fest, where innovation meets creativity and technical excellence combines with artistic expression.
            </p>
            
            <div className="flex justify-center items-center space-x-4 my-6">
              <span className={`text-sm font-medium ${!isTechnical ? 'text-primary' : 'text-muted-foreground'}`}>
                Non-Technical
              </span>
              <Switch
                checked={isTechnical}
                onCheckedChange={setIsTechnical}
                className={`toggle-switch ${!isTechnical ? 'non-technical-switch' : ''}`}
              >
                <span className="toggle-thumb" />
              </Switch>
              <span className={`text-sm font-medium ${isTechnical ? 'text-primary' : 'text-muted-foreground'}`}>
                Technical
              </span>
            </div>

            <div className="flex justify-center gap-4">
              <button className={`px-6 py-2 ${!isTechnical ? 'bg-[#fdbe39]' : 'bg-primary'} text-primary-foreground rounded-2xl hover:opacity-90 transition-opacity`}>
                Schedule
              </button>
              <button className={`px-6 py-2 ${!isTechnical ? 'bg-[#fdbe39]' : 'bg-primary'} text-primary-foreground rounded-2xl hover:opacity-90 transition-opacity`}>
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
                  <div key={index} className="p-4 glass-card transform transition-transform duration-200 ease-out hover:scale-[1.02]">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{event}</h3>
                      <button className="px-4 py-1.5 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity text-sm text-center">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {Array.from({ length: 32 }, (_, i) => (
                    <div key={i} className="p-4 glass-card transform transition-transform duration-200 ease-out hover:scale-[1.02]">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">Event {i + 1}</h3>
                        <button className="px-4 py-1.5 bg-[#fdbe39] text-primary-foreground rounded-xl hover:opacity-90 transition-opacity text-sm text-center">
                          Register Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
