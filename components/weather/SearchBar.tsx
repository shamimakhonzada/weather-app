"use client";

import { Search, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  city: string;
  setCity: (city: string) => void;
}

export function SearchBar({ city, setCity }: SearchBarProps) {
  const [inputValue, setInputValue] = useState(city);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCity(inputValue.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="relative flex items-center">
        <MapPin className="absolute left-4 text-slate-400" size={20} />
        <Input
          type="text"
          placeholder="Search city... (e.g. Skardu, Pakistan)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="pl-11 bg-slate-900/70 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 h-14 text-lg"
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-2 bg-blue-600 hover:bg-blue-700"
        >
          <Search size={20} />
        </Button>
      </div>
      <p className="text-xs text-center text-slate-500 mt-2">
        Press Enter or click search • Try: Karachi, Lahore, Islamabad, Skardu
      </p>
    </form>
  );
}
