import React from 'react'
// Images
import loginPicture from '../../img/print_verification.png'
// Material UI
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// React Router
import { withRouter } from 'react-router'
import { useHistory } from 'react-router-dom'
// Utils
import { emailRegex } from './emailRegex'
import { CustomForm, useCustomForm } from '../Utils/CustomForm'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../Mutations/Mutations'

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
  },
  responsiveLoginGrid: {
    borderRadius: 10,
    paddingLeft: '8.5%',
    paddingRight: '8.5%',
    paddingTop: '8.5%',
    paddingBottom: '8.5%',
    backgroundColor: '#F8F8F8'
  }
})

const Login = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const { formFunctions, handleSubmit } = useCustomForm()
  const matches = useMediaQuery('(min-width:600px)')

  const handleOnCompleted = ({ logIn: logInData }) => {
    const { token, user: { name } } = logInData
    localStorage.setItem('token', token)
    localStorage.setItem('verification-user-name', name)
    history.replace('/verificacion')
  }

  const handleOnError = (error) => {
    console.log(error)
  }

  const [logIn, { loading }] = useMutation(LOGIN, { onError: handleOnError, onCompleted: handleOnCompleted })

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
    logIn({ variables: { input: data } })
  })

  return (
    <>
      <Grid className={classes.parentGrid} container alignItems='center' justifyContent='center'>
        <Grid className={matches ? classes.loginGrid : classes.responsiveLoginGrid} item xs={10} md={4}>
          <div style={{ marginBottom: 15 }}>
            <Typography component='h1' variant='h4'>Iniciar sesión</Typography>
            {/* <Typography style={{ color: 'gray' }} variant='body2'>
              ¿No tienes una cuenta? <Link to='/'>Solicita acceso</Link>
            </Typography> */}
          </div>
          <CustomForm
            form={form}
            formFunctions={formFunctions}
            onSubmit={onSubmit}
            loading={loading}
          />
        </Grid>
        {matches &&
          <Grid className={classes.loginImage} item xs={10} md={5} justifyContent='center'>
            <img width='425' src={loginPicture} alt='Detección de huellas' />
          </Grid>}
      </Grid>
    </>
  )
}

export default withRouter(Login)
