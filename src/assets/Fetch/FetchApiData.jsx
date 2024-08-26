// FetchApiData.jsx
import React, { useState, useEffect } from "react";

export const FetchApiData = () => {

    const [loading, setLoading] = useState(true);
    const [ipData, setIpData] = useState(null);
    const [ipData_de, setIpData_de] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [weatherData_de, setWeatherData_de] = useState(null);
    const [errorEnglishIp, setErrorEnglishIp] = useState(null);
    const [errorGermanIp, setErrorGermanIp] = useState(null);
    const [errorEnglishWeather, setErrorEnglishWeather] = useState(null);
    const [errorGermanWeather, setErrorGermanWeather] = useState(null);

    sessionStorage.clear();

    const fetchRealData = () => {
        //! English IP
        const ipBaseUrl = "https://api.apibundle.io/ip-lookup"
        const ipKey = import.meta.env.VITE_APP_IP_KEY;
        const ipParam = "&language=en";
        const ipUrl = `${ipBaseUrl}${ipKey}${ipParam}`;
        fetch(ipUrl)
            .then((response) => response.json())
            .then((data) => {
                sessionStorage.setItem("ipData", JSON.stringify(data));
                //! German IP
                const ipParam_de = "&language=de";
                const ipUrl_de = `${ipBaseUrl}${ipKey}${ipParam_de}`;
                fetch(ipUrl_de)
                    .then((response) => response.json())
                    .then((data) => {
                        sessionStorage.setItem("ipData_de", JSON.stringify(data));
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
                                sessionStorage.setItem("weatherData", JSON.stringify(data));
                                //! German Weather
                                const weatherRequestParams_de = "?include=days&elements=conditions&lang=de";
                                const weatherUrl_de = `${weatherBaseUrl}${WeatherRequestEndpoint}${weatherRequestParams_de}${weatherApiKey}`;
                                fetch(weatherUrl_de)
                                    .then((response) => response.json())
                                    .then((data) => { sessionStorage.setItem("weatherData_de", JSON.stringify(data)); })
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
            .finally(() => {
                setLoading(false);
            });
        console.log("Real Session Storage Items Set in SessionStorage");
    };

    const fetchMockData = () => {

        const mockLocationCapeTownEN = {
            "ip": "15.177.91.146",
            "type": "ipv4",
            "continent": {
                "name": "Africa",
                "code": "AF",
                "geoname_id": 6255146
            },
            "is_eu": false,
            "country": {
                "name": "South Africa",
                "iso_2_code": "ZA",
                "iso_3_code": "ZAF",
                "flag_emoji": "🇿🇦",
                "flag_unicode": "U+1F1FF U+1F1E6",
                "flag_image": "https://apibundle.io/data/flags/zaf.svg",
                "calling_codes": [
                    "27"
                ],
                "geoname_id": 953987
            },
            "city": {
                "name": "Cape Town",
                "geoname_id": 3369157
            },
            "latitude": -34.0486,
            "longitude": 18.4811,
            "postal_code": "7945",
            "currency": {
                "code": "ZAR",
                "name": "South African rand",
                "symbol": "R"
            },
            "timezone": {
                "name": "Africa/Johannesburg",
                "current_time": "2024-03-05T15:06:07.157+02:00",
                "offset": 120,
                "offset_name": "South Africa Standard Time",
                "is_daylight_saving": false
            },
            "connection": {
                "asn": 16509,
                "aso": "AMAZON-02"
            }
        };

        const mockLocationCapeTownDE = {
            "ip": "15.177.91.146",
            "type": "ipv4",
            "continent": {
                "name": "Afrika",
                "code": "AF",
                "geoname_id": 6255146
            },
            "is_eu": false,
            "country": {
                "name": "Südafrika",
                "iso_2_code": "ZA",
                "iso_3_code": "ZAF",
                "flag_emoji": "🇿🇦",
                "flag_unicode": "U+1F1FF U+1F1E6",
                "flag_image": "https://apibundle.io/data/flags/zaf.svg",
                "calling_codes": [
                    "27"
                ],
                "geoname_id": 953987
            },
            "city": {
                "name": "Kapstadt",
                "geoname_id": 3369157
            },
            "latitude": -34.0486,
            "longitude": 18.4811,
            "postal_code": "7945",
            "currency": {
                "code": "ZAR",
                "name": "South African rand",
                "symbol": "R"
            },
            "timezone": {
                "name": "Africa/Johannesburg",
                "current_time": "2024-03-05T15:06:09.512+02:00",
                "offset": 120,
                "offset_name": "South Africa Standard Time",
                "is_daylight_saving": false
            },
            "connection": {
                "asn": 16509,
                "aso": "AMAZON-02"
            }
        };

        const mockWeatherDataEN = {
            "queryCost": 1,
            "latitude": -33.9191,
            "longitude": 18.422,
            "resolvedAddress": "Cape Town, Western Cape, South Africa",
            "address": "\"CapeTown\",ZA",
            "timezone": "Africa/Johannesburg",
            "tzoffset": 2.0,
            "days": [
                {
                    "conditions": "Partially cloudy"
                }
            ],
            "currentConditions": {
                "conditions": "Partially cloudy"
            }
        };

        const mockWeatherDataDE = {
            "queryCost": 1,
            "latitude": -33.9191,
            "longitude": 18.422,
            "resolvedAddress": "Cape Town, Western Cape, South Africa",
            "address": "CapeTown,za",
            "timezone": "Africa/Johannesburg",
            "tzoffset": 2.0,
            "days": [
                {
                    "conditions": "Regen, Teilweise bewölkt"
                }
            ],
            "currentConditions": {
                "conditions": "Teilweise bewölkt"
            }
        };

        // const ipData = (JSON.stringify(mockLocationCapeTownEN));
        // const ipData_de = (JSON.stringify(mockLocationCapeTownDE));
        // const weatherData = (JSON.stringify(mockWeatherDataEN));
        // const weatherData_de = (JSON.stringify(mockWeatherDataDE));

        setIpData(JSON.stringify(mockLocationCapeTownEN));
        setIpData_de(JSON.stringify(mockLocationCapeTownDE));
        setWeatherData(JSON.stringify(mockWeatherDataEN));
        setWeatherData_de(JSON.stringify(mockWeatherDataDE));

        sessionStorage.setItem("ipData", ipData)
        sessionStorage.setItem("ipData_de", ipData_de)
        sessionStorage.setItem("weatherData", weatherData)
        sessionStorage.setItem("weatherData_de", weatherData_de)

        setLoading(false);
        // setErrorEnglishIp ("123");
        // setErrorGermanIp ("456");
        // setErrorEnglishWeather ("789");
        // setErrorGermanWeather ("101");

        console.log("FetchApiData.jsx Set Mock Session Storage Items");
    };

    // fetchRealData();
    fetchMockData();

    return { loading, errorEnglishIp, errorGermanIp, errorEnglishWeather, errorGermanWeather, /* ipData, ipData_de, weatherData, weatherData_de, */ };
};

