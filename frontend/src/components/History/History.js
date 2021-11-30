import { CircularProgress, Container, Typography } from '@material-ui/core'
import React from 'react'
// React Router
import { withRouter } from 'react-router'
import HistoryTable from './HistoryTable'
import { useQuery } from '@apollo/client'
import { GET_ALL_VERIFICATIONS } from '../Queries/Queries'

const History = (props) => {
  const { loading, error, data } = useQuery(GET_ALL_VERIFICATIONS)

  if (error) {
    console.log({ error })
  }

  if (loading) {
    return (
      <Container maxWidth='md' style={{ marginTop: 30 }}>
        <Typography style={{ marginTop: 30, marginBottom: 30 }} component='h1' variant='h4'>Historial</Typography>
        <CircularProgress />
      </Container>
    )
  }

  return (
    <Container maxWidth='md' style={{ marginTop: 30 }}>
      <Typography style={{ marginTop: 30, marginBottom: 30 }} component='h1' variant='h4'>Historial</Typography>
      <HistoryTable data={data.getAllVerifications} />
    </Container>
  )
}
export default withRouter(History)
