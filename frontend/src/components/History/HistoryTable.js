import React from 'react'
import { format } from 'date-fns'
import { makeStyles } from '@material-ui/core/styles'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import {
  Box,
  Button,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'
import ImageModal from './ImageModal'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
})

const fingerprintDict = {
  thumb: 'Dedo pulgar',
  index: 'Dedo índice',
  ring: 'Dedo anular',
  little: 'Dedo meñique',
  palm: 'Palma de la mano'
}

const HistoryTable = ({ data }) => {
  console.log({ data })

  const [open, setOpen] = React.useState(false)
  const [image, setImage] = React.useState(null)

  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <ImageModal open={open} setOpen={setOpen} image={image} setImage={setImage} />
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell style={{ fontWeight: 'bold', color: '#3f51b5' }}>Folio</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: '#3f51b5' }}>Fecha</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: '#3f51b5' }}>Resultado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <Row key={index} index={index} row={row} handleClickOpen={handleClickOpen} setImage={setImage} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

const Row = (props) => {
  const { index, row, handleClickOpen, setImage } = props
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()

  const handleOpenModal = ({ filename, filelink }) => {
    setImage({ filename, filelink })
    handleClickOpen()
  }

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open
              ? <KeyboardArrowUpIcon style={{ color: '#3f51b5' }} />
              : <KeyboardArrowDownIcon style={{ color: '#3f51b5' }} />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {`00000${index}`}
        </TableCell>
        <TableCell>{format(new Date(row.createdAt), 'dd/MM/yyyy')}</TableCell>
        <TableCell>{row.match ? 'Positivo' : 'Negativo'}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                Detalles
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableBody>
                  <TableRow>
                    <TableCell component='th' scope='row'>
                      <Button
                        style={{
                          textTransform: 'none',
                          textDecoration: 'underline'
                        }}
                        onClick={() => handleOpenModal({
                          filename: 'Huella A',
                          filelink: row.fingerprintA.filelink
                        })}
                      >
                        Huella A
                      </Button>
                    </TableCell>
                    <TableCell>
                      {fingerprintDict[row.fingerprintA.type]}, {row.fingerprintA.side === 'right' ? 'lado derecho' : 'lado izquierdo'}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component='th' scope='row'>
                      <Button
                        style={{
                          textTransform: 'none',
                          textDecoration: 'underline'
                        }}
                        onClick={() => handleOpenModal({
                          filename: 'Huella B',
                          filelink: row.fingerprintB.filelink
                        })}
                      >
                        Huella B
                      </Button>
                    </TableCell>
                    <TableCell>
                      {fingerprintDict[row.fingerprintB.type]}, {row.fingerprintB.side === 'right' ? 'lado derecho' : 'lado izquierdo'}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default HistoryTable
