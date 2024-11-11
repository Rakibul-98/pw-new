import { useEffect, useState } from "react"
import { MdOutlineMyLocation } from "react-icons/md";

export default function WeatherInfo() {

    const [location, setLocation] = useState({});
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ lat: latitude, lon: longitude });
                },
                () => {
                    setLoading(false);
                    setError(true);
                }
            );
        } else {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (location.lat && location.lon) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=358f5574524077c7bdd454614383d17b&units=metric`)
                .then(res => res.json())
                .then(data => setWeatherData(data))
        }
        setLoading(false);
    }, [location.lat, location.lon])

    return (
        <div>
            {loading && <div>Loading weather data...</div>}
            {!loading && !error ? (
                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-2"><span className="text-xl"><MdOutlineMyLocation /></span>{weatherData.name}, {weatherData?.sys?.country}</span>
                    <span className="bg-base-100 text-base-200 py-1 px-3 rounded-badge text-sm">{weatherData?.main?.temp} °C</span>
                </div>
            ):(
                ''
            )}
        </div>
    )
}

