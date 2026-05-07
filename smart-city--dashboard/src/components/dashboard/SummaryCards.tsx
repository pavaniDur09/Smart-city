import { Car, Zap, Wind, Thermometer, Sun, Volume2 } from "lucide-react";
import type { TrafficRecord, EnergyRecord, AirPollutionRecord, NoiseRecord } from "@/services/mockApi";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  sub?: string;
}

function StatCard({ icon, label, value, sub }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-muted p-5 flex items-center gap-4 transition-all hover:scale-[1.02]">
      <div className="w-12 h-12 rounded-xl bg-background/60 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-bold font-sans">{value}</p>
        {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
      </div>
    </div>
  );
}

export default function SummaryCards({
  energy,
  traffic,
  air,
  solar,
  noise,
}: {
  traffic: TrafficRecord[];
  energy: EnergyRecord[];
  air: AirPollutionRecord[];
  solar: EnergyRecord[];
  noise: NoiseRecord[];
}) {
  const totalVehicles = traffic.reduce((s, r) => s + r.vehicles, 0);
  const avgElectricity = energy.length
    ? (energy.reduce((s, r) => s + r.electricity_load, 0) / energy.length).toFixed(1)
    : "0";
  const avgPm25 = air.length
    ? (air.reduce((s, r) => s + r.pm25, 0) / air.length).toFixed(1)
    : "0";
  const avgTemp = air.length
    ? (air.reduce((s, r) => s + r.temperature, 0) / air.length).toFixed(1)
    : "0";
  const avgSolar = solar.length
    ? (solar.reduce((s, r) => s + r.solar_output, 0) / solar.length).toFixed(1)
    : "0";
  const avgDayNoise = noise.length
    ? (noise.reduce((s, r) => s + r.day_noise, 0) / noise.length).toFixed(1)
    : "0";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        icon={<Car className="w-5 h-5" />}
        label="Total Vehicles"
        value={totalVehicles.toLocaleString()}
        sub="across all junctions"
      />
      <StatCard
        icon={<Zap className="w-5 h-5" />}
        label="Avg Electricity Load"
        value={avgElectricity}
        sub="kW average"
      />
      <StatCard
        icon={<Wind className="w-5 h-5" />}
        label="Avg PM2.5"
        value={avgPm25}
        sub={Number(avgPm25) < 35 ? "Good" : Number(avgPm25) < 75 ? "Moderate" : "Unhealthy"}
      />
      <StatCard
        icon={<Thermometer className="w-5 h-5" />}
        label="Avg Temperature"
        value={`${avgTemp}°C`}
        sub="across stations"
      />
      <StatCard
        icon={<Sun className="w-5 h-5" />}
        label="Avg Solar Output"
        value={`${avgSolar} kW`}
        sub="across regions"
      />
       <StatCard
        icon={<Volume2 className="w-5 h-5" />}
        label="Avg Day Noise"
        value={`${avgDayNoise} dB`}
        sub={Number(avgDayNoise) > 65 ? "Above limit" : "Within limit"}
      />
    </div>
  );
}
