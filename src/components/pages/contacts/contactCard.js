import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, CardHeader, Card, CardContent, Typography } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
    },
    avatar: {
        backgroundColor: blue[500],
    },
    cover: {
        width:151,
    },
    content: {
        flex: '1 0 auto',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    description: {
        '&:hover': {
            fontWeight: 'bold',
        }
    },
}));
export default function ContactCard(props) {
    const classes = useStyles();
    const { contato } = props;
    return (
        <Card className={classes.root} variant="outlined">
        {console.log(contato.setor.numero)}
            <CardHeader 
                avatar={
                    <Avatar aria-label='contact' className={classes.avatar}> 
                        
                    </Avatar>}
                />
            <div className={classes.details}>


                <CardContent className={classes.content}>
                    <Typography className={classes.description} variant='body1' color='textPrimary'>
                        nome: {contato.nome}
                    </Typography>
                    <Typography variant='body1' color='textPrimary' className={classes.description}>
                        e-mail: {contato.email}
                    </Typography>
                    <Typography variant='body1' color='textPrimary' className={classes.description}>
                        {/* sector: {contato.setor.nome} */}
                    </Typography>
                    <Typography variant='body1' color='textPrimary' className={classes.description}>
                        {/* Ramal: {contato.telefone.ramal} */}
                    </Typography>
                </CardContent>
            </div>
            
        </Card>

    )
}