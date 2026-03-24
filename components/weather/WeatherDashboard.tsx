"use client";

import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import { WeatherCard } from "./WeatherCard";
import { WeatherStats } from "./WeatherStats";
import { AstroCard } from "./AstroCard";
import { AirQualityCard } from "./AirQualityCard";
import type { WeatherData, ForecastData } from "@/types/weather";

export function WeatherDashboard() {
  const [city, setCity] = useState("Skardu,Pakistan");
  const [currentData, setCurrentData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAll = async (searchCity: string) => {
    setLoading(true);
    setError("");

    try {
      const [currentRes, forecastRes] = await Promise.all([
        fetch(`/api/weather?city=${encodeURIComponent(searchCity)}`),
        fetch(`/api/forecast?city=${encodeURIComponent(searchCity)}`)
      ]);

      const currentJson = await currentRes.json();
      const forecastJson = await forecastRes.json();

      if (!currentRes.ok) throw new Error(currentJson.error || "Current weather error");
      if (!forecastRes.ok) throw new Error(forecastJson.error || "Forecast error");

      setCurrentData(currentJson);
      setForecastData(forecastJson);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to load weather data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll(city);
  }, [city]);

  const todayAstro = forecastData?.forecast?.forecastday?.[0]?.astro;

  return (
    <div className="space-y-8">
      <SearchBar city={city} setCity={setCity} />

      {error && (
        <div className="bg-red-950 border border-red-800 rounded-2xl p-6 text-center text-red-400">
          {error}
        </div>
      )}

      {loading && <div className="text-center py-20 text-slate-400">Loading latest weather...</div>}

      {!loading && currentData && (
        <>
          <WeatherCard data={currentData} />
          <div className="grid md:grid-cols-3 gap-6">
            <WeatherStats data={currentData} />
            <AstroCard astro={todayAstro} />
            <AirQualityCard airQuality={currentData.current.air_quality} />
          </div>
        </>
      )}
    </div>
  );
}