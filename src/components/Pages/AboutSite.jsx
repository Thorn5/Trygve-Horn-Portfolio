// AboutSite.jsx
// import React from 'react'
import { useTranslation } from 'react-i18next';

export const AboutSite = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        {t("AboutSite.AboutSite")}
      </div>
    </>
  )
}