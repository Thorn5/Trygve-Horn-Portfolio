// AboutSite.jsx
// import React from 'react'
import { useTranslation } from 'react-i18next';

export const AboutSite = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h3>{t("AboutSite.AboutSite")}</h3>
        <h4>{t("AboutSite.Framework")}</h4>
        <p>{t("AboutSite.FrameworkText")}</p>
        <h4>{t("AboutSite.ComponentLibrary")}</h4>
        <p>{t("AboutSite.ComponentLibraryText")}</p>
        <h4>{t("AboutSite.ApiHook")}</h4>
        <p>{t("AboutSite.ApiHookText")}</p>
        <p>{t("AboutSite.ApiHookText2")}</p>
        <h4>{t("AboutSite.Themes")}</h4>
        <p>{t("AboutSite.ThemesText")}</p>
        <h4>{t("AboutSite.LanguageSelection")}</h4>
        <p>{t("AboutSite.LanguageSelectionText")}</p>
        <p>{t("AboutSite.LanguageSelectionText2")}</p>
        <p>{t("AboutSite.LanguageSelectionText3")}</p>
        <h4>{t("AboutSite.Iframe")}</h4>
        <p>{t("AboutSite.IframeText")}</p>
        <h4>{t("AboutSite.Routing")}</h4>
        <p>{t("AboutSite.RoutingText")}</p>
        <p>{t("AboutSite.RoutingText2")}</p>
        <h4>{t("AboutSite.Env")}</h4>
        <p>{t("AboutSite.EnvText")}</p>
        <p>{t("AboutSite.EnvText2")}</p>
      </div>
    </>
  )
}
