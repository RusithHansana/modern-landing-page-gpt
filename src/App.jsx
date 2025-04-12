import './App.css'
import Brand from './components/brand/Brand'
import CTA from './components/CTA'
import Navbar from './components/navbar/Navbar'
import Blog from './containers/Blog'
import Features from './containers/features/Features'
import Footer from './containers/Footer'
import Header from './containers/header/Header'
import Possibility from './containers/possibility/Possibility'
import WhatGPT from './containers/what-gpt/WhatGPT'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
