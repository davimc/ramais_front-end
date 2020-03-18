import React, { Component } from "react";
import api from "../../service/api";
import "materialize-css/dist/css/materialize.min.css";

import './styles.css'
export default class Main extends Component {


    state = {
        contacts: []
    };
    componentDidMount() {
        this.loadContats();
    }
    loadContats = async () => {
        const response = await api.get('/contacts');
        this.setState({ contacts: response.data });
    };
    submitBusca = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }
    render() {
        const { contacts } = this.state;
        return (

            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

                

                <div className="row col s12 ">

                    {contacts.map(contact => (
                        <div className="col s4 m4 " key={contact.id}>

                            <div className="card horizontal contact-card" >
                                <div className="card-image">
                                    <img src="https://lorempixel.com/100/190/nature/6" />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">

                                        <p>nome:<strong> {contact.nome}</strong></p>
                                        <p>email:<strong> {contact.email}</strong></p>
                                        <p>setor:<strong className="sector"> {contact.setor.nome}</strong></p>

                                        <p>ramal:<strong> {contact.telefone.ramal}</strong></p>

                                    </div>
                                    <div className="card-action center-align">
                                        <a href="#">Acessar</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        );
    }
}
