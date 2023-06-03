import { CircularProgress } from '@mui/material'
import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const CustomLoadingComponent = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    )
}

export default CustomLoadingComponent