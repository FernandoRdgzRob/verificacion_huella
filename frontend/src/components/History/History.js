import { Container, Typography } from '@material-ui/core'
import React from 'react'
// React Router
import { withRouter } from 'react-router'
import HistoryTable from './HistoryTable'

const History = (props) => {
  return (
    <Container maxWidth='md' style={{ marginTop: 30 }}>
      <Typography style={{ marginTop: 30, marginBottom: 30 }} component='h1' variant='h4'>Historial</Typography>
      <HistoryTable />
    </Container>
  )
}
export default withRouter(History)
