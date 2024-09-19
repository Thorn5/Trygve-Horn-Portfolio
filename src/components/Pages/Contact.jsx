// Contact.jsx
// import React from 'react'
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        {t("Contact.Contact")}
      </div>
    </>
  )
}