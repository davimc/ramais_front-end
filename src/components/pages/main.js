import React, {Component} from "react";
import api from '../../service/api'

export default class Main extends Component{
    componentDidMount(){
        this.loadContats();
    }
    loadContats = async () =>{
           const response = await api.get('/contacts');
           console.log(response);
    };
    render(){
        return <h1>Hello World</h1>
    }
}
