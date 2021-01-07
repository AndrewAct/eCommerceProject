// import logo from './logo.svg';
// import './App.css';
//<!-- Even if you don't want a "div", the empty fragment is required! -->

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (  
    <Router>
      <Header />
      <main className = 'py-3'>
      <Container>
        <h1>Welcome to MyShop!</h1>
        <Route path = '/' component = {HomeScreen} exact/>
        <Route path = '/product/:id' component = {ProductScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
