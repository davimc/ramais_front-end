import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./styles.css"
import api from "../../service/api";


export default class SearchBar extends Component {
  constructor(props) {
  super(props);
  this.state = {
    name: '',
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
  handleChange(event) {
    

    this.setState({ nome: event.target.value })
  }
  handleSubmit(event){
    console.log(this.state.nome);

    event.preventDefault();
    console.log('ok');

    const contact = {
      nome: this.state.nome
    };

     api.post('contacts/nome', {contact })
      .then(response => {
        console.log(response.data);
        console.log('ok');
      });
  }

  render() {
    return (
      
        <form className="searchbar input-field row grey lighten-3 "  onSubmit={this.handleSubmit}  >
          <div className="searchbar-input input-field ">
            <input placeholder="Buscar" id="name" name="nome" type="text" className="validate" value={this.state.nome} onChange={this.handleChange} />
          </div>
          <div className=" searchbar-button">
            <button className="waves-effect waves-light blue darken-2 btn " type="submit"  value="Buscar" ><i className="material-icons " >search</i></button>
          </div>

        </form>
      
    );
  }
}
