// Landing.jsx
import React from "react";
// import { TestCalls } from '../../assets/Fetch/TestCalls'

export const DisplayLocation = () => {
  const ipDataString = sessionStorage.getItem('ipData')
  const ipData = JSON.parse(ipDataString);
  if (ipData && Object.keys(ipData).length > 0) {
    return (
      <>
        <div>It looks like you are in or near {ipData.city}, {ipData.country_name},</div>
      </>
    );
  }
}

export const DisplayTime = () => {
  const ipDataString = sessionStorage.getItem('ipData')
  const ipData = JSON.parse(ipDataString);
  if (ipData && Object.keys(ipData).length > 0) {
    const localeTime = (new Date()).toLocaleTimeString(`en-US`, { timeZone: ipData.timezone });
    return (
      <>
        <div>where the time is {localeTime},</div>
      </>
    );
  }
}

export const DisplayWeather = () => {
  const weatherDataString = sessionStorage.getItem('weatherData')
  const weatherData = JSON.parse(weatherDataString);

  if (weatherData && Object.keys(weatherData).length > 0) {
    return (
      <>
        <div>and the weather is {weatherData.currentConditions.conditions}.</div>
      </>
    );
  }
}

export const Intro = () => {
  return (
    <>
      <p>My name is
        {/* A. Trygve Horn */}
        <a href="http://localhost:5173/AboutMe" target="_self" rel="noopener noreferrer"> A. Trygve Horn</a>
        , originally from Cape town, South Africa, and now in Solingen, Germany. </p>
      <p>To learn more about me or this project, click on the hamburger menu at the top left of the page and select a topic of interest.</p>
    </>
  );
}

export const Landing = () => {
  const ipDataString = sessionStorage.getItem("ipData");
  const ipData = JSON.parse(ipDataString);
  if (ipData && Object.keys(ipData).length > 0) {
    return (
      <div>
        {/* <TestCalls /> */}
        <h3>Welcome to my Portfolio!</h3>
        <DisplayLocation />
        <DisplayTime />
        <DisplayWeather />
        <Intro />
      </div>
    );
  }
};

