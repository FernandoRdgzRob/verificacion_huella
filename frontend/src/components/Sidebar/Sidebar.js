import React from 'react'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Button, IconButton, Typography } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import PeopleIcon from '@material-ui/icons/People'
import HistoryIcon from '@material-ui/icons/History'
import { Link, useHistory } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person'
import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  // necessary for content to be below app bar
  tooslbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const Sidebar = (props) => {
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()
  const history = useHistory()

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const name = localStorage.getItem('verification-user-name')

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('verification-user-name')
    history.replace('/')
  }

  const modules = [
    {
      name: 'Verificación',
      icon: <FingerprintIcon style={{ color: '#ffffff' }} />,
      route: '/verificacion'
    },
    {
      name: 'Historial',
      icon: <HistoryIcon style={{ color: '#ffffff' }} />,
      route: '/historial'
    }
    // {
    //   name: 'Perfil',
    //   icon: <PersonIcon style={{ color: '#ffffff' }} />,
    //   route: '/perfil'
    // },
    // {
    //   name: 'Control de usuarios',
    //   icon: <PeopleIcon style={{ color: '#ffffff' }} />,
    //   route: '/admin'
    // }
  ]

  const drawer = (
    <div style={{ backgroundColor: '#3f51b5', height: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'center', height: 150 }}>
        <div>
          <PersonIcon style={{ fontSize: '100px' }} />
          <Typography style={{ fontWeight: 'bold', textAlign: 'center' }}>
            {name}
          </Typography>
        </div>
      </div>
      <Divider />
      <List>
        {modules.map((element, index) => (
          <Link key={element.name} to={element.route} style={{ textDecoration: 'none', color: '#ffffff' }}>
            <ListItem button key={element.name}>
              <ListItemIcon>{element.icon}</ListItemIcon>
              <ListItemText primary={element.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '55%' }}>
        {/* <Link to='/' style={{ textDecoration: 'none', color: '#ffffff' }}> */}
        <ListItem>
          <Button onClick={handleLogout}>
            <ListItemIcon><ExitToAppIcon style={{ color: '#ffffff' }} /></ListItemIcon>
            <ListItemText style={{ color: 'white' }} primary='Cerrar sesión' />
          </Button>
        </ListItem>
        {/* </Link> */}
      </List>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <div>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <div style={{ height: '0px', width: '0px', marginTop: '5px', boxSizing: 'border-box' }}>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </div>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

export default Sidebar
