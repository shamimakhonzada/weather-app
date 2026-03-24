import type { WeatherData } from "@/types/weather";
import { Clock, ThermometerSun } from "lucide-react";
import Image from "next/image";

interface WeatherCardProps {
  data: WeatherData;
}

export function WeatherCard({ data }: WeatherCardProps) {
  const { location, current } = data;
  const isDay = current.is_day === 1;

  return (
    <div
      className={`rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl ${
        isDay
          ? "bg-linear-to-br from-blue-900 to-indigo-950"
          : "bg-linear-to-br from-slate-900 to-zinc-950"
      }`}
    >
      <div className="p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Temp & Description */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-7xl font-light tracking-tighter">
              {Math.round(current.temp_c)}°C
            </h2>
            <ThermometerSun className="text-orange-400" size={48} />
          </div>

          <p className="text-3xl font-medium text-white/90">
            {current.condition.text}
          </p>

          <div className="mt-6 space-y-1 text-slate-300">
            <p className="flex items-center gap-2">
              <Clock size={18} /> {location.localtime}
            </p>
            <p className="text-3xl font-semibold">
              {location.name}, {location.country}
            </p>
            <p className="text-slate-400">{location.region}</p>
          </div>
        </div>

        {/* Right: Icon + Feels Like */}
        <div className="flex flex-col items-center">
          <div className="relative w-52 h-52 -mt-8">
            <Image
              src={`https:${current.condition.icon}`}
              alt={current.condition.text}
              fill
              className="drop-shadow-2xl"
              priority
              unoptimized
            />
          </div>

          <div className="text-center mt-4">
            <p className="text-lg text-slate-400">Feels like</p>
            <p className="text-5xl font-light tracking-tighter">
              {Math.round(current.feelslike_c)}°C
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 px-10 py-5 flex justify-between text-sm border-t border-slate-700/50">
        <div>
          Wind:{" "}
          <span className="font-medium">
            {current.wind_kph} km/h {current.wind_dir}
          </span>
        </div>
        <div>
          Humidity: <span className="font-medium">{current.humidity}%</span>
        </div>
        <div>
          Visibility: <span className="font-medium">{current.vis_km} km</span>
        </div>
      </div>
    </div>
  );
}
