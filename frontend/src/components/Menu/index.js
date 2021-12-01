import React, { useContext } from 'react'
import { Grid, Avatar, List, ListItem, ListItemButton, ListItemText, ListItemAvatar, Divider } from '@mui/material'
import AppContext from '../AppContex'

function Menu() {
    const context = useContext(AppContext)
    const menu_options = ["Mi portafolio", "Comprar Acciones", "Comprar Derivados", "Comprar Bonos", "VaR Tipo de Cambio"]

    const handleOptionChange = ( i ) => {
        context.setMenuOption(i)
    }

    const renderMenuOptions = ( options ) => {
        return options.map( ( option, i ) => {
            return(
                <>
                    <ListItem>
                        <ListItemButton
                            onClick={ () => handleOptionChange(i) }
                        >
                            <ListItemText
                                primary={<h3 style={styles.menuOption}>{option}</h3>}
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider component="li" sx={{backgroundColor:"#59C3C3"}}/>
                </>
            )
        })
    }

    return (
        <Grid container item xs={3} style={styles.menu}>
            <Grid item xs={12}>
                <h1>Casa de Bolsa</h1>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="Avatar Image" src={context.user.avatar} sx={{ width: 56, height: 56 }}/>
                        </ListItemAvatar>
                        <ListItemText
                            sx={styles.avatarText}
                            primary = {<h2>{context.user.name}</h2>}
                        />
                    </ListItem>
                    { renderMenuOptions(menu_options) }
                </List>
            </Grid>
        </Grid>
    )
}

const styles = {
    menu: {
        padding: '2% 1%',
        backgroundColor: '#010D13',
        color: 'white',
    },

    avatarText: {
        margin: '0 1rem',
    },

    menuOption: {
        textAlign: 'center',
    }
}

export default Menu
