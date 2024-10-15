// LanguageSelector

import React, { useState } from "react";
import i18n from '../i18n';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const LanguageSelector = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
        localStorage.setItem("lang", e.target.value);
    }

    return (
        <>
            {/* <select defaultValue={selectedLanguage} onChange={chooseLanguage}>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
            </select> */}
            <Stack direction="row">
                <ToggleButtonGroup
                    value={selectedLanguage}
                    exclusive
                    onChange={chooseLanguage}
                    aria-label="text alignment"
                    sx={{
                        '& .MuiToggleButton-root.Mui-selected': {
                          backgroundColor: '#4c7faf', // Custom background color for selected button
                          color: 'white', // Custom text color for selected button
                        },
                        '& .MuiToggleButton-root': {
                          color: 'grey', // Custom text color for unselected buttons
                          borderColor: '#4c72af', // Custom border color
                          '&:hover': {
                            backgroundColor: '#bbdefb', // Custom hover color
                          },
                        },
                      }}
                >

                    <ToggleButton value="en" aria-label="English Version">EN
                    </ToggleButton>
                    <ToggleButton value="de" aria-label="German Version">DE
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </>
    );
};

// export default LanguageSelector;