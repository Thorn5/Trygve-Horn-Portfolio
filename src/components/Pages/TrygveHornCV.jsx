// TrygveHornCV.jsx
import React from 'react'

export const TrygveHornCV = () => {
  return (
    <div>
      <iframe
        style={{
          width: '100%',
          height: "calc(100vh - 108px)",
        }}
        src={import.meta.env.VITE_APP_CV_PDF}
      >
      </iframe>
    </div>
  )
}
