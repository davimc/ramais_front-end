import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import PersonIcon from '@material-ui/icons/AccountCircle';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

import LinkWrapper from '../../../navigation/LinkWrapper'
import { Toolbar, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    width:"100%",
    display: 'none',
    margin: theme.spacing(0,1),
    fontSize:'30px',
    
    [theme.breakpoints.up('sm')]:{
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  
}));


export default function Header() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <LinkWrapper to="/"> MPF</LinkWrapper>
          </Typography>
      <div className={classes.grow}/>
      <div className={classes.sectionDesktop}>
        <Tooltip title="Contatos" >
          <IconButton aria-label="users contacts" edge="start" >
          <LinkWrapper to="/contato"><PersonIcon /> </LinkWrapper>
          </IconButton>
        </Tooltip>
        <Tooltip title="Setores">
          <IconButton aria-label="users sectors" edge="end">
          <LinkWrapper to="/setor"><MeetingRoomIcon/></LinkWrapper>
          </IconButton>
        </Tooltip>
      </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}



