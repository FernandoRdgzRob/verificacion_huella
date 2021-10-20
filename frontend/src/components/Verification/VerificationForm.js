import React from 'react'
// Material UI
import {
  Input,
  Grid,
  MenuItem,
  TextField,
  InputLabel,
  FormHelperText
} from '@material-ui/core'
// Utils
import placeholder from '../../img/placeholder.png'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const fingerprintLocations = [
  {
    value: 'thumb',
    label: 'Dedo pulgar'
  },
  {
    value: 'index',
    label: 'Dedo índice'
  },
  {
    value: 'middle',
    label: 'Dedo medio'
  },
  {
    value: 'ring',
    label: 'Dedo anular'
  },
  {
    value: 'little',
    label: 'Dedo meñique'
  },
  {
    value: 'palm',
    label: 'Palma de la mano'
  }
]

const leftOrRight = [
  {
    value: 'right',
    label: 'Derecho(a)'
  },
  {
    value: 'left',
    label: 'Izquierdo(a)'
  }
]

const VerificationForm = (props) => {
  const {
    fingerprintLocation,
    setFingerprintLocation,
    side,
    setSide,
    file,
    setFile,
    src,
    setSrc,
    fingerPrintLocationError,
    sideError,
    imageError
  } = props

  const matches = useMediaQuery('(min-width:600px)')
  console.log({ matches })

  React.useEffect(() => {
    if (!file) {
      setSrc(undefined)
      return
    }
    const objectUrl = URL.createObjectURL(file)
    setSrc(objectUrl)
    // Free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [file])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          error={fingerPrintLocationError}
          helperText={fingerPrintLocationError}
          select
          fullWidth
          label='Tipo de huella'
          value={fingerprintLocation}
          onChange={(event) => setFingerprintLocation(event.target.value)}
        >
          {fingerprintLocations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          error={sideError}
          helperText={sideError}
          select
          fullWidth
          label='Lado'
          value={side}
          onChange={(event) => setSide(event.target.value)}
        >
          {leftOrRight.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <InputLabel error={imageError} style={{ fontSize: 12.5 }}>Sube la imagen de la huella</InputLabel>
        <Input error={imageError} fullWidth type='file' onChange={event => setFile(event.target?.files[0])} />
        <FormHelperText error={imageError}>{imageError || 'Archivos soportados: .jpg, .bmp'}</FormHelperText>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justifyContent='center'
        style={{
          overflow: 'hidden',
          padding: 0,
          height: matches ? 250 : 200,
          borderRadius: 10,
          borderStyle: 'solid',
          borderColor: '#3f51b5'
        }}
      >
        <img
          style={{
            borderRadius: 10,
            height: '100%',
            width: '100%',
            objectFit: 'contain'
          }}
          src={src || placeholder}
        />
      </Grid>
    </Grid>
  )
}

export default VerificationForm
