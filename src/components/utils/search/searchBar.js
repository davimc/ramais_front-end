import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Button, Box, Paper, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,

  },
  around: {
    padding: theme.spacing(1, 0, 1, 0),
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.20),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.45),

    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
  },
  input: {
    width: '250px'
  },
  searchIcon: {
    //position: 'relative',
    //pointerEvents: 'none',
    display: 'flex',

    alignItems: 'center',
  },


}));


export default function SearchBar(props) {
    
    const classes = useStyles();
    const {nome, change, submit} = props
    return (
        <Paper className={classes.grow} component="form">
            <Box className={classes.around} bgcolor='grey.100'>
                <div className={classes.search}>

                    <TextField
                        placeholder="Buscar"
                        className={classes.input}
                        inputProps={{ 'aria-label': 'search' }}
                        name='nome'
                        value={nome}
                        onChange={change}
                    />

                </div>
                <div className={classes.searchIcon}>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={submit}
                        value='buscar'>
                        <SearchIcon />
                    </Button>
                </div>
            </Box>
        </Paper>
    );
}