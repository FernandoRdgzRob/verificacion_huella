import { Container, Typography } from '@material-ui/core'
import React from 'react'
// React Router
import { withRouter } from 'react-router'
import AdminTable from './AdminTable'

const Admin = (props) => {
  return (
    <Container maxWidth='lg' style={{ marginTop: 30 }}>
      <Typography style={{ marginTop: 30, marginBottom: 30 }} component='h1' variant='h4'>Control de usuarios</Typography>
      <AdminTable />
    </Container>
  )
}
export default withRouter(Admin)
