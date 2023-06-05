import MuiPhoneNumber from 'material-ui-phone-number';

import { isValidPhoneNumber } from "libphonenumber-js";
import React, { useState } from "react";


interface model {
    nomre: string
    setNomre: Function
}

const GenericMobilePhoneInput = (model: model) => {

    return (

        <MuiPhoneNumber fullWidth size="small" value={model?.nomre} label="Mobil Nömre"
            placeholder="Mobil Nömre" variant="outlined" defaultCountry={'az'}
            onChange={(c: any) => {
                // console.log(c, isValidPhoneNumber(c));
                model?.setNomre(c);  //setNomre(c);

                return true;
            }}
        />
    )
}

export default GenericMobilePhoneInput