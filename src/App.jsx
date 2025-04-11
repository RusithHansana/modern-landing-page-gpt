import './App.css'
import Brand from './components/Brand'
import CTA from './components/CTA'
import Navbar from './components/navbar/Navbar'
import Blog from './containers/Blog'
import Feature from './containers/Feature'
import Footer from './containers/Footer'
import Header from './containers/header/Header'
import Possibility from './containers/Possibility'
import WhatGPT from './containers/WhatGPT'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
