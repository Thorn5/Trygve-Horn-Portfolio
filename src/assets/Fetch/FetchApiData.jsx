// FetchApiData.jsx
import { useEffect } from "react";
import /* React, */ { useState, /* useEffect */ } from "react";

export const FetchApiData = () => {

    const [loading, setLoading] = useState(true);
    const [errorEnglishIp, setErrorEnglishIp] = useState(null);
    const [errorGermanIp, setErrorGermanIp] = useState(null);
    const [errorEnglishWeather, setErrorEnglishWeather] = useState(null);
    const [errorGermanWeather, setErrorGermanWeather] = useState(null);
    const [ipData, setIpData] = useState(null);
    const [ipData_de, setIpData_de] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [weatherData_de, setWeatherData_de] = useState(null);

    sessionStorage.clear();

    const fetchRealData = () => {
        useEffect(() => {
            //! English IP
            const ipBaseUrl = "https://api.apibundle.io/ip-lookup"
            const ipKey = import.meta.env.VITE_APP_IP_KEY;
            const ipParam = "&language=en";
            const ipUrl = `${ipBaseUrl}${ipKey}${ipParam}`;
            fetch(ipUrl)
                .then((response) => response.json())
                .then((data) => {
                    const ipDataStringify = JSON.stringify(data);
                    sessionStorage.setItem("ipData", ipDataStringify);
                    setIpData(ipDataStringify);
                    //! German IP
                    const ipParam_de = "&language=de";
                    const ipUrl_de = `${ipBaseUrl}${ipKey}${ipParam_de}`;
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
                            const weatherRequestParams = "?include=days&elements=conditions&lang=en";
                            const weatherApiKey = import.meta.env.VITE_APP_WEATHER_KEY;
                            const weatherUrl = `${weatherBaseUrl}${WeatherRequestEndpoint}${weatherRequestParams}${weatherApiKey}`;
                            fetch(weatherUrl)
                                .then((response) => response.json())
                                .then((data) => {
                                    const weatherDataStringify = JSON.stringify(data);
                                    sessionStorage.setItem("weatherData", weatherDataStringify);
                                    setWeatherData(weatherDataStringify);
                                    //! German Weather
                                    const weatherRequestParams_de = "?include=days&elements=conditions&lang=de";
                                    const weatherUrl_de = `${weatherBaseUrl}${WeatherRequestEndpoint}${weatherRequestParams_de}${weatherApiKey}`;
                                    fetch(weatherUrl_de)
                                        .then((response) => response.json())
                                        .then((data) => {
                                            const weatherData_de_Stringify = JSON.stringify(data);
                                            sessionStorage.setItem("weatherData_de", weatherData_de_Stringify);
                                            setWeatherData_de(weatherData_de_Stringify);
                                        })
                                        .catch((error) => {
                                            console.error("Error fetching German weather data:", error);
                                            setErrorGermanWeather(error);
                                        });
                                })
                                .catch((error) => {
                                    console.error("Error fetching English weather data:", error);
                                    setErrorEnglishWeather(error);
                                });
                        })
                        .catch((error) => {
                            console.error("Error fetching German IP data:", error);
                            setErrorGermanIp(error);
                        });
                })
                .catch((error) => {
                    console.error("Error fetching English IP data:", error);
                    setErrorEnglishIp(error);
                })
                .finally(() => { setLoading(false); });
            console.log("Real Session Storage Items Set in SessionStorage");
            sessionStorage.setItem("API Call", "Real");

            //   return () => {}
        }, [])
    };

    const fetchMockData = () => {

        const mockLocationCapeTownEN = {
            "ip": "91.22.175.33",
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
            "latitude": 51.1789,
            "longitude": 7.0444,
            "postal_code": "42719",
            "currency": {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            },
            "timezone": {
                "name": "Europe/Berlin",
                "current_time": "2024-09-06T12:18:05.757+02:00",
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
            "ip": "91.22.175.33",
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
            "latitude": 51.1789,
            "longitude": 7.0444,
            "postal_code": "42719",
            "currency": {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            },
            "timezone": {
                "name": "Europe/Berlin",
                "current_time": "2024-09-06T12:18:05.842+02:00",
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
                    "conditions": "Partially cloudy"
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
                    "conditions": "Teilweise bewölkt"
                }
            ]
        };

        const ipDataStringify = (JSON.stringify(mockLocationCapeTownEN));
        const ipData_de_Stringify = (JSON.stringify(mockLocationCapeTownDE));
        const weatherDataStringify = (JSON.stringify(mockWeatherDataEN));
        const weatherData_de_Stringify = (JSON.stringify(mockWeatherDataDE));

        sessionStorage.setItem("ipData", ipDataStringify);
        sessionStorage.setItem("ipData_de", ipData_de_Stringify);
        sessionStorage.setItem("weatherData", weatherDataStringify);
        sessionStorage.setItem("weatherData_de", weatherData_de_Stringify);
        sessionStorage.setItem("API Call", "Mocked");
        // setIpData(ipDataStringify);
        // setIpData_de(ipData_de_Stringify);
        // setWeatherData(weatherDataStringify);
        // setWeatherData_de(weatherData_de_Stringify);
        setIpData(mockLocationCapeTownEN);
        setIpData_de(mockLocationCapeTownDE);
        setWeatherData(mockWeatherDataEN);
        setWeatherData_de(mockWeatherDataDE);

        setLoading(false);
        // setErrorEnglishIp ("123");
        // setErrorGermanIp ("456");
        // setErrorEnglishWeather ("789");
        // setErrorGermanWeather ("101");

        console.log("FetchApiData.jsx Set Mock Session Storage Items");
    };

    fetchRealData();
    // fetchMockData();

    return { loading, errorEnglishIp, errorGermanIp, errorEnglishWeather, errorGermanWeather, ipData, ipData_de, weatherData, weatherData_de, };
};

