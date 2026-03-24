// components/weather/WeatherStats.tsx
import type { WeatherData } from "@/types/weather";
import { Wind, Droplet, Gauge, Eye, Cloud, CloudRain } from "lucide-react";

interface WeatherStatsProps {
  data: WeatherData;
}

export function WeatherStats({ data }: WeatherStatsProps) {
  const { current } = data;

  const stats = [
    { icon: <Wind className="w-6 h-6" />, label: "Wind", value: `${current.wind_kph} km/h`, sub: current.wind_dir },
    { icon: <Droplet className="w-6 h-6" />, label: "Humidity", value: `${current.humidity}%` },
    { icon: <Gauge className="w-6 h-6" />, label: "Pressure", value: `${current.pressure_mb} hPa` },
    { icon: <Eye className="w-6 h-6" />, label: "Visibility", value: `${current.vis_km} km` },
    { icon: <Cloud className="w-6 h-6" />, label: "Cloud Cover", value: `${current.cloud}%` },
    { icon: <CloudRain className="w-6 h-6" />, label: "Precipitation", value: `${current.precip_mm} mm` },
  ];

  return (
    <div className="bg-slate-900/70 border border-slate-700 rounded-3xl p-8 md:col-span-2">
      <h3 className="text-xl font-semibold mb-6 text-slate-300">Weather Details</h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-10">
        {stats.map((stat, i) => (
          <div key={i} className="flex gap-4">
            <div className="text-blue-400 mt-0.5">{stat.icon}</div>
            <div>
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="text-2xl font-light tracking-tight">{stat.value}</p>
              {stat.sub && <p className="text-xs text-slate-500">{stat.sub}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}