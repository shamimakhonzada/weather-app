import { Cloud } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Cloud className="text-blue-500" size={28} />
          <span className="font-semibold text-2xl tracking-tight">
            WeatherPro
          </span>
        </div>
        <p className="text-xs text-slate-500">Powered by WeatherAPI.com</p>
      </div>
    </nav>
  );
}
