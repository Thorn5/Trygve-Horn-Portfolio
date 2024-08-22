// Landing.jsx
// import React from "react";
import { useState, useEffect } from "react";
import { CssBaseline, Container } from "@mui/material";
import { FetchApiData } from "../../assets/Fetch/FetchApiData";

const DisplayLocation = () => {
  // const ipDataString = sessionStorage.getItem("ipData");
  // const ipData = JSON.parse(ipDataString);
  if (ipData && Object.keys(ipData).length > 0) {
    return (
      <>
        It looks like you are in or near {ipData.city}, {ipData.country_name}
        ,&nbsp;
      </>
    );
  }
};

const DisplayTime = () => {
  // const ipDataString = sessionStorage.getItem("ipData");
  // const ipData = JSON.parse(ipDataString);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(`en-US`, { timeZone: ipData.timezone })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString("en-US", {
        timeZone: ipData.timezone,
      });
      setTime(newTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [ipData, time]);

  return <>where the time is {time},&nbsp;</>;
};

const DisplayWeather = () => {
  // const weatherDataString = sessionStorage.getItem("weatherData");
  // const weatherData = JSON.parse(weatherDataString);
  if (weatherData && Object.keys(weatherData).length > 0) {
    return <>and the weather is {weatherData.currentConditions.conditions}.</>;
  }
};

export const Landing = () => {
  // const { loading, errorEnglishIp, errorGermanIp, errorEnglishWeather, errorGermanWeather, ipData, ipDataDE, weatherData, weatherData_de, } = FetchApiData();
  if (ipData && Object.keys(ipData).length > 0) {
    return (
      <>
        {loading ? (<p>Loading...</p>)
          : errorEnglishIp ? (`EnglishIp error: ${errorEnglishIp}`)
            : errorGermanIp ? (`GermanIp error: ${errorGermanIp}`)
              : errorEnglishWeather ? (`EnglishWeather error: ${errorEnglishWeather}`)
                : errorGermanWeather ? (`GermanWeather error: ${errorGermanWeather}`)
                  : (<>
                    <CssBaseline />
                    <Container sx={{ width: "98%", textAlign: "left" }}>
                      <h3>Welcome to my Portfolio!</h3>
                      <DisplayLocation />
                      <DisplayTime />
                      <DisplayWeather />
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
        }      </>);
  }
};
