// Landing.jsx
/* eslint-disable react/prop-types */
// import React from "react";
import { useState, useEffect } from "react";
import { CssBaseline, Container } from "@mui/material";
import { FetchApiData } from "../../assets/Fetch/FetchApiData";

const DisplayLocation = ({ parsedIpData }) => {
  // const ipDataString = sessionStorage.getItem("ipData");
  // const ipData = JSON.parse(ipDataString);
  return (
    <>
      It looks like you are in or near {parsedIpData.city}, {parsedIpData.country_name}
      ,&nbsp;
    </>
  );
};

const DisplayTime = ({ parsedIpData }) => {
  // const ipDataString = sessionStorage.getItem("ipData");
  // const ipData = JSON.parse(ipDataString);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(`en-US`, { timeZone: parsedIpData.timezone })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString("en-US", {
        timeZone: parsedIpData.timezone,
      });
      setTime(newTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [parsedIpData, time]);

  return <>where the time is {time},&nbsp;</>;
};

const DisplayWeather = ({ parsedWeatherData }) => {
  // const weatherDataString = sessionStorage.getItem("weatherData");
  // const weatherData = JSON.parse(weatherDataString);
  return <>and the weather is {parsedWeatherData.currentConditions.conditions}.</>;
};

export const Landing = () => {
  const { loading, errorEnglishIp, errorGermanIp, errorEnglishWeather, errorGermanWeather, ipData, ipData_de, weatherData, weatherData_de, } = FetchApiData();
  const parsedIpData = JSON.parse(ipData);
  const parsedIpData_de = JSON.parse(ipData_de);
  const parsedWeatherData = JSON.parse(weatherData);
  const parsedWeatherData_de = JSON.parse(weatherData_de);

  // /* const ipDataString = sessionStorage.getItem("ipData");
  // const ipData = JSON.parse(ipDataString); */
  //  if ((parsedIpData && Object.keys(parsedIpData).length > 0) && (parsedWeatherData && Object.keys(parsedWeatherData).length > 0)) {
  //   return (
  //     <>
  //       {loading ? (<p>Loading...</p>)
  //         : errorEnglishIp ? (`EnglishIp error: ${errorEnglishIp}`)
  //           : errorGermanIp ? (`GermanIp error: ${errorGermanIp}`)
  //             : errorEnglishWeather ? (`EnglishWeather error: ${errorEnglishWeather}`)
  //               : errorGermanWeather ? (`GermanWeather error: ${errorGermanWeather}`)
  //                 : (<>
  //                   <CssBaseline />
  //                   <Container sx={{ width: "98%", textAlign: "left" }}>
  //                     <h3>Welcome to my Portfolio!</h3>
  //                     <DisplayLocation parsedIpData={parsedIpData} />
  //                     <DisplayTime parsedIpData={parsedIpData} />
  //                     <DisplayWeather parsedWeatherData={parsedWeatherData} />
  //                     <p>My name is{" "}
  //                       <a
  //                         href="http://localhost:5173/AboutMe"
  //                         target="_self"
  //                         rel="noopener noreferrer">
  //                         A. Trygve Horn
  //                       </a>, originally from Cape town, South Africa, and now living in Solingen,
  //                       Germany.
  //                     </p>
  //                     <p>
  //                       To learn more about me or{" "}
  //                       <a
  //                         href="http://localhost:5173/AboutSite"
  //                         target="_self"
  //                         rel="noopener noreferrer">
  //                         this project
  //                       </a>, click on the hamburger menu on
  //                       the left of the Title Bar and select a topic of interest.
  //                     </p>
  //                   </Container>
  //                 </>)
  //       }
  //     </>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h1>Data not available yet. Please refresh the page or try again later</h1>
  //     </div>
  //   )
  // }

  if (loading) { // Render loading state while data is being fetched
    return <p>Loading...</p>;
  }

  // Render error states if any errors occurred during data fetching
  if (errorEnglishIp) return <p>English IP error: {errorEnglishIp.message}</p>;
  if (errorGermanIp) return <p>German IP error: {errorGermanIp.message}</p>;
  if (errorEnglishWeather) return <p>English Weather error: {errorEnglishWeather.message}</p>;
  if (errorGermanWeather) return <p>German Weather error: {errorGermanWeather.message}</p>;

  // Ensure all required data is available before rendering the main content
  if (!ipData || !weatherData) {
    return <p>Data not available yet. Please try again.</p>;
  }

  // Render the main content
  return (
    <>
      <CssBaseline />
      <Container sx={{ width: "98%", textAlign: "left" }}>
        <h3>Welcome to my Portfolio!</h3>
        <DisplayLocation parsedIpData={parsedIpData} />
        <DisplayTime parsedIpData={parsedIpData} />
        <DisplayWeather parsedWeatherData={parsedWeatherData} />
        <p>
          My name is{" "}
          <a
            href="http://localhost:5173/AboutMe"
            target="_self"
            rel="noopener noreferrer"
          >
            A. Trygve Horn
          </a>
          , originally from Cape town, South Africa, and now living in Solingen,
          Germany.
        </p>
        <p>
          To learn more about me or{" "}
          <a
            href="http://localhost:5173/AboutSite"
            target="_self"
            rel="noopener noreferrer"
          >
            this project
          </a>
          , click on the hamburger menu on the left of the Title Bar and select
          a topic of interest.
        </p>
      </Container>
    </>
  );
};

