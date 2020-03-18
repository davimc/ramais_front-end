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
  //COntinuar lendo em https://medium.com/@joaolucasluc/comunicacao-entre-componentes-react-8574108b5043
  //e
  //https://stackoverflow.com/questions/25139388/how-to-use-setprops-in-react-js
  render() {
    return (
      <div className="App grey lighten-2">
        <Header />
        
        <SearchBar handleChange={this.handleSubmit.bind(this)}/>
        <Main />

      </div>
    );
  }
}
