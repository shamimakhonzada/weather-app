// app/api/weather/route.ts
import { NextResponse } from "next/server";
import type { WeatherData } from "@/types/weather";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city") || "Skardu,Pakistan";

  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=yes`,
      { next: { revalidate: 180 } }, // 3 minutes cache
    );

    if (!res.ok) throw new Error("WeatherAPI error");

    const data: WeatherData = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 },
    );
  }
}
