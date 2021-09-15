import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
})

const createData = (id, date, result) => {
  return {
    id,
    date,
    result,
    details: [
      { fingerprint: 'huellaA.jpg', detailsOne: 'hh:mm', detailsTwo: '##% de similitud' },
      { fingerprint: 'huellaB.jpg', detailsOne: 'Tipo: índice', detailsTwo: 'Lado: derecho' }
    ]
  }
}

const rows = [
  createData('000001', '04/09/21', 'Positivo'),
  createData('000002', '05/09/21', 'Positivo'),
  createData('000003', '05/09/21', 'Positivo'),
  createData('000004', '08/09/21', 'Positivo'),
  createData('000005', '13/09/21', 'Positivo')
]

const HistoryTable = () => {
  return (
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
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const Row = (props) => {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()

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
          {row.id}
        </TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.result}</TableCell>
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
                  {row.details.map((historyRow) => (
                    <TableRow key={historyRow.fingerprint}>
                      <TableCell component='th' scope='row'>
                        {historyRow.fingerprint}
                      </TableCell>
                      <TableCell>{historyRow.detailsOne}</TableCell>
                      <TableCell>{historyRow.detailsTwo}</TableCell>
                    </TableRow>
                  ))}
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
