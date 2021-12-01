import React, { useContext, useState } from 'react'
import AppContext from '../AppContex'
import { STOCKS } from '../../data'
import { Grid, ButtonGroup, Button } from '@mui/material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

export default function Portafolio() {
  const [ selected, setSelected ] = useState(0)
  const formatter = new Intl.NumberFormat()
  const context = useContext( AppContext )

  const rows = context.userData.stocks? 
    Object.keys(context.userData.stocks).map( stock => {
      return { ...context.userData.stocks[stock], id: stock}
    }) : []
  const columns = [
      { field: 'symbol', headerName: 'Símbolo', width: 100 },
      { field: 'name', headerName: 'Nombre', width: 300 },
      { field: 'quantity', headerName: 'Cantidad', width: 200 },
      { field: 'lastPrice', 
        headerName: 'Precio', 
        valueGetter: function(params) {
          return STOCKS[params.getValue(params.id, 'symbol')]
        },
        width: 150 
      },
      { field: 'total', 
        headerName: 'Total',
        valueGetter: function(params) {
          return params.getValue(params.id, 'quantity') * params.getValue(params.id, 'lastPrice')
        },
        valueFormatter: function(params) {
          return '$' + formatter.format(params.value)
        },
        width: 150 
      },
  ];

  const grids = [
          <>
          <DataGrid
            rows={rows}
            columns={columns}
            rowsPerPageOptions={[5]}
          />
          </>,
          <DataGrid
            rows={[]}
            columns={columns}
            rowsPerPageOptions={[5]}
          />,
          <DataGrid
            rows={[]}
            columns={columns}
            rowsPerPageOptions={[5]}
          />
  ]

  return (
      <Grid container item xs={12}>
        <div style={{width: '100%', padding:'0 0 7% 0'}}>
          <h1>Saldo actual: ${formatter.format(context.userData.budget)}</h1>
          <Grid container>
            <ButtonGroup variant="text" size="large" sx={{margin:'auto', marginBottom: '1rem'}}>
              <Button onClick={() => setSelected(0)}>Acciones</Button>
              <Button onClick={() => setSelected(1)}>Derivados</Button>
              <Button onClick={() => setSelected(2)}>Bonos</Button>
              <Button onClick={() => setSelected(3)}>Profit & Loss</Button>
            </ButtonGroup>
          </Grid>
          {grids[selected]}
        </div>
      </Grid>
  )
}
