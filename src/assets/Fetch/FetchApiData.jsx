// FetchApiData.jsx 
import React from 'react'
import useAsyncAwait from "../Hooks/useAsyncAwait";
import useMockData from "../Hooks/useMockData";
import useMockWeatherData from "../Hooks/useMockWeatherData";

export const FetchApiData = () => {

  //* Use real API call
  // const ipBaseUrl = import.meta.env.VITE_APP_IPBASEURL;
  // const ipRequestEndpoint = "/json/"; // true location
  // const ipUrl = `${ipBaseUrl}${ipRequestEndpoint}`;
  // const { loading: ipLoading, error: ipError, apiData: ipApiData, moduleCalled: ipModuleCalled } = useAsyncAwait(ipUrl);

  //! Use mock API call
  const { loading: ipLoading, error: ipError, apiData: ipApiData, moduleCalled: ipModuleCalled } = useMockData();

  sessionStorage.clear();
  sessionStorage.setItem("ipData", JSON.stringify(ipApiData));
  sessionStorage.setItem("ipModuleCalled", JSON.stringify(ipModuleCalled));

  //* Use real API call
  // const weatherBaseUrl = import.meta.env.VITE_APP_WEATHER_BASE_URL
  // const WeatherRequestEndpoint = `/${ipApiData.city}/today`;
  // const weatherRequestParams = import.meta.env.VITE_APP_WEATHER_REQUEST_PARAMS;
  // const weatherUrl = `${weatherBaseUrl}${WeatherRequestEndpoint}${weatherRequestParams}`;
  // const { loading: weatherLoading, error: weatherError, apiData: weatherApiData, moduleCalled: weatherModuleCalled } = useAsyncAwait(weatherUrl);

  //! Use mock API call
  const { loading: weatherLoading, error: weatherError, apiData: weatherApiData, moduleCalled: weatherModuleCalled } = useMockWeatherData();

  sessionStorage.setItem("weatherData", JSON.stringify(weatherApiData));
  sessionStorage.setItem("weatherModuleCalled", JSON.stringify(weatherModuleCalled));

  return (
    <div>FetchApiData module called</div>
  )
}
