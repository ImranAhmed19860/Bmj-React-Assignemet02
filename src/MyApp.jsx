import React from 'react'
import Navbar from './components/Navbar'
import './MyApp.css'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'


export default function MyApp() {
  return (
    <>
    <Navbar logo={"Imtiaz Super Store"}/>
    <Hero/>
    <Card/>
    <Footer/>
    </>
  )
}
