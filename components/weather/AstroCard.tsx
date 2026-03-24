// components/weather/AstroCard.tsx
import type { Astro } from "@/types/weather";
import { Sunrise, Sunset, Moon, MoonStar } from "lucide-react";

interface AstroCardProps {
  astro?: Astro | null;
}

export function AstroCard({ astro }: AstroCardProps) {
  if (!astro) {
    return (
      <div className="bg-slate-900/70 border border-slate-700 rounded-3xl p-8 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-6">
          <Moon className="text-purple-400" size={28} />
          <h3 className="text-xl font-semibold">Astronomy</h3>
        </div>
        <div className="flex-1 flex items-center justify-center text-slate-400">
          Loading astronomy data...
        </div>
      </div>
    );
  }

  const moonIllum = parseInt(astro.moon_illumination) || 0;

  return (
    <div className="bg-slate-900/70 border border-slate-700 rounded-3xl p-8 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <Moon className="text-purple-400" size={28} />
        <h3 className="text-xl font-semibold">Astronomy</h3>
      </div>

      <div className="space-y-8 flex-1">
        {/* Sun Times */}
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Sunrise className="text-orange-400" size={26} />
            <div>
              <p className="text-sm text-slate-400">Sunrise</p>
              <p className="text-2xl font-light tracking-tight">{astro.sunrise}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Sunset className="text-rose-400" size={26} />
            <div>
              <p className="text-sm text-slate-400">Sunset</p>
              <p className="text-2xl font-light tracking-tight">{astro.sunset}</p>
            </div>
          </div>
        </div>

        {/* Moon Section */}
        <div className="pt-6 border-t border-slate-700">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-3">
              <MoonStar className="text-purple-400" size={26} />
              <div>
                <p className="text-sm text-slate-400">Moon Phase</p>
                <p className="font-medium text-lg">{astro.moon_phase}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Illumination</p>
              <p className="text-4xl font-light">{moonIllum}%</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden mb-6">
            <div 
              className="h-full bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 transition-all duration-700"
              style={{ width: `${moonIllum}%` }}
            />
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-slate-400">Moonrise</p>
              <p className="font-mono text-lg tracking-wide">{astro.moonrise || "--:--"}</p>
            </div>
            <div>
              <p className="text-slate-400">Moonset</p>
              <p className="font-mono text-lg tracking-wide">{astro.moonset || "--:--"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}