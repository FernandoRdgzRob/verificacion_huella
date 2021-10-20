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
import useMediaQuery from '@material-ui/core/useMediaQuery'
import MobileAdmin from './components/Admin/MobileAdmin'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  history: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}))

function App () {
  const matches = useMediaQuery('(min-width:600px)')
  const classes = useStyles()

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
      main: () => {
        if (matches) {
          return <Admin />
        } else {
          return <MobileAdmin />
        }
      }
    }
  ]

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
              <main className={index === 1 ? classes.history : classes.content}>
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
