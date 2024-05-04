import React from 'react'
import './App.css';
import SideSection from './components/SideSection';
import Details from './components/Details';
import About from './components/About';
import ContextDemo from './ContextDemo';

const App = () => {
  return (
    <div className='container'>
      <ContextDemo>
        <>
      <SideSection />
      <Details />
      <About />
      </>
      </ContextDemo>
    </div>
  )
}

export default App
