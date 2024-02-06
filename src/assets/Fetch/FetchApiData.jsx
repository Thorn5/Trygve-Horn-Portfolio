// FetchApiData.jsx 
import React from 'react'
import useAsyncAwait from "../Hooks/useAsyncAwait";
import useMockData from "../Hooks/useMockData";
import useMockWeatherData from "../Hooks/useMockWeatherData";

export const FetchApiData = () => {

  // const { loading: ipLoading, error: ipError, apiData: ipApiData, moduleCalled: ipModuleCalled } = useMockData();

  const ipBaseUrl = import.meta.env.VITE_APP_IPBASEURL;
  const ipRequestEndpoint = "/json/"; // true location
  // const ipRequestEndpoint = "/183.177.124.136/json/"; // mock location
  const ipUrl = `${ipBaseUrl}${ipRequestEndpoint}`;
  const { loading: ipLoading, error: ipError, apiData: ipApiData, moduleCalled: ipModuleCalled } = useAsyncAwait(ipUrl);

  sessionStorage.clear();
  sessionStorage.setItem("ipData", JSON.stringify(ipApiData));
  sessionStorage.setItem("ipModuleCalled", JSON.stringify(ipModuleCalled));

  // const { loading: weatherLoading, error: weatherError, apiData: weatherApiData, moduleCalled: weatherModuleCalled } = useMockWeatherData();

  const weatherBaseUrl = import.meta.env.VITE_APP_WEATHER_BASE_URL
  const WeatherRequestEndpoint = `/${ipApiData.city}/today`;
  const weatherRequestParams = import.meta.env.VITE_APP_WEATHER_REQUEST_PARAMS;
  const weatherUrl = `${weatherBaseUrl}${WeatherRequestEndpoint}${weatherRequestParams}`;
  const { loading: weatherLoading, error: weatherError, apiData: weatherApiData, moduleCalled: weatherModuleCalled } = useAsyncAwait(weatherUrl);

  sessionStorage.setItem("weatherData", JSON.stringify(weatherApiData));
  sessionStorage.setItem("weatherModuleCalled", JSON.stringify(weatherModuleCalled));

  return (
    <div>FetchApiData module called</div>
  )
}


// Original Version
// export default function FetchApiData() {
//   // const { loading: ipLoading, error: ipError, apiData: ipApiData, moduleCalled: ipModuleCalled } = useMockData();

//   const ipBaseUrl = import.meta.env.VITE_APP_IPBASEURL;
//   const ipRequestEndpoint = "/json/"; // true location
//   // const ipRequestEndpoint = "/183.177.124.136/json/"; // mock location
//   const ipUrl = `${ipBaseUrl}${ipRequestEndpoint}`;
//   const { loading: ipLoading, error: ipError, apiData: ipApiData, moduleCalled: ipModuleCalled } = useAsyncAwait(ipUrl);

//   sessionStorage.clear();
//   sessionStorage.setItem("ipData", JSON.stringify(ipApiData));
//   sessionStorage.setItem("ipModuleCalled", JSON.stringify(ipModuleCalled));

//   // const { loading: weatherLoading, error: weatherError, apiData: weatherApiData, moduleCalled: weatherModuleCalled } = useMockWeatherData();

//   const weatherBaseUrl = import.meta.env.VITE_APP_WEATHER_BASE_URL
//   const WeatherRequestEndpoint = `/${ipApiData.city}/today`;
//   const weatherRequestParams = import.meta.env.VITE_APP_WEATHER_REQUEST_PARAMS;
//   const weatherUrl = `${weatherBaseUrl}${WeatherRequestEndpoint}${weatherRequestParams}`;
//   const { loading: weatherLoading, error: weatherError, apiData: weatherApiData, moduleCalled: weatherModuleCalled } = useAsyncAwait(weatherUrl);

//   sessionStorage.setItem("weatherData", JSON.stringify(weatherApiData));
//   sessionStorage.setItem("weatherModuleCalled", JSON.stringify(weatherModuleCalled));
// }
