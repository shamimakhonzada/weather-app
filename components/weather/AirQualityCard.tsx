// components/weather/AirQualityCard.tsx
import type { AirQuality } from "@/types/weather";

interface AirQualityCardProps {
  airQuality: AirQuality;
}

const getAqiColor = (index: string) => {
  const i = parseInt(index);
  if (i <= 1) return "text-emerald-400";
  if (i <= 3) return "text-yellow-400";
  return "text-red-400";
};

export function AirQualityCard({ airQuality }: AirQualityCardProps) {
  const usEpa = airQuality["us-epa-index"];

  return (
    <div className="bg-slate-900/70 border border-slate-700 rounded-3xl p-8">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        Air Quality
        <span
          className={`text-xs px-3 py-1 rounded-full border ${getAqiColor(usEpa.toString())}`}
        >
          US EPA: {usEpa}
        </span>
      </h3>

      <div className="grid grid-cols-2 gap-6 text-sm">
        {Object.entries(airQuality)
          .filter(([key]) => !key.includes("index"))
          .map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span className="font-mono">
                {typeof value === "number" ? value.toFixed(2) : value}
              </span>
              <span className="font-mono">{value}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
