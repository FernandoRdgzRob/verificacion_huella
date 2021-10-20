import React from 'react'
// React Router
import { withRouter } from 'react-router'
// Material UI
import { Button, Container, Grid, Typography } from '@material-ui/core'
// Utils
import VerificationForm from './VerificationForm'

const Verification = () => {
  // Fingerprint one
  const [fingerprintLocationOne, setFingerprintLocationOne] = React.useState('thumb')
  const [sideOne, setSideOne] = React.useState('right')
  const [fileOne, setFileOne] = React.useState(null)
  const [srcOne, setSrcOne] = React.useState(null)

  // Fingerprint two
  const [fingerprintLocationTwo, setFingerprintLocationTwo] = React.useState('thumb')
  const [sideTwo, setSideTwo] = React.useState('right')
  const [fileTwo, setFileTwo] = React.useState(null)
  const [srcTwo, setSrcTwo] = React.useState(null)

  // Errors
  const [fingerPrintLocationError, setFingerPrintLocationError] = React.useState('')
  const [sideError, setSideError] = React.useState('')
  const [imageErrorOne, setImageErrorOne] = React.useState('')
  const [imageErrorTwo, setImageErrorTwo] = React.useState('')

  const validateForm = () => {
    let valid = true
    if (fingerprintLocationOne !== fingerprintLocationTwo) {
      setFingerPrintLocationError('El tipo de huella debe coincidir entre ambas')
      valid = false
    } else {
      setFingerPrintLocationError('')
    }

    if (sideOne !== sideTwo) {
      setSideError('Ambas huellas deben ser del mismo lado')
      valid = false
    } else {
      setSideError('')
    }

    if (fileOne) {
      console.log(fileOne.type)
      if (fileOne.type !== 'image/jpg' && fileOne.type !== 'image/jpeg' && fileOne.type !== 'image/bmp') {
        setImageErrorOne('Solo se aceptan los formatos .jpg y .bmp')
        valid = false
      } else {
        setImageErrorOne('')
      }
    } else {
      setImageErrorOne('Debes subir un archivo para comparar')
      valid = false
    }

    if (fileTwo) {
      if (fileTwo.type !== 'image/jpg' && fileTwo.type !== 'image/jpeg' && fileTwo.type !== 'image/bmp') {
        setImageErrorTwo('Solo se aceptan los formatos .jpg y .bmp')
        valid = false
      } else {
        setImageErrorTwo('')
      }
    } else {
      setImageErrorTwo('Debes subir un archivo para comparar')
      valid = false
    }

    return valid
  }

  const onSubmit = () => {
    const valid = validateForm()

    const fingerprintOne = {
      location: fingerprintLocationOne,
      side: sideOne,
      file: fileOne
    }

    const fingerprintTwo = {
      location: fingerprintLocationTwo,
      side: sideTwo,
      file: fileTwo
    }

    console.log({ valid, fingerprintOne, fingerprintTwo })
  }

  return (

    <Container maxWidth='md' style={{ marginTop: 30 }}>
      <Typography style={{ marginBottom: 15 }} component='h1' variant='h4'>Verificación</Typography>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Typography style={{ marginBottom: 10 }} component='h2' variant='h6'>Huella 1</Typography>
          <VerificationForm
            fingerprintLocation={fingerprintLocationOne}
            setFingerprintLocation={setFingerprintLocationOne}
            side={sideOne}
            setSide={setSideOne}
            file={fileOne}
            setFile={setFileOne}
            src={srcOne}
            setSrc={setSrcOne}
            fingerPrintLocationError={fingerPrintLocationError}
            sideError={sideError}
            imageError={imageErrorOne}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography style={{ marginBottom: 10 }} component='h2' variant='h6'>Huella 2</Typography>
          <VerificationForm
            fingerprintLocation={fingerprintLocationTwo}
            setFingerprintLocation={setFingerprintLocationTwo}
            side={sideTwo}
            setSide={setSideTwo}
            file={fileTwo}
            setFile={setFileTwo}
            src={srcTwo}
            setSrc={setSrcTwo}
            fingerPrintLocationError={fingerPrintLocationError}
            sideError={sideError}
            imageError={imageErrorTwo}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Button fullWidth color='primary' onClick={onSubmit} variant='contained'>
            Verificar
          </Button>
        </Grid>
      </Grid>
    </Container>

  )
}

export default withRouter(Verification)
