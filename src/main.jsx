import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './Components/NavBar'
import MainSection from './Components/MainSection'
import Footer from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <MainSection />
    <Footer />
  </React.StrictMode>,
)
