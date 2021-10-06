import React from 'react'
// Images
import loginPicture from '../../img/print_verification.png'
// Material UI
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// React Router
import { withRouter } from 'react-router'
import { Link, useHistory } from 'react-router-dom'
// Utils
import { emailRegex } from './emailRegex'
import { CustomForm, useCustomForm } from '../Utils/CustomForm'

const useStyles = makeStyles({
  parentGrid: {
    padding: 0,
    height: '100vh',
    backgroundColor: '#3f51b5'
  },
  loginGrid: {
    borderRadius: 10,
    paddingLeft: '3.5%',
    paddingRight: '3.5%',
    paddingTop: '4.5%',
    paddingBottom: '4.5%',
    backgroundColor: '#F8F8F8'
  },
  loginImage: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '-3%',
    paddingTop: '11%'
  }
})

const Login = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const { formFunctions, handleSubmit } = useCustomForm()

  const form = {
    fields: [
      {
        label: 'Correo',
        name: 'email',
        type: 'text',
        required: 'El correo es requerido',
        placeholder: 'usuario@dominio.com',
        pattern: {
          value: emailRegex,
          message: 'No se ingresó un correo válido'
        }
      },
      {
        label: 'Contraseña',
        name: 'password',
        type: 'password',
        required: 'La contraseña es requerida'
      }
    ],
    submitButton: 'Iniciar sesión'
  }

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    history.push('/verificacion')
  })

  return (
    <Grid className={classes.parentGrid} container alignItems='center' justifyContent='center'>
      <Grid className={classes.loginGrid} item xs={4}>
        <div style={{ marginBottom: 15 }}>
          <Typography component='h1' variant='h4'>Iniciar sesión</Typography>
          <Typography style={{ color: 'gray' }} variant='body2'>
            ¿No tienes una cuenta? <Link to='/'>Solicita acceso</Link>
          </Typography>
        </div>
        <CustomForm
          form={form}
          formFunctions={formFunctions}
          onSubmit={onSubmit}
        />
      </Grid>
      <Grid className={classes.loginImage} item xs={5}>
        <img width='425' src={loginPicture} alt='Detección de huellas' />
      </Grid>
    </Grid>
  )
}

export default withRouter(Login)
