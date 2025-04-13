import './App.css'
import { Navbar, CTA, Brand } from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT } from './containers'

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
