// FetchApiData.jsx
import { useEffect } from "react";
import /* React, */ { useState, /* useEffect */ } from "react";

export const FetchApiData = () => {

    const [ipError_en, setIpError_en] = useState(null);
    const [ipError_de, setIpError_de] = useState(null);
    const [weatherError_en, setWeatherError_en] = useState(null);
    const [weatherError_de, setWeatherError_de] = useState(null);
    const [ipData_en, setIpData_en] = useState(null);
    const [ipData_de, setIpData_de] = useState(null);
    const [weatherData_en, setWeatherData_en] = useState(null);
    const [weatherData_de, setWeatherData_de] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchRealData_Fetch = () => {
        //! English IP
        const ipBaseUrl = "https://api.apibundle.io/ip-lookup"
        const ipKey = import.meta.env.VITE_APP_IP_KEY;
        const ipParam_en = "&language=en";
        const ipParam_de = "&language=de";
        const ipUrl_en = `${ipBaseUrl}${ipKey}${ipParam_en}`; 
        const ipUrl_de = `${ipBaseUrl}${ipKey}${ipParam_de}`;
        fetch(ipUrl_en)
            .then((response) => response.json())
            .then((data) => {
                const ipData_en_Stringify = JSON.stringify(data);
                sessionStorage.setItem("ipData_en", ipData_en_Stringify);
                setIpData_en(ipData_en_Stringify);
                //! German IP
                fetch(ipUrl_de)
                    .then((response) => response.json())
                    .then((data) => {
                        const ipData_de_Stringify = JSON.stringify(data);
                        sessionStorage.setItem("ipData_de", ipData_de_Stringify);
                        setIpData_de(ipData_de_Stringify);
                        //! English Weather
                        const parsedLocationData = JSON.parse(JSON.stringify(data));
                        const sanitisedCityName = JSON.stringify(parsedLocationData.city.name.split(" ").join(""));
                        const weatherBaseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
                        const countryCode = data.country.iso_2_code;
                        const WeatherRequestEndpoint = `/${sanitisedCityName},${countryCode}/today`;
                        const weatherRequestParams_en = "?include=days&elements=conditions&lang=en";
                        const weatherApiKey = import.meta.env.VITE_APP_WEATHER_KEY;
                        const weatherUrl_en = `${weatherBaseUrl}${WeatherRequestEndpoint}${weatherRequestParams_en}${weatherApiKey}`;
                        const weatherRequestParams_de = "?include=days&elements=conditions&lang=de";
                        const weatherUrl_de = `${weatherBaseUrl}${WeatherRequestEndpoint}${weatherRequestParams_de}${weatherApiKey}`;
                        fetch(weatherUrl_en)
                            .then((response) => response.json())
                            .then((data) => {
                                const weatherData_en_Stringify = JSON.stringify(data);
                                sessionStorage.setItem("weatherData_en", weatherData_en_Stringify);
                                setWeatherData_en(weatherData_en_Stringify);
                                //! German Weather
                                fetch(weatherUrl_de)
                                    .then((response) => response.json())
                                    .then((data) => {
                                        const weatherData_de_Stringify = JSON.stringify(data);
                                        sessionStorage.setItem("weatherData_de", weatherData_de_Stringify);
                                        setWeatherData_de(weatherData_de_Stringify);
                                    })
                                    .catch((error) => {
                                        console.error("Error fetching German weather data:", error);
                                        setWeatherError_de(error);
                                    });
                            })
                            .catch((error) => {
                                console.error("Error fetching English weather data:", error);
                                setWeatherError_en(error);
                            });
                    })
                    .catch((error) => {
                        console.error("Error fetching German IP data:", error);
                        setIpError_de(error);
                    });
            })
            .catch((error) => {
                console.error("Error fetching English IP data:", error);
                setIpError_en(error);
            })
            .finally(() => { setLoading(false); });
        console.log("Real Session Storage Items Set in SessionStorage");
        sessionStorage.setItem("fetchTimeStamp", new Date().getTime());
        sessionStorage.setItem("API Call", "Real");
    };

    const fetchRealData_Async = async () => {
        setLoading(true);

        // English IP fetch

        const ipBaseUrl = "https://api.apibundle.io/ip-lookup"
        const ipKey = import.meta.env.VITE_APP_IP_KEY;
        const ipParam_en = "&language=en";
        const ipParam_de = "&language=de";
        const ipUrl_en = `${ipBaseUrl}${ipKey}${ipParam_en}`;
        const ipUrl_de = `${ipBaseUrl}${ipKey}${ipParam_de}`;

        try {
            const response_en = await fetch(ipUrl_en);
            const data_en = await response_en.json();
            const ipData_en_Stringify = JSON.stringify(data_en);

            // Save to session storage and state
            sessionStorage.setItem("ipData_en", ipData_en_Stringify);
            setIpData_en(ipData_en_Stringify);

            // German IP fetch
            const response_de = await fetch(ipUrl_de);
            const data_de = await response_de.json();
            const ipData_de_Stringify = JSON.stringify(data_de);

            // Save to session storage and state
            sessionStorage.setItem("ipData_de", ipData_de_Stringify);
            setIpData_de(ipData_de_Stringify);

            // English Weather fetch
            const parsedLocationData = JSON.parse(ipData_en_Stringify);
            const sanitisedCityName = parsedLocationData.city.name.replace(/\s/g, "");
            const weatherBaseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
            const countryCode = parsedLocationData.country.iso_2_code;
            const WeatherRequestEndpoint = `/${sanitisedCityName},${countryCode}/today`;
            const weatherRequestParams_en = "?include=days&elements=conditions&lang=en";
            const weatherRequestParams_de = "?include=days&elements=conditions&lang=de";
            const weatherApiKey = import.meta.env.VITE_APP_WEATHER_KEY;
            const weatherUrl_en = `${weatherBaseUrl}${WeatherRequestEndpoint}${weatherRequestParams_en}${weatherApiKey}`;
            const weatherUrl_de = `${weatherBaseUrl}${WeatherRequestEndpoint}${weatherRequestParams_de}${weatherApiKey}`;

            const weatherResponse_en = await fetch(weatherUrl_en);
            const weatherData_en_Result = await weatherResponse_en.json();
            const weatherData_en_Stringify = JSON.stringify(weatherData_en_Result);

            // Save to session storage and state
            sessionStorage.setItem("weatherData_en", weatherData_en_Stringify);
            setWeatherData_en(weatherData_en_Stringify);

            // German Weather fetch

            const weatherResponse_de = await fetch(weatherUrl_de);
            const weatherData_de_Result = await weatherResponse_de.json();
            const weatherData_de_Stringify = JSON.stringify(weatherData_de_Result);

            // Save to session storage and state
            sessionStorage.setItem("weatherData_de", weatherData_de_Stringify);
            setWeatherData_de(weatherData_de_Stringify);

        } catch (error) {
            if (error.message.includes("ipUrl")) {
            setIpError_en(error);
            console.error("Error fetching English IP data:", error);
            } else if (error.message.includes("ipUrl_de")) {
            setIpError_de(error);
            console.error("Error fetching German IP data:", error);
            } else if (error.message.includes("weatherUrl")) {
            setWeatherError_en(error);
            console.error("Error fetching English weather data:", error);
            } else if (error.message.includes("weatherUrl_de")) {
            setWeatherError_de(error);
            console.error("Error fetching German weather data:", error);
            }
            console.log(error);
        } finally {
            setLoading(false);
            // Set final session storage items
            sessionStorage.setItem("fetchTimeStamp", new Date().getTime());
            sessionStorage.setItem("API Call", "Real");
            console.log("Real Session Storage Items Set in SessionStorage");
        }
    };

    const fetchMockData = () => {
        const mockLocationCapeTownEN = {
            "ip": "87.153.51.90",
            "type": "ipv4",
            "continent": {
                "name": "Europe",
                "code": "EU",
                "geoname_id": 6255148
            },
            "is_eu": true,
            "country": {
                "name": "Germany",
                "iso_2_code": "DE",
                "iso_3_code": "DEU",
                "flag_emoji": "🇩🇪",
                "flag_unicode": "U+1F1E9 U+1F1EA",
                "flag_image": "https://apibundle.io/data/flags/deu.svg",
                "calling_codes": [
                    "49"
                ],
                "geoname_id": 2921044
            },
            "city": {
                "name": "Solingen",
                "geoname_id": 2831580
            },
            "latitude": 51.1729,
            "longitude": 7.095,
            "postal_code": "42651",
            "currency": {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            },
            "timezone": {
                "name": "Europe/Berlin",
                "current_time": "2024-09-16T12:03:05.634+02:00",
                "offset": 120,
                "offset_name": "Central European Summer Time",
                "is_daylight_saving": true
            },
            "connection": {
                "asn": 3320,
                "aso": "Deutsche Telekom AG"
            }
        };
        const mockLocationCapeTownDE = {
            "ip": "87.153.51.90",
            "type": "ipv4",
            "continent": {
                "name": "Europa",
                "code": "EU",
                "geoname_id": 6255148
            },
            "is_eu": true,
            "country": {
                "name": "Deutschland",
                "iso_2_code": "DE",
                "iso_3_code": "DEU",
                "flag_emoji": "🇩🇪",
                "flag_unicode": "U+1F1E9 U+1F1EA",
                "flag_image": "https://apibundle.io/data/flags/deu.svg",
                "calling_codes": [
                    "49"
                ],
                "geoname_id": 2921044
            },
            "city": {
                "name": "Solingen",
                "geoname_id": 2831580
            },
            "latitude": 51.1729,
            "longitude": 7.095,
            "postal_code": "42651",
            "currency": {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            },
            "timezone": {
                "name": "Europe/Berlin",
                "current_time": "2024-09-16T12:03:05.745+02:00",
                "offset": 120,
                "offset_name": "Central European Summer Time",
                "is_daylight_saving": true
            },
            "connection": {
                "asn": 3320,
                "aso": "Deutsche Telekom AG"
            }
        };
        const mockWeatherDataEN = {
            "queryCost": 1,
            "latitude": 51.1668,
            "longitude": 7.08844,
            "resolvedAddress": "Solingen, Nordrhein-Westfalen, Deutschland",
            "address": "\"Solingen\",DE",
            "timezone": "Europe/Berlin",
            "tzoffset": 2,
            "days": [
                {
                    "conditions": "Meh"
                }
            ]
        };
        const mockWeatherDataDE = {
            "queryCost": 1,
            "latitude": 51.1668,
            "longitude": 7.08844,
            "resolvedAddress": "Solingen, Nordrhein-Westfalen, Deutschland",
            "address": "\"Solingen\",DE",
            "timezone": "Europe/Berlin",
            "tzoffset": 2,
            "days": [
                {
                    "conditions": "Naja"
                }
            ]
        };

        const timer = setTimeout(() => {

            const ipData_en_Stringify = (JSON.stringify(mockLocationCapeTownEN));
            const ipData_de_Stringify = (JSON.stringify(mockLocationCapeTownDE));
            const weatherData_en_Stringify = (JSON.stringify(mockWeatherDataEN));
            const weatherData_de_Stringify = (JSON.stringify(mockWeatherDataDE));

            sessionStorage.setItem("ipData_en", ipData_en_Stringify);
            sessionStorage.setItem("ipData_de", ipData_de_Stringify);
            sessionStorage.setItem("weatherData_en", weatherData_en_Stringify);
            sessionStorage.setItem("weatherData_de", weatherData_de_Stringify);
            sessionStorage.setItem("API Call", "Mocked");
            setIpData_en(ipData_en_Stringify);
            setIpData_de(ipData_de_Stringify);
            setWeatherData_en(weatherData_en_Stringify);
            setWeatherData_de(weatherData_de_Stringify);

            // setIpError_en ("123");
            // setIpError_de ("456");
            // setWeatherError_en ("789");
            // setWeatherError_de ("101");

            sessionStorage.setItem("fetchTimeStamp", new Date().getTime());
            setLoading(false);
            console.log("FetchApiData.jsx Set Mock Session Storage Items");
        }, 250); // delay in ms
        return () => clearTimeout(timer);
    };

    useEffect(() => {
        // fetchRealData_Fetch();
        fetchRealData_Async();
        // fetchMockData();
    }, []);

    return {
        ipError_en,
        ipError_de,
        weatherError_en,
        weatherError_de,
        ipData_en,
        ipData_de,
        weatherData_en,
        weatherData_de,
        loading,
    };
};

