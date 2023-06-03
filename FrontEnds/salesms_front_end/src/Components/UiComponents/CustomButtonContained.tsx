import { Delete } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'

interface model {
    ikon: JSX.Element
    text: string
    color: string
    onClick: Function
}


const CustomButtonContained = (model: model) => {

    const sty = {
        color: model.color
    }

    return (
        <div>

            <Button variant="contained" fullWidth endIcon={model.ikon} onClick={() => model.onClick()} >
                {model.text}
            </Button>
        </div>
    )
}

export default CustomButtonContained