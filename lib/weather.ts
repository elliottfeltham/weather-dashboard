export const DEFAULT_CITY = "London";
const MAX_CITY_LENGTH = 80;

export function normaliseCity(value: string | null): string {
	const city = (value ?? DEFAULT_CITY).trim() || DEFAULT_CITY;
	if (city.length > MAX_CITY_LENGTH || !/^[\p{L}\p{M} .'-]+$/u.test(city)) {
		throw new Error("Invalid city name");
	}
	return city;
}

export function buildWeatherUrl(city: string, apiKey: string): string {
	const url = new URL("https://api.openweathermap.org/data/2.5/weather");
	url.search = new URLSearchParams({
		q: city,
		units: "metric",
		appid: apiKey,
	}).toString();
	return url.toString();
}
