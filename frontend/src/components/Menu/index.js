import React, { useContext } from 'react'
import { Grid, Avatar } from '@mui/material'
import AppContext from '../AppContex'

function Menu() {
    const context = useContext(AppContext)

    return (
        <Grid container item xs={3} style={styles.menu}>
            <Grid item xs={12}>
                <Avatar alt="Avatar Image" src="/images/"/>
                <p>{context.user.name}</p>
            </Grid>
        </Grid>
    )
}

const styles = {
    menu: {
        backgroundColor: '#063B56',
        color: 'white'
    }
}

export default Menu
