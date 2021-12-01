import React, { useContext } from 'react'
import AppContext from '../AppContex'
import Portafolio from '../Portafolio'
import Stocks from '../Stocks'
import Derivados from '../Derivados'
import Bonos from '../Bonos'
import Risks from '../Risks'
import { Grid } from '@mui/material'

function Board() {
    const context = useContext( AppContext );
    const boards = [ <Portafolio />, <Stocks />, <Derivados />, <Bonos />, <Risks /> ];

    return (
        <Grid container item xs={9} style={styles.board}>
            { boards[ context.menuOption ] }
        </Grid>
    )
}

const styles = {
    board: {
        backgroundColor: '#FBF5F3',
        padding: '4% 2%'
    }
}

export default Board
