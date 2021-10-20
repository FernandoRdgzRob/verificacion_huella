import React, { forwardRef } from 'react'
import MaterialTable from 'material-table'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Search from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'

function AdminTable () {
  const columns = [
    {
      title: 'No.',
      field: 'numero'
    },
    {
      title: 'Nombre',
      field: 'nombre'
    },
    {
      title: 'Correo electrónico',
      field: 'correo'
    }
  ]

  const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />)
  }

  const data = [
    { numero: '0001', nombre: 'José Antonio López Méndez', correo: 'jose.antonio@logo.net' },
    { numero: '0002', nombre: 'Lucía Colorado Torres', correo: 'lucia.torres@logo.net' },
    { numero: '0003', nombre: 'Darío Hernández Román', correo: 'dario.roman@logo.net' },
    { numero: '0004', nombre: 'Valerio Huerta Chávez', correo: 'valerio.chavez@logo.net' },
    { numero: '0005', nombre: 'Sofía Ramírez Vallejo', correo: 'sofia.vallejo@logo.net' },
    { numero: '0024', nombre: 'Jesús Acevedo Terán', correo: 'jesus.teran@logo.net' },
    { numero: '0025', nombre: 'Patricio Cisneros Gómez', correo: 'patricio.gomez@logo.net' },
    { numero: '0026', nombre: 'Carolina Rovira GOnzález', correo: 'carolina.gonzalez@logo.net' }
  ]

  return (
    <div>
      <Button variant='contained' color='primary' mb='3rem'>
        Agregar nuevo usuario
      </Button>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={data}
        title='Gestión de usuarios registrados'
        actions={[
          {
            icon: EditIcon,
            tooltip: 'Editar usuario',
            onClick: (event, rowData) => alert('Ha presionado editar usuario: ' + rowData.nombre)
          },
          {
            icon: DeleteIcon,
            tooltip: 'Eliminar usuario',
            onClick: (event, rowData) => window.confirm('¿Está seguro que desea eliminar el usuario: ' + rowData.nombre + '?')
          }
        ]}
        options={{
          actionsColumnIndex: -1,
          rowStyle: { fontFamily: 'Roboto' }
        }}
        localization={{
          header: {
            actions: 'Acciones'
          }
        }}
      />
    </div>
  )
}

export default AdminTable
