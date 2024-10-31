// Projects.jsx
// import React from 'react';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation();
  const siteBaseUrl = import.meta.env.VITE_APP_SITE_URL_STUB;

  return (
    <>
      <div>
        <h3>{t("Projects.Projects")}</h3>
        <p>{t("Projects.Intro")}</p>
        <p>{t("Projects.FocusStart")}{" "}
          <a
            href="https://github.com/Thorn5/Trygve-Horn-Portfolio"
            target="_blank"
            rel="noopener noreferrer">
            {t("Projects.FocusLink")}
          </a>{" "}
          {t("Projects.FocusOrThe")}{" "}
          <a
            href={`${siteBaseUrl}/AboutSite`}
            target="_self"
            rel="noopener noreferrer">
            {t("Projects.FocusDescription")}
          </a>{" "}
          {t("Projects.FocusFinish")}</p>
        <p>{t("Projects.Plans")}</p>
        <p>{t("Projects.CurrentStatus")}{" "}
          <a
            href="https://show-my-ip-react-vite.onrender.com/"
            target="_blank"
            rel="noopener noreferrer">
            {t("Projects.ShowMyIp")}
          </a>
          {t("Projects.ShowMyIpConnector")}
          <a
            href="https://github.com/Thorn5/Show-My-IP-React-Vite"
            target="_blank"
            rel="noopener noreferrer">
        {t("Projects.ShowMyIpGitHub")}
          </a></p>
          <p>
          {t("Projects.BrewXotic")}
          <a
            href="https://brewxotic-frontend.onrender.com"
            target="_blank"
            rel="noopener noreferrer">
        {t("Projects.BrewXoticLink")}
          </a>
          {t("Projects.BrewXoticConnector")}
          <a
            href="https://github.com/Thorn5/BrewXotic-Frontend"
            target="_blank"
            rel="noopener noreferrer">
        {t("Projects.BrewXoticFrontEnd")}
          </a>
          {t("Projects.BrewXoticConnector2")}
          <a
            href="https://github.com/Thorn5/BrewXotic-Backend"
            target="_blank"
            rel="noopener noreferrer">
        {t("Projects.BrewXoticBackEnd")}
          </a>
          {t("Projects.BrewXoticConclude")}
          </p>
          <p>{t("Projects.BrewXoticWarning")}</p>
      </div >
    </>
  )
}

