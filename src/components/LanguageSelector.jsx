// LanguageSelector

import React, { useState } from "react";
import i18n from '../i18n';

const setStoredData = () => {
    console.log("setStoredData function triggered, not functional yet");
    // const [city, setCity] = useState(null);
    // const [country, setCountry] = useState(null);
    // const [weather, setWeather] = useState(null);

    // if (sessionStorage.length > 0) {
    //     const city = sessionStorage.getItem(city);
    //     // setCity();
    //     // setCountry();
    //     // setWeather();

    // } else {
    //     console.log("setStoredData(): Session Storage empty");
    // }


    // return ();
};

export const LanguageSelector = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.



    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
        localStorage.setItem("lang", e.target.value);
        setStoredData();
    }



    return (
        <select defaultValue={selectedLanguage} onChange={chooseLanguage}>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
        </select>
    );
};

// export default LanguageSelector;