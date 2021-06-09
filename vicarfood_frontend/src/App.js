import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Container from './Components/Container'
import Footer from './Components/footer'
import Header from './Components/header'
import Routes from './Components/Routes'


const App = () => (
  <>
    <BrowserRouter>
        <Header />
        <Container>
          <Routes/>
        </Container>
        <Footer />
    </BrowserRouter>
  </>
)

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

<<<<<<< HEAD
//FINAL DO CODIGO ORIGINAL */
=======
>>>>>>> 7aecdf8b2e99b199cb9c3ae2964b45e46b048741
