import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { UserProvider } from './Components/utils/MyContext';
import AppProvider from './AppContext/Provider';

//window.servidor = 'http://localhost:8080/'
window.servidor = 'http://localhost:8090/'

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>, 
    document.getElementById('root')
);

/* ReactDOM.render(
    <UserProvider>
        <App />
    </UserProvider>, 
    document.getElementById('root')); */