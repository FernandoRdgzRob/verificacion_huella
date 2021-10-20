import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 30
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}))

const MobileAdmin = () => {
  const classes = useStyles()

  const data = [
    { numero: '0001', nombre: 'José Antonio López Méndez', correo: 'jose.antonio@logo.net' },
    { numero: '0002', nombre: 'Lucía Colorado Torres', correo: 'lucia.torres@logo.net' },
    { numero: '0003', nombre: 'Darío Hernández Román', correo: 'dario.roman@logo.net' },
    { numero: '0004', nombre: 'Valerio Huerta Chávez', correo: 'valerio.chavez@logo.net' },
    { numero: '0005', nombre: 'Sofía Ramírez Vallejo', correo: 'sofia.vallejo@logo.net' },
    { numero: '0024', nombre: 'Jesús Acevedo Terán', correo: 'jesus.teran@logo.net' },
    { numero: '0025', nombre: 'Patricio Cisneros Gómez', correo: 'patricio.gomez@logo.net' },
    { numero: '0026', nombre: 'Carolina Rovira González', correo: 'carolina.gonzalez@logo.net' }
  ]

  return (
    <div className={classes.root}>
      <Typography style={{ marginTop: 30, marginBottom: 30 }} component='h1' variant='h4'>Usuarios</Typography>
      {data.map((element, index) =>
        <Accordion style={{ marginBottom: '10px' }} key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{element.nombre}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <Typography>
              No. {element.numero}
            </Typography>
            <Typography>
              {element.correo}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  )
}

export default MobileAdmin
