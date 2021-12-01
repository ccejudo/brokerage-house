import React from 'react'
import { Grid } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

export default function Portafolio() {
    const rows = [];
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
              params.getValue(params.id, 'lastName') || ''
            }`,
        },
    ];

    return (
        <Grid container item xs={12}>
            <DataGrid
                rows={rows}
                columns={columns}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </Grid>
    )
}
