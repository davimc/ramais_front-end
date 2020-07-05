import React, { Component } from "react";

import SearchBar from './searchBar'

export default class Search extends Component {
  state = {
    nome: ''
  } 
  handleChange = event => {
    this.setState({ nome: event.target.value })
  }

  handleSubmit = () => {
    this.props.search(this.state.nome);

    // this.setState(this.stateInicial);
  };
  render() {
    const { nome } = this.state;    

    return (
      <SearchBar nome={nome} change={this.handleChange} submit={this.handleSubmit}/>

    );
  }
}
