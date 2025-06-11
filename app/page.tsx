"use client";

import { useEffect, useState } from "react";

export default function Home() {
	const [currentTemp, setCurrentTemp] = useState("");

	const fetchWeather = async () => {
		try {
			const response = await fetch("/api/weather");
			const data = await response.json();

			console.log("Raw response:", data); // This will show everything

			// Check if it's weather data (has a 'name' property)
			if (data.name) {
				console.log("Weather for:", data.name);
				console.log("Temperature:", data.main.temp);
				setCurrentTemp(data.main.temp);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	useEffect(() => {
		fetchWeather();
	}, []);

	return (
		<div className="flex items-center flex-col justify-start m-4 h-screen font-sans">
			<h1 className="flex justify-center items-start m-20 text-5xl font-bold">
				The Weather
			</h1>
			<h2 className="flex justify-center items-start m-4 text-3xl font-semibold">
				Portsmouth
			</h2>
			<h2 className="flex justify-center items-start m-4 text-2xl font-medium">
				{currentTemp}°C
			</h2>
		</div>
	);
}
