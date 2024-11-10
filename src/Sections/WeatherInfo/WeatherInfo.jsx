import { useEffect, useState } from "react"
import { MdOutlineMyLocation } from "react-icons/md";

export default function WeatherInfo() {

    const [ip, setIp] = useState('');
    const [location, setLocation] = useState({});
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.ipify.org/?format=json')
            .then(res => res.json())
            .then(data => setIp(data.ip))
    }, [])

    useEffect(() => {
        fetch(`http://ip-api.com/json/${ip}`)
            .then(res => res.json())
            .then(data => setLocation({ lat: data.lat, lon: data.lon, city:data.city, cc:data.countryCode }))
    }, [ip])

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
            {!loading && weatherData && (
                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-2"><span className="text-xl"><MdOutlineMyLocation /></span>{location.city}, {location.cc}</span>
                    <span className="bg-base-100 text-base-200 py-1 px-3 rounded-badge text-sm">{weatherData?.main?.temp} °C</span>
                </div>
            )}
        </div>
    )
}

