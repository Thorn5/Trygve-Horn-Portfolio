// Landing.jsx
/* eslint-disable react/prop-types */
// import React from "react";
import { useState, useEffect } from "react";
import { CssBaseline, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FetchApiData } from "../../assets/FetchApiData";

const DisplayLocation = ({ currentIpData }) => {
  // Get translation function and current language
  const { t } = useTranslation();
  if (!currentIpData) {
    return (
      <div>
        <h3>{t("Landing.Loading")}</h3>
      </div>
    )
  } else {
    return (
      <>
        <span>
          {t("Landing.DisplayLocation")} {currentIpData.city.name},{" "}
          {currentIpData.country.name},{" "}
        </span>
      </>
    )
  }
};

const DisplayTime = ({ currentIpData }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString(`en-US`, { timeZone: currentIpData.timezone.name }));
  const { t } = useTranslation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString("en-US", {
        timeZone: currentIpData.timezone.name,
      });
      setTime(newTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentIpData, time]);

  if (!currentIpData) {
    return (
      <div>
        <h3>{t("Landing.Loading")}</h3>
      </div>
    )
  } else {
    return (
      <>
        <span>
          {t("Landing.DisplayTime")} {time},{" "}
        </span>
      </>
    )
  }
};

const DisplayWeather = ({ currentWeather }) => {
  const { t } = useTranslation();
  if (!currentWeather) {
    return (
      <div>
        <h3>{t("Landing.Loading")}</h3>
      </div>
    )
  } else {
    return (
      <>
        <span>
          {t("Landing.DisplayWeather")} {currentWeather.days[0].conditions}.
        </span>
      </>
    )
  }
};

// const CheckIfDataExists = () => {};

export const Landing = () => {
  const { t, i18n } = useTranslation();
  const CurrentLanguage = i18n.language;

  const { 
    ipError_en,
    ipError_de,
    weatherError_en,
    weatherError_de,
    ipData_en,
    ipData_de,
    weatherData_en,
    weatherData_de,
    loading,
  } = FetchApiData();
  const parsedIpData = JSON.parse(ipData_en);
  const parsedIpData_de = JSON.parse(ipData_de);
  const parsedWeatherData = JSON.parse(weatherData_en);
  const parsedWeatherData_de = JSON.parse(weatherData_de);

  // Select dataset based on current language selection
  const currentIpData = CurrentLanguage === 'en' ? parsedIpData : parsedIpData_de;
  const currentWeather = CurrentLanguage === 'en' ? parsedWeatherData : parsedWeatherData_de;

  if (!currentIpData || !currentWeather) {
    return (
      <div>
        <h3>{t("Landing.Loading")}</h3>
      </div>
    )
  } else {
    return (
      <>
        {loading ? (<p>{t("Landing.Loading")}</p>)
          : ipError_en ? (<p>{t("Landing.errorEnglishIp")} {ipError_en}</p>)
            : ipError_de ? (<p>{t("Landing.errorGermanIp")} {ipError_de}</p>)
              : weatherError_en ? (<p>{t("Landing.errorEnglishWeather")} {weatherError_en}</p>)
                : weatherError_de ? (<p>{t("Landing.errorGermanWeather")} {weatherError_de}</p>)
                  : (<>
                    <CssBaseline />
                    <Container sx={{ width: "98%", textAlign: "left" }}>
                      <h3>{t("Landing.Welcome")}</h3>
                      <DisplayLocation currentIpData={currentIpData} />
                      <DisplayTime currentIpData={currentIpData} />
                      <DisplayWeather currentWeather={currentWeather} />
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
}
