import React from 'react'
// Material UI
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
// React Router
import { withRouter } from 'react-router'

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    parentGrid: {
        height: '30vh'
    },
    profileGrid: {
        height: '100vh',
    },

});

const Profile = (props) => {
    const classes = useStyles();

    return (
        <>
            <form noValidate autoComplete="off">
                <Container maxWidth="sm">
                    <Grid className={classes.parentGrid} container justifyContent='center'>
                        <div style={{ marginTop: 40 }}>
                            <Typography component='h1' variant='h4'>Mi Perfil</Typography>
                        </div>
                    </Grid>
                    <Grid container spacing={6} justifyContent='center'>
                        <Grid item xs={6}>
                            <div style={{ marginLeft: 40 }}>
                                <TextField fullWidth disabled id="txtFicha" label="Ficha" defaultValue="#####" />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <TextField fullWidth disabled id="txtCorreo" label="Correo electrónico" defaultValue="user@dominio.com" />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container spacing={6} justifyContent='center'>
                        <Grid item xs={6}>
                            <div style={{ marginLeft: 40 }}>
                                <TextField fullWidth disabled id="txtNombre" label="Nombre Completo" defaultValue="Nombre Apellido1 Apellido2" />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <TextField fullWidth disabled id="txtContraseña" label="Contraseña" defaultValue="**********" />
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{ marginTop: 70 }} align="right">
                        <Button variant="contained" color="primary" type="submit" value="Submit">
                            Editar Información
                        </Button>
                    </div>
                </Container>
            </form>
        </>
    );
}

export default withRouter(Profile)