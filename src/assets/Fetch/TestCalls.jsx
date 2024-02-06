// TestCalls.jsx
import React from "react";

// const TestCalls = () => {
  export const TestCalls = () => {
  const ipDataString = sessionStorage.getItem("ipData");
  const ipData = JSON.parse(ipDataString);
  if (ipData && Object.keys(ipData).length > 0) {
    console.log(ipData);
  }
  const weatherDataString = sessionStorage.getItem("weatherData");
  const weatherData = JSON.parse(weatherDataString);
  if (weatherData && Object.keys(weatherData).length > 0) {
    console.log(weatherData);
  }
  return (
    <div>TestCalls module Called</div>
  )
};
// export default TestCalls;
