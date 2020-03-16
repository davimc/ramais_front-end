import React, { Component } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import Header from "./components/hearder/index";
import SearchBar from "./components/search/index"
import Main from './components/pages/index'


export default class App extends Component {
  
  /*componentDidUpdate(){
    this.loadSearchContats(Valor);
  }
  loadSearchContats = async (Valor) => {
    const response = await api.post('/contacts/', {nome: Valor});

    console.log(response.data);
    this.setState({ contacts: response.data });
  };*/
  render() {
    return (
      <div className="App grey lighten-2">
        <Header />
        <SearchBar />
        <Main />

      </div>
    );
  }
}
