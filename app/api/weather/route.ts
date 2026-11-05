import { NextResponse } from "next/server";
import { buildWeatherUrl, normaliseCity } from "../../../lib/weather";

export async function GET(request: Request) {
	const apiKey = process.env.OPENWEATHERMAP_API_KEY;
	if (!apiKey) {
		return NextResponse.json(
			{ success: false, error: "Weather service is not configured" },
			{ status: 503 },
		);
	}

	let city: string;
	try {
		city = normaliseCity(new URL(request.url).searchParams.get("city"));
	} catch {
		return NextResponse.json(
			{ success: false, error: "Enter a valid city name" },
			{ status: 400 },
		);
	}

	try {
		const response = await fetch(buildWeatherUrl(city, apiKey), {
			cache: "no-store",
			signal: AbortSignal.timeout(8_000),
		});

		if (!response.ok) {
			const status = response.status === 404 ? 404 : 502;
			return NextResponse.json(
				{
					success: false,
					error: status === 404 ? "City not found" : "Weather provider failed",
				},
				{ status },
			);
		}

		return NextResponse.json(await response.json());
	} catch {
		return NextResponse.json(
			{ success: false, error: "Weather provider is unavailable" },
			{ status: 502 },
		);
	}
}
