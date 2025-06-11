"use client";

import { useEffect, useState } from "react";
import CurrentWeatherCard from "./components/CurrentWeatherCard";

export default function Home() {
	const [currentTemp, setCurrentTemp] = useState("");
	const [currentLocation, setCurrentLocation] = useState("");
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const fetchWeather = async () => {
		try {
			setIsLoading(true);
			setError(false);

			// Testing Purposes
			await new Promise((resolve) => setTimeout(resolve, 2000));
			// Remove later

			const response = await fetch("/api/weather");
			const data = await response.json();

			if (!response.ok || data.success === false) {
				setError(true);
				return;
			}

			setCurrentTemp(data.main.temp);
			setCurrentLocation(data.name);
		} catch {
			setError(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchWeather();
	}, []);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-screen font-sans">
				<h1 className="text-3xl">Loading...</h1>
			</div>
		);
	}

	return (
		<div className="flex items-center flex-col justify-start m-4 h-screen font-sans">
			<h1 className="flex justify-center items-start m-20 text-5xl font-bold">
				The Weather
			</h1>
			{!error ? (
				<CurrentWeatherCard
					currentTemp={currentTemp}
					currentLocation={currentLocation}
				/>
			) : (
				<h2 className="flex justify-center items-start m-4 text-2xl font-medium text-red-500">
					Failed to fetch weather
				</h2>
			)}
		</div>
	);
}
