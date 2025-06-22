"use client";

import { useEffect, useState } from "react";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import Header from "./components/Header";

export default function Home() {
	const [currentTemp, setCurrentTemp] = useState(0);
	const [currentCondition, setCurrentCondition] = useState(0);
	const [currentCity, setCurrentCity] = useState("");
	const [currentCountry, setCurrentCountry] = useState("");

	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

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

			setCurrentTemp(Math.floor(data.main.temp));
			setCurrentCity(data.name);
			setCurrentCondition(data.weather[0].id);
			setCurrentCountry(data.sys.country);
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
			<div className="h-screen flex items-center justify-center font-sans bg-neutral-800 text-white">
				<h1 className="text-3xl">Loading...</h1>
			</div>
		);
	}

	return (
		<div className="h-screen w-full flex items-center flex-col justify-start font-sans dark:bg-neutral-800 dark:text-white  bg-neutral-300">
			<Header />
			{!error ? (
				<CurrentWeatherCard
					currentTemp={currentTemp}
					currentCity={currentCity}
					currentCountry={currentCountry}
					currentCondition={currentCondition}
				/>
			) : (
				<h2 className="flex justify-center items-start m-4 text-2xl font-medium text-red-500">
					Failed to fetch weather
				</h2>
			)}
		</div>
	);
}
