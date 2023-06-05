
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';

import toast from 'react-hot-toast';
import { RoundByTwo } from '../../Consts/RoundByTwo';
import { StringToDoubleNonNegative } from '../../Consts/StringToDoubleNonNegative';


interface model {
    value: number
    setValue: Function
    title: string
    title2?: string
    disabled?: boolean
    min?: number
    max?: number
    errorMessage?: string
}

const GenericNumericInput = (model: model) => {

    function valueHandler(value: number) {

        if (model.min != undefined && value < model.min) {
            toast.error("Reqem " + model.min + " den az olabilmez!");
            return;
        }


        if (model.max != undefined && value > model.max) {
            toast.error("Reqem " + model.max + " den çox olabilmez!");
            return;
        }

        model.setValue(value);
    }



    return (

        <FormControl fullWidth>
            <InputLabel id="lblNumm" disabled={model.disabled} > {model.title}  </InputLabel>
            <OutlinedInput fullWidth disabled={model.disabled} value={RoundByTwo(model.value)}
                placeholder={model.title} label={model.title} type="number"

                onChange={(x) => { valueHandler(StringToDoubleNonNegative(x.target.value)) }}
                endAdornment={<InputAdornment position="end">{model.title2}</InputAdornment>}
            />
        </FormControl>
    )
}

export default GenericNumericInput