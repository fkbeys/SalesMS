import { Delete } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'

interface model {
    ikon: JSX.Element
    text: string
    color: string
    onClick: Function
}


const CustomButton = (model: model) => {

    const sty = {
        color: model.color
    }

    return (
        <div>
            <IconButton style={sty} aria-label="delete" onClick={() => model.onClick()} >
                {model.ikon}
            </IconButton>
        </div>
    )
}

export default CustomButton