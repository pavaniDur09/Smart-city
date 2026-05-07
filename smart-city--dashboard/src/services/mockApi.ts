// API service connecting to FastAPI backend

const API_BASE = "http://127.0.0.1:8000";

export interface TrafficRecord {
  id: number;
  datetime: string;
  junction: number;
  vehicles: number;
}

export interface EnergyRecord {
  id: number;
  timestamp: string;
  electricity_load: number;
  load_type: string;
  current_level: number;
  region_id: string;
  solar_output: number;
}

export interface AirPollutionRecord {
  id: number;
  station_id: string;
  datetime: string;
  pm25: number;
  pm10: number;
  temperature: number;
  humidity: number;
}

export interface TrafficChartPoint {
  time: string;
  vehicles: number;
}

export interface EnergyChartPoint {
  time: string;
  electricity: number;
  currentLevel: number;
}

export interface AirChartPoint {
  time: string;
  pm25: number;
  pm10: number;
}

export interface SolarChartPoint {
  timestamp: string;
  solarOutput: number;
}


export interface NoiseRecord {
  id: number;
  station: string;
  timestamp: string;
  day_noise: number;
  night_noise: number;
  day_limit: number;
  night_limit: number;
}

export interface NoiseChartPoint {
  time: string;
  dayNoise: number;
  nightNoise: number;
}

// --- Fallback mock data when backend is unreachable ---
const mockTraffic: TrafficRecord[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  datetime: `2026-03-10T${String(8 + Math.floor(i / 4)).padStart(2, "0")}:${String((i % 4) * 15).padStart(2, "0")}:00`,
  junction: (i % 4) + 1,
  vehicles: Math.floor(Math.random() * 80) + 10,
}));

const mockEnergy: EnergyRecord[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  timestamp: `2026-03-10T${String(
    8 + Math.floor(i / 3)
  ).padStart(2, "0")}:${String((i % 3) * 20).padStart(2, "0")}:00`,
  electricity_load: +(Math.random() * 50 + 20).toFixed(2),
  load_type: ["Residential", "Commercial", "Industrial"][i % 3],
  current_level: +(Math.random() * 10 + 1).toFixed(2),
  region_id: `R${(i % 5) + 1}`,
  solar_output: +(Math.random() * 40 + 5).toFixed(2),
}));


const mockAir: AirPollutionRecord[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  station_id: `ST-${String((i % 5) + 1).padStart(3, "0")}`,
  datetime: `2026-03-10 ${String(8 + Math.floor(i / 3)).padStart(2, "0")}:${String((i % 3) * 20).padStart(2, "0")}:00`,
  pm25: +(Math.random() * 60 + 10).toFixed(1),
  pm10: +(Math.random() * 90 + 20).toFixed(1),
  temperature: +(Math.random() * 15 + 20).toFixed(1),
  humidity: +(Math.random() * 40 + 40).toFixed(1),
}));

const mockNoise: NoiseRecord[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  station: `NS-${String((i % 6) + 1).padStart(3, "0")}`,
  timestamp: `2026-${String((i % 12) + 1).padStart(2, "0")}-01`,
  day_noise: +(Math.random() * 20 + 50).toFixed(1),
  night_noise: +(Math.random() * 15 + 40).toFixed(1),
  day_limit: 65,
  night_limit: 55,
}));

export async function fetchTrafficData(): Promise<TrafficRecord[]> {
  try {
    const res = await fetch(`${API_BASE}/traffic`);
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    console.warn("Backend unreachable, using mock traffic data");
    return mockTraffic;
  }
}

export async function fetchEnergyData(): Promise<EnergyRecord[]> {
  try {
    const res = await fetch(`${API_BASE}/energy`);
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    console.warn("Backend unreachable, using mock energy data");
    return mockEnergy;
  }
}

export async function fetchAirPollutionData(): Promise<AirPollutionRecord[]> {
  try {
    const res = await fetch(`${API_BASE}/air`);
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    console.warn("Backend unreachable, using mock air data");
    return mockAir;
  }
}

export async function fetchSolarData(): Promise<EnergyRecord[]> {
  try {
    const res = await fetch(`${API_BASE}/energy`);
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    console.warn("Backend unreachable, using mock solar data");
    return mockEnergy;
  }
}


export async function fetchNoiseData(): Promise<NoiseRecord[]> {
  try {
    const res = await fetch(`${API_BASE}/noise`);
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    console.warn("Backend unreachable, using mock noise data");
    return mockNoise;
  }
}

