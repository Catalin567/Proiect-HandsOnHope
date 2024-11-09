import { useState } from 'react'
import './App.css'
import News from './components/News'
import Differences from './components/Differences'
import MonthlyPhotos from './components/MonthlyPhotos'
import Footer from './components/Footer'
import UpperSide from './components/UpperSide'
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
    <Navigation/>
    <UpperSide/>
    <News/>
    <Differences/>
    <MonthlyPhotos/>
    <Footer/>
    </>
  )
}

export default App
