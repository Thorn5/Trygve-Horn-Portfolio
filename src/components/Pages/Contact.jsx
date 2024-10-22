// Contact.jsx
// import React from 'react'
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h3>{t("Contact.Contact")}</h3>
        <p>{t("Contact.ContactInvite")}</p>
        <p>{t("Contact.ContactEmail")}{" "}
        <a href= "mailto: trygvehorn+portfolio@gmail.com" target="_blank" rel="noopener noreferrer">trygvehorn+portfolio@gmail.com</a></p>
        <p>{t("Contact.Landline")}</p>
        <p>{t("Contact.Cell")}</p>
        <p>{t("Contact.salutation")}</p>
      </div>
    </>
  )
}
