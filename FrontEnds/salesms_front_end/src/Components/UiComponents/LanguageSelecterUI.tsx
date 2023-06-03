import i18next from 'i18next';
import { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import { useTheme } from '@mui/material';




const LanguageSelecterUI = () => {
    const [selected, setSelected] = useState(localStorage.getItem("language") || 'az');

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

                countries={["AZ"]}
                placeholder="Dil Seçimi"
            />
        </div>
    )
}

export default LanguageSelecterUI