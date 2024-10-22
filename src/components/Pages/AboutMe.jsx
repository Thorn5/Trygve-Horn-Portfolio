// AboutMe.jsx
// import React from 'react'
import { useTranslation } from 'react-i18next';

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h3>{t("AboutMe.AboutMe")}</h3>
        <p>{t("AboutMe.EastLondon")}</p>
        <p>{t("AboutMe.CapeTown")}</p>
        <p>{t("AboutMe.BucketList")}</p>
        <ul>          
        <li>{t("AboutMe.BucketList_Item_1")}</li>
        <li>{t("AboutMe.BucketList_Item_2")}</li>
        <li>{t("AboutMe.BucketList_Item_3")}</li>
        </ul>
        <p>{t("AboutMe.Germany")}</p>
        <p>{t("AboutMe.Work")}</p>
      </div>
    </>
  )
}