// Landing.jsx
/* eslint-disable react/prop-types */
// import React from "react";
import { useState, useEffect } from "react";
import { CssBaseline, Container } from "@mui/material";
import { FetchApiData } from "../../assets/FetchApiData";
import { useTranslation } from "react-i18next";

const DisplayLocation = ({ parsedIpData }) => {
  const { t } = useTranslation();
  return (
    <>
      <span>
        {t("Landing.DisplayLocation")} {parsedIpData.city.name},{" "}
        {parsedIpData.country.name},{" "}
      </span>
    </>
  );
};

const DisplayTime = ({ parsedIpData }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString(`en-US`, { timeZone: parsedIpData.timezone.name }));
  const { t } = useTranslation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString("en-US", {
        timeZone: parsedIpData.timezone.name,
      });
      setTime(newTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [parsedIpData, time]);

  return (
    <>
      <span>
        {t("Landing.DisplayTime")} {time},{" "}
      </span>
    </>
  )
};

const DisplayWeather = ({ parsedWeatherData }) => {
  const { t } = useTranslation();
  return (
    <>
      <span>
        {t("Landing.DisplayWeather")} {parsedWeatherData.days[0].conditions}.
      </span>
    </>
  )
};

export const Landing = () => {
  const { t } = useTranslation();
  const { loading, errorEnglishIp, errorGermanIp, errorEnglishWeather, errorGermanWeather, ipData, ipData_de, weatherData, weatherData_de, } = FetchApiData();
  const parsedIpData = JSON.parse(ipData);
  const parsedIpData_de = JSON.parse(ipData_de);
  const parsedWeatherData = JSON.parse(weatherData);
  const parsedWeatherData_de = JSON.parse(weatherData_de);

  if (!ipData || !weatherData) {
    return (
      <div>
        <h3>{t("Landing.Loading")}</h3>
      </div>
    )
  } else {
    return (
      <>
        {loading ? (<p>{t("Landing.Loading")}</p>)
          : errorEnglishIp ? (<p>`{t("Landing.errorEnglishIp")} ${errorEnglishIp}`</p>)
            : errorGermanIp ? (<p>`{t("Landing.errorGermanIp")} ${errorGermanIp}`</p>)
              : errorEnglishWeather ? (<p>`{t("Landing.errorEnglishWeather")} ${errorEnglishWeather}`</p>)
                : errorGermanWeather ? (<p>`{t("Landing.errorGermanWeather")} ${errorGermanWeather}`</p>)
                  : (<>
                    <CssBaseline />
                    <Container sx={{ width: "98%", textAlign: "left" }}>
                    <h3>{t("Landing.Welcome")}</h3>
                      <DisplayLocation parsedIpData={parsedIpData} />
                      <DisplayTime parsedIpData={parsedIpData} />
                      <DisplayWeather parsedWeatherData={parsedWeatherData} />
                      <p> {t("Landing.PreName")}{" "}
                        <a
                          href="http://localhost:5173/AboutMe"
                          target="_self"
                          rel="noopener noreferrer">
                          A. Trygve Horn
                        </a>
                        {t("Landing.Location")}
                      </p>
                      <p>
                      {t("Landing.LearnMore")}{" "}
                        <a
                          href="http://localhost:5173/AboutSite"
                          target="_self"
                          rel="noopener noreferrer">
                          {t("Landing.ThisProject")}
                        </a>
                        {t("Landing.ProjectClick")}
                      </p>
                    </Container>
                  </>)
        }
      </>
    );
  }
};

