import React from 'react'
import { useHistory } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const history = useHistory()

  if (!localStorage.getItem('token')) {
    history.push('/')
  }

  return children
}

export default PrivateRoute
