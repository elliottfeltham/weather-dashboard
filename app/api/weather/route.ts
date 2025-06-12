import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Portsmouth&units=metric&appid=${process.env.OPENWEATHERMAP_API_KEY}`);
		const data = await response.json();

		if (!response.ok) {
			return NextResponse.json({ success: false, error: 'Failed to fetch weather data' }, { status: 500 });
		}
		return NextResponse.json(data);
	} catch {
		return NextResponse.json({ success: false, error: 'Failed to fetch weather data' }, { status: 500 });
	}
}
