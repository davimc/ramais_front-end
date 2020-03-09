import React, { Component } from "react";
import api from "../../service/api";

import './styles.css';

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
    render() {
        const { contacts } = this.state;
        return (
            <div className="contact-list">
                {contacts.map(contact => (
                    <article key={contact.id}>
                        <p>nome: <strong> {contact.nome}</strong></p>
                        <p>setor: <strong  id="setor">{contact.setor.nome}</strong></p>
                        <p>ramal: <strong>{contact.telefone.ramal}</strong></p>
                        <a>acessar</a>
                    </article>
                ))}
            </div>
        );
    }
}
