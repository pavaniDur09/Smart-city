import { useState, useEffect, useCallback } from "react";
import {
  fetchTrafficData,
  fetchEnergyData,
  fetchAirPollutionData,
  fetchNoiseData,
  type TrafficRecord,
  type EnergyRecord,
  type AirPollutionRecord,
  type NoiseRecord,
  type TrafficChartPoint,
  type EnergyChartPoint,
  type AirChartPoint,
  type SolarChartPoint,
  type NoiseChartPoint,
  //transformSolarChartData,
  //transformEnergyChartData,
} from "@/services/mockApi";

const REFRESH_INTERVAL = 10000;

export function useDashboardData() {
  const [trafficData, setTrafficData] = useState<TrafficRecord[]>([]);
  const [energyData, setEnergyData] = useState<EnergyRecord[]>([]);
  const [airData, setAirData] = useState<AirPollutionRecord[]>([]);
  const [solarData, setSolarData] = useState<EnergyRecord[]>([]);
  const [noiseData, setNoiseData] = useState<NoiseRecord[]>([]);
  const [trafficChart, setTrafficChart] = useState<TrafficChartPoint[]>([]);
  const [energyChart, setEnergyChart] = useState<EnergyChartPoint[]>([]);
  const [airChart, setAirChart] = useState<AirChartPoint[]>([]);
  const [solarChart, setSolarChart] = useState<SolarChartPoint[]>([]);
  const [noiseChart, setNoiseChart] = useState<NoiseChartPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

 /**  useEffect(() => {
  fetchEnergyData().then((data) => {
    setEnergyData(data);
    //setEnergyChart(transformEnergyChartData(data));
    //setSolarChart(transformSolarChartData(data));
  });
}, []);*/

  const loadAll = useCallback(async () => {
    setLoading(true);
    const [t, e, a, s, n] = await Promise.all([
      fetchTrafficData(),
      fetchEnergyData(),
      fetchAirPollutionData(),
      fetchEnergyData(),
      fetchNoiseData(),
    ]);
    setTrafficData(t);
    setEnergyData(e);
    setAirData(a);
    setSolarData(s);
    setNoiseData(n);

    // Prepare chart data from first 30 records
    setTrafficChart(
      t.slice(0, 20).map((row) => ({
        time: row.datetime?.split("T")[1]?.substring(0, 5) || "N/A",
        vehicles: row.vehicles,
      }))
    );
    setEnergyChart(
      e.slice(0, 20).map((row) => ({
        time: row.timestamp?.split("T")[1]?.substring(0, 5) || "N/A",
        electricity: row.electricity_load,
        currentLevel: row.current_level,
      }))
    );
    setAirChart(
      a.slice(0, 20).map((row) => ({
        time: row.datetime?.split(" ")[1]?.substring(0, 5) || "N/A",
        pm25: row.pm25,
        pm10: row.pm10,
      }))
    );

    setSolarChart(
      s.slice(0, 20).map((row) => ({
        time: row.timestamp?.split("T")[1]?.substring(0, 5) || "N/A",
        solarOutput: row.solar_output,
      }))
    );

    setNoiseChart(
      n.slice(0, 20).map((row) => ({
        time: row.timestamp || "N/A",
        dayNoise: row.day_noise,
        nightNoise: row.night_noise,
      }))
    );

    setLastUpdated(new Date());
    setLoading(false);
  }, []);

  useEffect(() => {
    loadAll();
    //const interval = setInterval(loadAll, REFRESH_INTERVAL);
    //return () => clearInterval(interval);
  }, [loadAll]);

  return {
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
    refresh: loadAll,
  };
}
