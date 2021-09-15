import { Container } from '@material-ui/core'
import React from 'react'
// React Router
import { withRouter } from 'react-router'
import HistoryTable from './HistoryTable'

const History = (props) => {
  return (
    <Container maxWidth='md' style={{ marginTop: 30 }}>
      <HistoryTable />
    </Container>
  )
}
export default withRouter(History)
