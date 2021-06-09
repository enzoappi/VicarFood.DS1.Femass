import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Container from './Components/Container'
import Footer from './Components/footer'
import Header from './Components/header'
import Routes from './Components/Routes';

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

