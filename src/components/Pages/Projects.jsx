// Projects.jsx
// import React from 'react';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation();
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
            href="http://localhost:5173/AboutSite"
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
          </a></p>
        <p>{t("Projects.ShowMyIpGitHub")}{" "}
          <a
            href="https://github.com/Thorn5/Show-My-IP-React-Vite"
            target="_blank"
            rel="noopener noreferrer">
            {t("Projects.ShowMyIpGitHubLink")}
          </a></p>
      </div >
    </>
  )
}

