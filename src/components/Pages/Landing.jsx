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
      It looks like you are in or near {parsedIpData.city.name}, {parsedIpData.country.name}
      ,&nbsp;
    </>
  );
};

const DisplayTime = ({ parsedIpData }) => {
  // const ipDataString = sessionStorage.getItem("ipData");
  // const ipData = JSON.parse(ipDataString);
  const [time, setTime] = useState(new Date().toLocaleTimeString(`en-US`, { timeZone: parsedIpData.timezone.name }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString("en-US", {
        timeZone: parsedIpData.timezone.name,
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
  return <>and the weather is {parsedWeatherData.days[0].conditions}.</>;
};

export const Landing = () => {
  const { loading, errorEnglishIp, errorGermanIp, errorEnglishWeather, errorGermanWeather, ipData, ipData_de, weatherData, weatherData_de, } = FetchApiData();
  const parsedIpData = JSON.parse(ipData);
  const parsedIpData_de = JSON.parse(ipData_de);
  const parsedWeatherData = JSON.parse(weatherData);
  const parsedWeatherData_de = JSON.parse(weatherData_de);

  if (!ipData || !weatherData) {
    return (
      <div>
        <h3>The data has not resolved yet. Please wait a moment.</h3>
      </div>
    )
  } else {
    return (
      <>
        {loading ? (<p>Loading...</p>)
          : errorEnglishIp ? (`English Location error: ${errorEnglishIp}`)
            : errorGermanIp ? (`German Location error: ${errorGermanIp}`)
              : errorEnglishWeather ? (`English Weather error: ${errorEnglishWeather}`)
                : errorGermanWeather ? (`German Weather error: ${errorGermanWeather}`)
                  : (<>
                    <CssBaseline />
                    <Container sx={{ width: "98%", textAlign: "left" }}>
                      <h3>Welcome to my Portfolio!</h3>
                      <DisplayLocation parsedIpData={parsedIpData} />
                      <DisplayTime parsedIpData={parsedIpData} />
                      <DisplayWeather parsedWeatherData={parsedWeatherData} />
                      <p>My name is{" "}
                        <a
                          href="http://localhost:5173/AboutMe"
                          target="_self"
                          rel="noopener noreferrer">
                          A. Trygve Horn
                        </a>, originally from Cape town, South Africa, and now living in Solingen,
                        Germany.
                      </p>
                      <p>
                        To learn more about me or{" "}
                        <a
                          href="http://localhost:5173/AboutSite"
                          target="_self"
                          rel="noopener noreferrer">
                          this project
                        </a>, click on the hamburger menu on
                        the left of the Title Bar and select a topic of interest.
                      </p>
                    </Container>
                  </>)
        }
      </>
    );
  }
};

