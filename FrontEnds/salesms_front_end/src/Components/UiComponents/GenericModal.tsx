import { Box, Modal, Paper } from '@mui/material'
import React, { useState } from 'react'
import { ModalCssStyle } from '../CssFolder/ModalCssStyle'



interface model {
    content: JSX.Element
    state: boolean
    onClose: Function
    Width: number
    Height: number
}


const GenericModal = (model: model) => {


    return (
        <div>
            <Modal open={model.state} onClose={() => { model.onClose(false) }}>
                <Paper sx={ModalCssStyle(model.Width, model.Height)}>
                    {model.content}
                </Paper>
            </Modal>
        </div>
    )
}

export default GenericModal