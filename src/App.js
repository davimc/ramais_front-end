import React from 'react';
import "./styles.css";
import Header from "./components/hearder/index";
import api from './service/api';
import Main from './components/pages/main'



const App = () => (
  <div className="App">
      <Header/>
      <Main/>
    </div>
)

export default App;
