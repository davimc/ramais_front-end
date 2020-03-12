import React, { Component } from 'react';



export default class Navigator extends Component{
    render() {
        return (
            <nav className="contact-nav">
                <a href="#" className="nav-op nav-op-cotact">Contatos</a>
                <a href="#" className="nav-op nav-op-sector">Setor</a>
                <a href="#" className="nav-op nav-op-branch">Ramal</a>
                        
                    <input placeholder="Pesquisar"></input>
                    <button type="button">ok</button>
                        

            </nav>
        );
    }
}