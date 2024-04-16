import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/header.jsx'
import Menu from './components/menu.jsx'
import Footer from './components/footer.jsx'
import Card from './components/card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header/>
  <Menu/>
    <App/>
    <Card/>
    <Footer/>
  </React.StrictMode>,
)
