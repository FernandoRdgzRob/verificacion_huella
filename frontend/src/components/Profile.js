import React from 'react'
// Material UI
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
// React Router
import { withRouter } from 'react-router'

const useStyles = makeStyles({
  parentGrid: {
    height: '30vh'
  }
})

const Profile = (props) => {
  const classes = useStyles()
  const [disabled, setDisabled] = React.useState(true)

  const changeDisabled = () => {
    setDisabled(prevState => !prevState)
  }

  return (
    <>
      <form noValidate autoComplete='off'>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          minHeight='70vh'
        >
          <div>
            <Typography style={{ marginTop: 30, marginBottom: 30 }} component='h1' variant='h4'>Mi Perfil</Typography>
            <Grid container spacing={6} justifyContent='center'>
              <Grid item xs={10} sm={6}>
                <div>
                  <TextField fullWidth disabled={disabled} id='txtFicha' label='Ficha' defaultValue='#####' />
                </div>
              </Grid>
              <Grid item xs={10} sm={6}>
                <div>
                  <TextField fullWidth disabled={disabled} id='txtCorreo' label='Correo electrónico' defaultValue='user@dominio.com' />
                </div>
              </Grid>
              <Grid item xs={10} sm={6}>
                <div>
                  <TextField fullWidth disabled={disabled} id='txtNombre' label='Nombre Completo' defaultValue='Nombre Apellido1 Apellido2' />
                </div>
              </Grid>
              <Grid item xs={10} sm={6}>
                <div>
                  <TextField fullWidth disabled={disabled} id='txtContraseña' label='Contraseña' defaultValue='**********' />
                </div>
              </Grid>
            </Grid>
            <div style={{ marginTop: 60 }} align='right'>
              <Button onClick={changeDisabled} variant='contained' color='primary'>
                Editar Información
              </Button>
            </div>
          </div>
        </Box>
      </form>
    </>
  )
}

export default withRouter(Profile)
