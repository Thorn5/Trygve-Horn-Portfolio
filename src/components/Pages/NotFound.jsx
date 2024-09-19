// NotFound
// import React from 'react';
import { useTranslation } from 'react-i18next';

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div>
    <h1>{t("NotFound.NotFound")}</h1>
  </div>
  )
}

