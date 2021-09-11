import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Container from './Components/Container'
//import Footer from './Components/footer'
import Header from './Components/header'
import Routes from './Components/Routes'

//import AppProvider from './AppContext/Provider'

class App extends Component {
  
  render() {
    return(
      <>
        <BrowserRouter>
            <Header />
            <Container>
              <Routes />
            </Container>  
        </BrowserRouter>
      </>
    )
  }
}

export default App

/* //INICIO DO CODIGO ORIGINAL
const App = () => (   
  <BrowserRouter>
      <Header />
      <Container>
        <Routes/>
      </Container>
      <Footer />
  </BrowserRouter>
)
export default App
//FINAL DO CODIGO ORIGINAL */