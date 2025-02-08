
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [isTechnical, setIsTechnical] = useState(false);
  const navigate = useNavigate();

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
              <button 
                onClick={() => navigate('/schedule')}
                className={`px-6 py-2 ${!isTechnical ? 'bg-[#fdbe39]' : 'bg-primary'} text-primary-foreground rounded-2xl hover:opacity-90 transition-opacity`}
              >
                Schedule
              </button>
              <button className={`px-6 py-2 ${!isTechnical ? 'bg-[#fdbe39]' : 'bg-primary'} text-primary-foreground rounded-2xl hover:opacity-90 transition-opacity`}>
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
