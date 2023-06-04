import i18next from 'i18next';
import { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import { useTheme } from '@mui/material';




const LanguageSelecterUI = () => {
    const [selected, setSelected] = useState(localStorage.getItem("language") || 'US');

    const theme = useTheme();

    function changeLanguage(params: string) {
        i18next.changeLanguage(params.toLowerCase());
        localStorage.setItem("language", params.toUpperCase());
        setSelected(params);
    }

    return (
        <div
            style={{
                width: '200px',
                height: '40px',
                borderRadius: '5px',
                padding: '5px',
                fontSize: '16px',
                backgroundColor: 'white',
                background: "white",
                color: 'black',
            }}
        >
            <ReactFlagsSelect
                selected={selected}
                onSelect={changeLanguage}
                countries={["US", "GB", "DE", "TR", "AZ"]}
                customLabels={{ US: "EN-US", GB: "EN-GB", DE: "DE", TR: "TR", AZ: "AZ" }}
                placeholder="Select Language"
            />
        </div>
    )
}

export default LanguageSelecterUI