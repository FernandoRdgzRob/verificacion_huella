import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './components/Login/Login'
import Profile from './components/Profile'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/Login'>
          <Login />
        </Route>
        <Route path='/Profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
