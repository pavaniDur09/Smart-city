import Header from "@/components/Header";
import { Car, Zap, Wind, Activity, ArrowRight, Sun, Volume2} from "lucide-react";
import { useNavigate } from "react-router-dom";

const monitoringDomains = [
  {
    id: "traffic",
    title: "Traffic Flow",
    description:
      "Monitor real-time vehicle counts, average speeds, and congestion levels across city intersections and roadways.",
    icon: Car,
    color: "hsl(var(--tag-travel))",
    tab: "traffic",
  },
  {
    id: "energy",
    title: "Energy Grid",
    description:
      "Track energy consumption, solar output, and grid load across city zones to optimise distribution and sustainability.",
    icon: Zap,
    title2: "Energy",
    color: "hsl(var(--tag-growth))",
    tab: "energy",
  },
  {
    id: "air",
    title: "Air Quality",
    description:
      "Observe PM2.5, PM10 and AQI readings from monitoring stations to detect pollution events and ensure public health.",
    icon: Wind,
    color: "hsl(var(--tag-creativity))",
    tab: "air",
  },
  {
   id: "solar",
    title: "Solar Energy",
    description:
      "Track solar panel output across city regions to monitor renewable energy generation and optimize sustainability.",
    icon: Sun,
    color: "hsl(var(--tag-financing))",
    tab: "solar",
  },
  {
    id: "noise",
    title: "Noise Levels",
    description:
      "Monitor day and night noise levels across city stations to ensure compliance with environmental noise limits.",
    icon: Volume2,
    color: "hsl(var(--tag-wellness))",
    tab: "noise",
  },
];

const Index = () => {
  const navigate = useNavigate();

  const handleDomainClick = (tab: string) => {
    navigate(`/dashboard?tab=${tab}`);
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Hero Section */}
        <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-6 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
            <div className="relative aspect-4/3 md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in">
              <img
                src="https://plus.unsplash.com/premium_photo-1687205277517-5fa36b31b4f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnQlMjAlNUNjaXR5JTIwbW9uaXRvcmluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Smart city skyline with data overlays"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            <div className="flex flex-col justify-center space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 animate-slide-down">
                  <Activity className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent uppercase tracking-wider">
                    Real-Time Platform
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-down">
                  Smart City Monitoring
                </h1>
                <p className="text-muted-foreground text-lg md:text-x1 leading-relaxed max-w-xl animate-slide-up stagger-1">
                  A real-time urban monitoring platform that ingests, processes, and visualises
                  live data streams across traffic, noise levels, solar usage, energy consumption, and air quality enabling data-driven
                  decision-making for smarter cities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 animate-slide-up stagger-2">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 md:px-7 md:py-3 text-base font-medium transition-all hover:scale-105 flex items-center gap-2"
                >
                  Open Dashboard
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate("/about")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-4"
                >
                  Learn more →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="max-w-4xl mx-auto py-20 md:py-10 px-4 animate-fade-in">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up">
              Unified monitoring across critical urban domains
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
              The platform streams data from traffic sensors, energy grids, and air quality stations
              into a single dashboard. Tabular views provide detailed inspection of recent records,
              while chart-based visualisations reveal trends and patterns — combining detailed
              analysis with high-level situational awareness.
            </p>
          </div>
        </section>

        {/* Live Monitoring Domains */}
       <section id="monitoring" className="py-12">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Live Monitoring
            </h2>
            <button
              onClick={() => navigate("/dashboard")}
              className="text-sm font-medium hover:text-accent transition-colors px-4 py-2 rounded-full hover:bg-primary/90"
            >
              Full Dashboard →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {monitoringDomains.map((domain, index) => (
              <button
                key={domain.id}
                onClick={() => handleDomainClick(domain.tab)}
                className={`group relative block rounded-[2rem] overflow-hidden text-left card-hover animate-slide-up stagger-${Math.min(index + 1, 6)}`}
              >
                <div className="bg-card p-8 md:p-10 rounded-[2rem] border border-border h-full flex flex-col gap-6 transition-all group-hover:border-accent/50">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: domain.color }}
                  >
                    <domain.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold tracking-tight">
                      {domain.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {domain.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                    View Live Data
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Architecture Section */}
        <section className="my-20 rounded-[2.5rem] bg-card p-4 md:p-5 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Built for Real-Time
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The platform auto-refreshes every 10 seconds, streaming the latest urban data
              without full page reloads. State management ensures seamless updates while
              maintaining visual consistency and reducing cognitive load.
            </p>
            <button
              onClick={() => navigate("/dashboard")}
              className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Explore the Dashboard
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/dashboard" className="hover:text-accent transition-colors">Dashboard</a></li>
                <li><a href="/dashboard?tab=traffic" className="hover:text-accent transition-colors">Traffic</a></li>
                <li><a href="/dashboard?tab=energy" className="hover:text-accent transition-colors">Energy</a></li>
                <li><a href="/dashboard?tab=air" className="hover:text-accent transition-colors">Air Quality</a></li>
                <li><a href="/dashboard?tab=solar" className="hover:text-accent transition-colors">Solar</a></li>
                <li><a href="/dashboard?tab=noise" className="hover:text-accent transition-colors">Noise</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-accent transition-colors">About the Platform</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Smart City Monitor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
