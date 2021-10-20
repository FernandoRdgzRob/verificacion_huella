import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './components/Login/Login'
import Profile from './components/Profile'
import Verification from './components/Verification/Verification'
import { makeStyles } from '@material-ui/core/styles'
import Sidebar from './components/Sidebar/Sidebar'
import History from './components/History/History'
import Admin from './components/Admin/Admin'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const routes = [
  {
    path: '/verificacion',
    sidebar: () => <Sidebar />,
    main: () => <Verification />
  },
  {
    path: '/historial',
    sidebar: () => <Sidebar />,
    main: () => <History />
  },
  {
    path: '/perfil',
    sidebar: () => <Sidebar />,
    main: () => <Profile />
  },
  {
    path: '/admin',
    sidebar: () => <Sidebar />,
    main: () => <Admin />
  }
]

function App () {
  const classes = useStyles()

  return (
    <Router>
      <div className={classes.root}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
            >
              <route.sidebar />
            </Route>
          ))}
        </Switch>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
            >
              <main className={classes.content}>
                <route.main />
              </main>
            </Route>
          ))}
        </Switch>
      </div>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
