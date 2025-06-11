# Weather Dashboard - Product Requirements Document

## Project Overview

This is a learning project to practice Next.js fundamentals by building a weather dashboard.

## Learning Objectives

-   Understand Next.js file-based routing system
-   Practice API routes and server-side data fetching
-   Learn different rendering methods (SSR, SSG, CSR)
-   Work with environment variables and API integration
-   Implement dynamic routing with URL parameters
-   Practice modern React patterns within Next.js framework

## Technical Requirements

### Core Framework

-   **Framework**: Next.js 14+ (App Router)
-   **Styling**: Tailwind CSS
-   **API**: OpenWeatherMap API (free tier)
-   **Deployment**: Vercel (optional for learning deployment)

### Project Structure

```
weather-dashboard/
├── app/
│   ├── api/
│   │   └── weather/
│   │       └── route.ts
│   ├── weather/
│   │   └── [city]/
│   │       └── page.ts
│   ├── components/
│   ├── globals.css
│   ├── layout.ts
│   └── page.ts
├── .env.local
└── package.json
```

## Feature Requirements

### Phase 1 (Day 1) - Core Functionality

**Current Weather Display**

-   Show current weather for a default city (e.g., London)
-   Display: temperature, weather description, humidity, wind speed
-   Include weather icon representation
-   Handle loading states appropriately

**API Integration**

-   Create `/api/weather` route for server-side API calls
-   Implement proper error handling for API failures
-   Store API key securely using environment variables
-   Use OpenWeatherMap Current Weather API endpoint

### Phase 2 (Day 2) - Enhanced Features

**City Search**

-   Search form component for entering city names
-   Real-time search functionality
-   Display search results with current weather
-   Handle invalid city names gracefully

**Dynamic Routing**

-   Implement `/weather/[city]` dynamic routes
-   Pre-fetch weather data on server-side when possible
-   SEO-friendly URLs for different cities

**Extended Forecast**

-   5-day weather forecast display
-   Daily high/low temperatures
-   Weather condition icons for each day
-   Responsive grid layout for forecast cards

### Optional Enhancements

**User Experience**

-   Temperature unit toggle (Celsius/Fahrenheit)
-   Geolocation integration for user's current location
-   Recently searched cities list (localStorage)
-   Loading animations and smooth transitions

**Progressive Enhancement**

-   Offline functionality with cached data
-   PWA capabilities
-   Dark/light theme toggle

## API Specifications

### OpenWeatherMap Endpoints

-   **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
-   **5-Day Forecast**: `https://api.openweathermap.org/data/2.5/forecast`
-   **Required Parameters**: API key, city name or coordinates
-   **Response Format**: JSON with weather data objects

### Environment Variables

```
OPENWEATHERMAP_API_KEY=your_api_key_here
```

## UI/UX Requirements

### Design Principles

-   Clean, minimalist interface focusing on weather information
-   Mobile-first responsive design
-   Accessible color contrasts and typography
-   Intuitive navigation between different city views

### Component Structure

-   `WeatherCard` - Current weather display
-   `SearchForm` - City search functionality
-   `ForecastGrid` - 5-day forecast layout
-   `LoadingSpinner` - Loading state indicator
-   `ErrorMessage` - Error handling display

## Success Criteria

-   Successfully fetch and display current weather data
-   Implement working search functionality
-   Create functional dynamic routes for different cities
-   Demonstrate understanding of Next.js API routes
-   Responsive design that works on mobile and desktop
-   Proper error handling for network failures and invalid inputs

## Learning Guidelines for AI Assistance

### Important Instructions for AI Assistants:

**This is a learning project. I want to understand concepts rather than receive direct solutions.**

**Preferred Response Style:**

-   Provide guidance, hints, and explanations rather than complete code
-   Ask clarifying questions to help the developer think through problems
-   Suggest documentation resources and learning materials
-   Break down complex problems into smaller, manageable steps
-   Explain the "why" behind recommendations, not just the "how"

**Avoid Unless Specifically Requested:**

-   Complete function implementations
-   Copy-paste ready code solutions
-   Doing the work instead of teaching the concepts
-   Overwhelming with advanced patterns before basics are understood

**Encourage:**

-   Experimentation and trial-and-error learning
-   Reading official Next.js documentation
-   Understanding error messages and debugging skills
-   Building features incrementally and testing along the way

## Development Phases

### Phase 1 Focus Areas

-   Next.js project setup and folder structure
-   Creating first API route
-   Understanding server vs client components
-   Basic data fetching patterns
-   Environment variable configuration

### Phase 2 Focus Areas

-   Dynamic routing implementation
-   Form handling and user input validation
-   State management for search functionality
-   Error boundary and loading state patterns
-   Responsive CSS techniques

## Resources for Reference

-   [Next.js Official Documentation](https://nextjs.org/docs)
-   [OpenWeatherMap API Documentation](https://openweathermap.org/api)
-   [React Documentation](https://react.dev)
-   [MDN Web Docs](https://developer.mozilla.org) for JavaScript/CSS reference

---

_This PRD serves as a roadmap for learning Next.js through practical application. Focus on understanding each concept thoroughly before moving to the next phase._
