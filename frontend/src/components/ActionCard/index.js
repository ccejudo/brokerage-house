import React from 'react'
import { Grid } from '@mui/material'
import BeenhereIcon from '@mui/icons-material/Beenhere';
import './ActionCard.css'

function ActionCard(props) {
    return (
        <Grid item xs={5} justifyContent='center' className='card' onClick={() => props.setDashboard(props.index)}>
            <h3>{props.action.text}</h3>
            <BeenhereIcon sx={{fontSize:'4rem'}}/>
        </Grid>
    )
}

export default ActionCard
