import React from "react";
import { Sun } from "lucide-react";

type CurrentWeatherCardProps = {
	currentTemp: string;
	currentLocation: string;
};

const CurrentWeatherCard = ({
	currentTemp,
	currentLocation,
}: CurrentWeatherCardProps) => {
	return (
		<div className="border-2 rounded-2xl p-10 shadow-2xl">
			<h2 className="flex justify-center items-start m-4 text-3xl font-semibold">
				{currentLocation}
			</h2>
			<div className="flex flex-col justify-center items-center m-4 gap-4 text-2xl font-medium">
				<Sun size={40} />
				<h2>{currentTemp}°C</h2>
			</div>
		</div>
	);
};

export default CurrentWeatherCard;
