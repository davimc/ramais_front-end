import React, { Component, Fragment } from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container } from '@material-ui/core';

import api from "../../../service/api";

import ContactCard from './contactCard';
import Search from '../../utils/search/search'



export default class Contacts extends Component {
    state = {
        name: '',
        contacts: [],
        nameBefore: 'initial'
    }

    search=  busca => {
        this.setState({name:busca})
        console.log(this.state.nameBefore)

    }
    componentDidMount(){
        this.loadContacts(this.state.name);
    }
    componentDidUpdate() {
        this.loadContacts(this.state.name);
    }

    loadContacts = async prevProps => {
        //para evitar que o componentDidUpdate entre em loop.
        //ANALISAR FORMA DE DEIXAR MAIS LIMPO
        if (prevProps !== this.state.nameBefore) {
            const response = await api.get('/contacts/contact_name=' + this.state.name);
            this.setState({ contacts: response.data, nameBefore: this.state.name });   
        }
    };
    
    render() {
        const useStyles = makeStyles((theme) => ({
            root: {
                flexGrow:1,
            
            },
            paper: {
            
                color: theme.palette.text.secondary,
            
        
            }
        }));
        const classes = useStyles;
        const { contacts} = this.state;
        return (
            <Fragment>
                <Search search={this.search}/>
                
                <Container className={classes.root} >
                    <Grid container spacing={3}>
                        {contacts
                            .map(contact => (


                            <Grid item xs={4} key={contact.id}>

                                <Paper  className={classes.paper} color='secondary'><ContactCard contato={contact}/></Paper>
                            </Grid>
                        ))}
                        
                    </Grid>
                </Container>

            </Fragment>
        );
    }
}
