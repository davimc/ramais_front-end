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
                        <strong>{contact.nome}</strong>
                        <p>{contact.setor.nome}</p>
                        <p>{contact.telefone.ramal}</p>
                        <a>acessar</a>
                    </article>
                ))}
            </div>
        );
    }
}
