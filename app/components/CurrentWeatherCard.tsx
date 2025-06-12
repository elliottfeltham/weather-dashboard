import React from "react";
import {
	Cloud,
	CloudDrizzle,
	CloudFog,
	CloudLightning,
	CloudRain,
	CloudSun,
	MapPin,
	Snowflake,
	Sun,
} from "lucide-react";

type CurrentWeatherCardProps = {
	currentTemp: number;
	currentCity: string;
	currentCondition: number;
	currentCountry: string;
};

const CurrentWeatherCard = ({
	currentTemp,
	currentCity,
	currentCountry,
	currentCondition,
}: CurrentWeatherCardProps) => {
	const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

	function getWeatherIcon(weatherId: number) {
		const firstDigit = Math.floor(weatherId / 100);

		switch (firstDigit) {
			case 2:
				return <CloudLightning size={50} color="grey" />;
			case 3:
				return <CloudDrizzle size={50} color="grey" />;
			case 5:
				return <CloudRain size={50} color="grey" />;
			case 6:
				return <Snowflake size={50} color="white" />;
			case 7:
				return <CloudFog size={50} color="white" />;
			case 8:
				if (weatherId === 800 || weatherId === 801) {
					return <Sun size={50} color="yellow" />;
				} else if (weatherId === 802) {
					return <CloudSun size={50} color="white" />;
				} else {
					return <Cloud size={50} color="white" />;
				}
			default:
				return <Sun size={50} color="yellow" />;
		}
	}
	return (
		<div className="border rounded-2xl p-10 shadow-xs shadow-white">
			<span className="flex items-center gap-2">
				<MapPin size={20} />
				{`${currentCity}, ${currentCountry}`}
			</span>
			<h2 className="flex justify-center items-start m-4 text-3xl font-semibold">
				{today}
			</h2>
			<div className="flex flex-col justify-center items-center m-4 gap-4 text-2xl font-medium">
				<h2>{currentTemp}°C</h2>
				<h2>{getWeatherIcon(currentCondition)}</h2>
			</div>
		</div>
	);
};

export default CurrentWeatherCard;
