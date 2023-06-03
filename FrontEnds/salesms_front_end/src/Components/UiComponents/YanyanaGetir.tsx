import { Grid } from '@mui/material'
import React from 'react'


interface model {
    compA?: JSX.Element
    compB?: JSX.Element
    compC?: JSX.Element
    compD?: JSX.Element
    compE?: JSX.Element
    compF?: JSX.Element
    sizeA?: number
    sizeB?: number
    sizeC?: number
    sizeD?: number
    sizeE?: number
    sizeF?: number
    stil: React.CSSProperties
}

const YanyanaGetir = (model: model) => {
    return (

        <Grid container alignItems="center" style={model.stil} spacing={2} >

            <Grid item xs={model.sizeA} >
                {model.compA}
            </Grid>

            <Grid item xs={model.sizeB}>
                {model.compB}
            </Grid>

            <Grid item xs={model.sizeC}>
                {model.compC}
            </Grid>

            <Grid item xs={model.sizeD}>
                {model.compD}
            </Grid>
            <Grid item xs={model.sizeE}>
                {model.compE}
            </Grid>
            <Grid item xs={model.sizeF}>
                {model.compF}
            </Grid>
        </Grid>



    )
}

export default YanyanaGetir