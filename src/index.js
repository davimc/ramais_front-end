import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Contato from './components/pages/contacts/contact';
import Setor from './components/pages/sectors/sector';
import NotFound from './components/pages/defaultPages/notFound';

import {BrowserRouter, Switch, Route} from 'react-router-dom';


ReactDOM.render(
    
    <BrowserRouter>
        <App/>
        <Switch>
            <Route path='/' exact component={Contato}>
                <Contato/>
            </Route>
            <Route path='/contato' component={Contato}>
                <Contato/>
            </Route>
            <Route parth='/setor' component={Setor}>
                <Setor/>
            </Route>
            <Route component={NotFound}>
                <NotFound/>
            </Route>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
