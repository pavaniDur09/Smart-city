import Header from "@/components/Header";
import { useDashboardData } from "@/hooks/useDashboardData";
import SummaryCards from "@/components/dashboard/SummaryCards";
import TrafficTable from "@/components/dashboard/TrafficTable";
import EnergyTable from "@/components/dashboard/EnergyTable";
import AirPollutionTable from "@/components/dashboard/AirPollutionTable";
import SolarTable from "@/components/dashboard/SolarTable";
import NoiseTable from "@/components/dashboard/NoiseTable";
import DashboardChart from "@/components/dashboard/DashboardChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCw, Car, Zap, Wind, Sun, Volume2 } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "traffic";
  const {
    trafficData,
    energyData,
    airData,
    solarData,
    noiseData,
    trafficChart,
    energyChart,
    airChart,
    solarChart,
    noiseChart,
    loading,
    lastUpdated,
    refresh,
  } = useDashboardData();

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Smart City Real-Time Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Live monitoring and analytics across traffic, energy & air quality
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">
              Updated {lastUpdated.toLocaleTimeString()}
            </span>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <Button
              variant="outline"
              size="sm"
              onClick={refresh}
              disabled={loading}
              className="rounded-full gap-2"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        {loading && !trafficData.length ? (
          <div className="flex flex-col items-center justify-center py-16 gap-4">
            <RefreshCw className="w-8 h-8 animate-spin text-muted-foreground" />
            <p className="text-lg font-medium text-muted-foreground">Data loading...</p>
            <p className="text-sm text-muted-foreground">Fetching latest readings from all sensors</p>
          </div>
        ) : (
          <SummaryCards traffic={trafficData} energy={energyData} air={airData} solar={solarData} noise={noiseData} />
        )}

        {/* Tabbed Sections */}
        <Tabs defaultValue={defaultTab} className="space-y-6">
          <TabsList className="bg-muted/60 rounded-full p-1">
            <TabsTrigger value="traffic" className="rounded-full gap-1.5 data-[state=active]:bg-background">
              <Car className="w-4 h-4" /> Traffic Congestion
            </TabsTrigger>
            <TabsTrigger value="energy" className="rounded-full gap-1.5 data-[state=active]:bg-background">
              <Zap className="w-4 h-4" /> Energy Consumption
            </TabsTrigger>
            <TabsTrigger value="air" className="rounded-full gap-1.5 data-[state=active]:bg-background">
              <Wind className="w-4 h-4" /> Air Quality
            </TabsTrigger>
            <TabsTrigger value="solar" className="rounded-full gap-1.5 data-[state=active]:bg-background">
              <Sun className="w-4 h-4" /> Solar Usage
            </TabsTrigger>
            <TabsTrigger value="noise" className="rounded-full gap-1.5 data-[state=active]:bg-background">
              <Volume2 className="w-4 h-4" /> Noise Intensity
            </TabsTrigger>
          </TabsList>

          {/* Energy */}
          <TabsContent value="energy" className="space-y-3 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-card p-4">
                <h3 className="text-lg font-semibold mb-3">Load Distribution</h3>
                <DashboardChart
                  data={energyChart}
                  type="line"
                  dataKeys={[
                    { key: "electricity", color: "#fbbf24", name: "Electricity" },
                    { key: "currentLevel", color: "#ef4444", name: "Current Level" },
                  ]}
                />
              </div>
              <div className="rounded-2xl bg-card p-4">
                <h3 className="text-lg font-semibold mb-3">Load Metrics</h3>
                <EnergyTable data={energyData} />
              </div>
            </div>
          </TabsContent>

          {/* Traffic */}
          <TabsContent value="traffic" className="space-y-3 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-card p-6">
                <h3 className="text-lg font-semibold mb-3">Vehicle Count</h3>
                <DashboardChart
                  data={trafficChart}
                  type="area"
                  dataKeys={[
                    { key: "vehicles", color: "#3b82f6", name: "Vehicles" },
                  ]}
                />
              </div>
              <div className="rounded-2xl bg-card p-4">
                <h3 className="text-lg font-semibold mb-3">Recent Data</h3>
                <TrafficTable data={trafficData} />
              </div>
            </div>
          </TabsContent>

          {/* Air Quality */}
          <TabsContent value="air" className="space-y-3 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-card p-4">
                <h3 className="text-lg font-semibold mb-3">Particulate Matter Levels</h3>
                <DashboardChart
                  data={airChart}
                  type="bar"
                  dataKeys={[
                    { key: "pm25", color: "#f97316", name: "PM2.5" },
                    { key: "pm10", color: "#ef4444", name: "PM10" },
                  ]}
                />
              </div>
              <div className="rounded-2xl bg-card p-4">
                <h3 className="text-lg font-semibold mb-3">Station Readings</h3>
                <AirPollutionTable data={airData} />
              </div>
            </div>
          </TabsContent>

           {/* Solar */}
          <TabsContent value="solar" className="space-y-3 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-card p-4">
                <h3 className="text-lg font-semibold mb-3">Solar Output </h3>
                <DashboardChart
                  data={solarChart}
                  type="area"
                  dataKeys={[
                    { key: "solarOutput", color: "#eab308", name: "Solar Output (kW)" },
                  ]}
                />
              </div>
              <div className="rounded-2xl bg-card p-4">
                <h3 className="text-lg font-semibold mb-3">Solar Readings</h3>
                <SolarTable data={solarData} />
              </div>
            </div>
          </TabsContent>

            {/* Noise */}
          <TabsContent value="noise" className="space-y-3 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-card p-4">
                <h3 className="text-lg font-semibold mb-3">Noise Levels (Day vs Night)</h3>
                <DashboardChart
                  data={noiseChart}
                  type="bar"
                  dataKeys={[
                    { key: "dayNoise", color: "#8b5cf6", name: "Day dB(A)" },
                    { key: "nightNoise", color: "#6366f1", name: "Night dB(A)" },
                  ]}
                />
              </div>
              <div className="rounded-2xl bg-card p-4">
                <h3 className="text-lg font-semibold mb-3">Noise Readings</h3>
                <NoiseTable data={noiseData} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
