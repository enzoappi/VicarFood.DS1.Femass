import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { UserProvider } from './Components/utils/MyContext'

window.servidor = 'http://localhost:8080'

ReactDOM.render(
    <UserProvider>
        <App />
    </UserProvider>, 
    document.getElementById('root'));