import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {
    Box, Collapse, IconButton, Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Typography
} from '@material-ui/core';
import  KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon  from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles({
    root: {
        '&> *': {
            borderBottom: 'unset',
        }
    }
});

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton
                        aria-label='expand row'
                        size='small'
                        onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component='th' scope='row'>
                    {row.nome}
                </TableCell>
                <TableCell align='right'>{ row.numero}</TableCell>
                <TableCell align='right'>{row.telefone.ramal}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop:0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Contatos
                            </Typography>
                            <Table size="small" aria-label="purchase">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nome</TableCell>
                                        <TableCell>E-mail</TableCell>
                                        <TableCell>Ramal</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.contatos.map((contato)=>(
                                        <TableRow key={contato.id}>
                                            <TableCell component="th" scope="row">
                                                {contato.nome}
                                            </TableCell>
                                            <TableCell align="right">
                                                {contato.email}
                                            </TableCell>
                                            <TableCell align="right">
                                                {contato.telefone.ramal}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function sectorTable(props) {
    const {sectors} = props!=null? props: [];
    
    return(
    
    
        <TableContainer component={Paper}>
            <Table aria-label='sectors table'>
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell>Nome</TableCell>
                        <TableCell align='right'>Sala</TableCell>
                        <TableCell align='right'>Ramal</TableCell>
                    </TableRow>
                </TableHead>
                {console.log(sectors)}
                <TableBody>
                    {sectors.map((sector)=>(
                        <Row key={sector.id} row={sector}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
