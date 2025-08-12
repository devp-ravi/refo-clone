import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Cursor from './components/Cursor'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <div className=' min-h-screen w-full bg-zinc-900 text-white select-none '>
      <Cursor/>
     <Navbar/>
     <Work/>
     <Stripes/>
     <Products/>
     <Marquees/>
     <Cards/>
     <Footer/>

      </div>
  )
}

export default App