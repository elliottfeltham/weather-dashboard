import { NextResponse } from 'next/server';

export async function GET() {
	const API_KEY = process.env.OPENWEATHERMAP_API_KEY
	try {
		// Neaten API calls with a avriable for the city name and the API_KEY variables
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${API_KEY}`);
		const data = await response.json();

		if (!response.ok) {
			return NextResponse.json({ success: false, error: 'Failed to fetch weather data' }, { status: 500 });
		}
		return NextResponse.json(data);
	} catch {
		return NextResponse.json({ success: false, error: 'Failed to fetch weather data' }, { status: 500 });
	}
}
