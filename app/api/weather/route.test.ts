import { describe, expect, it } from "vitest";

import {
	buildWeatherUrl,
	DEFAULT_CITY,
	normaliseCity,
} from "../../../lib/weather";

describe("weather route helpers", () => {
	it("uses London when no city is supplied", () => {
		expect(normaliseCity(null)).toBe(DEFAULT_CITY);
	});

	it("trims and accepts common city names", () => {
		expect(normaliseCity("  St. John's  ")).toBe("St. John's");
	});

	it("rejects query syntax and overlong values", () => {
		expect(() => normaliseCity("London&appid=other")).toThrow();
		expect(() => normaliseCity("a".repeat(81))).toThrow();
	});

	it("encodes provider query parameters", () => {
		const url = new URL(buildWeatherUrl("São Paulo", "test-key"));
		expect(url.origin).toBe("https://api.openweathermap.org");
		expect(url.searchParams.get("q")).toBe("São Paulo");
		expect(url.searchParams.get("appid")).toBe("test-key");
		expect(url.searchParams.get("units")).toBe("metric");
	});
});
