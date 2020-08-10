import React from 'react'
import { Link } from 'react-router-dom'
import {AppBar, Toolbar, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    homeButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const Header = () => {
    const classes = useStyles();
    return (
        <div>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
                    <Link to="/" style={{ textDecoration: 'none', color:'white' }}>Home</Link>              
                </IconButton>  
                <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
                    <Link to="appsearch" style={{ textDecoration: 'none', color:'white' }}>AppSearch</Link>
                </IconButton>
                <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
                    <Link to="story" style={{ textDecoration: 'none', color:'white' }}>Story</Link>              
                </IconButton>  
                <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
                    <Link to="user" style={{ textDecoration: 'none', color:'white' }}>User</Link>
                </IconButton>
            </Toolbar>
        </AppBar>
        </div>
    )
}