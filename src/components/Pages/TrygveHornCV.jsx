// TrygveHornCV.jsx
// import React from 'react'
import { useTranslation } from "react-i18next";

export const TrygveHornCV = () => {
  const { i18n } = useTranslation();
  const CurrentLanguage = i18n.language;

    // Select CV based on current language selection
    const cvSrc = CurrentLanguage === 'en' ? import.meta.env.VITE_APP_CV_PDF : import.meta.env.VITE_APP_CV_PDF_DE;
    
  return (
    <div>
      <iframe
        style={{
          width: '100%',
          height: "calc(100vh - 100px)",
        }}
        src={cvSrc}
      >
      </iframe>
    </div>
  )
}
