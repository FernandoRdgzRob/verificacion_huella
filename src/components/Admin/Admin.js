import { Container } from '@material-ui/core'
import React from 'react'
// React Router
import { withRouter } from 'react-router'
import AdminTable from './AdminTable'

const Admin = (props) => {
  return (
    <Container maxWidth='lg' style={{ marginTop: 30 }}>
      <AdminTable />
    </Container>
  )
}
export default withRouter(Admin)