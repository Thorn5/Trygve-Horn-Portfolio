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

export const Landing = () => {
  const [loading, setLoading] = useState(true);
  const [errorEnglishIp, setErrorEnglishIp] = useState(null);
  const [errorGermanIp, setErrorGermanIp] = useState(null);
  const [errorEnglishWeather, setErrorEnglishWeather] = useState(null);
  const [errorGermanWeather, setErrorGermanWeather] = useState(null);
  const [ipData, setIpData] = useState(null);
  const [ipData_de, setIpData_de] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherData_de, setWeatherData_de] = useState(null);
  const { t, i18n } = useTranslation();
  const CurrentLanguage = i18n.language;

  const fetchData = () => {
    const { 
      apiLoading,
      apiErrorEnglishIp,
      apiErrorGermanIp,
      apiErrorEnglishWeather,
      apiErrorGermanWeather,
      apiIpData,
      apiIpData_de,
      apiWeatherData,
      apiWeatherData_de,
    } = FetchApiData();
    const parsedIpData = JSON.parse(apiIpData);
    const parsedIpData_de = JSON.parse(apiIpData_de);
    const parsedWeatherData = JSON.parse(apiWeatherData);
    const parsedWeatherData_de = JSON.parse(apiWeatherData_de);
    setLoading(apiLoading);
    setErrorEnglishIp(apiErrorEnglishIp);
    setErrorGermanIp(apiErrorGermanIp);
    setErrorEnglishWeather(apiErrorEnglishWeather);
    setErrorGermanWeather(apiErrorGermanWeather);
    setIpData(parsedIpData);
    setIpData_de(parsedIpData_de);
    setWeatherData(parsedWeatherData);
    setWeatherData_de(parsedWeatherData_de);
  };

  // Select dataset based on current language selection
  const currentIpData = CurrentLanguage === 'en' ? ipData : ipData_de;
  const currentWeather = CurrentLanguage === 'en' ? weatherData : weatherData_de;

  fetchData();

  if (!ipData || !ipData_de || !weatherData || !weatherData_de) {
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


