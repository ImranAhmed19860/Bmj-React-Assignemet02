import React from 'react'
import "./Footer.css"


export default function Footer(props) {
    const foot = "Imran Ahmed"
    const addres ="Copyright : I am a website developer my name Is Imran Ahmed and iam from Karachi"
  return (
    <>
    <div className="footer-section">
    <h1 style = {{color:'black' ,padding:"10px"}}>{foot}</h1>
    <p className='peragraph'>{addres}</p>
    </div>
    </>
  )
}
