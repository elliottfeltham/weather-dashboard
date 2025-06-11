import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Portsmouth&units=metric&appid=${process.env.OPENWEATHERMAP_API_KEY}`)

        if (!response.ok) {
            throw new Error("Failed to fetch weather")
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        console.log(`${error} Error`)
        return NextResponse.json({ 
        success: false, 
        error: 'Failed to fetch weather data' 
      },
      { status: 500 })
    }
}