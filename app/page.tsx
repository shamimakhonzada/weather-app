import { WeatherDashboard } from "@/components/weather/WeatherDashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 to-blue-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-4 tracking-tighter">
          Pakistan Weather Pro
        </h1>
        <p className="text-center text-slate-400 mb-12">
          Real-time weather • Air Quality • Astronomy
        </p>

        <WeatherDashboard />
      </div>
    </main>
  );
}
