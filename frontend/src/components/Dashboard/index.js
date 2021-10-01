import React from 'react'
import Menu from '../Menu'
import Board from '../Board'
import { Grid } from '@mui/material'

function Dashboard() {
    return (
        <Grid container style={styles.dashboard}>
            <Menu/>
            <Board/>
        </Grid>
    )
}

const styles = {
    dashboard: {
        height: '100vh'
    }
}

export default Dashboard
