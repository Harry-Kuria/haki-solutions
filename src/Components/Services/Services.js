import React from 'react'
import "./Services.css"
import Graphicdesign from "../../Assets/graphic_design.jpg"
import AppDevelopment from "../../Assets/appDevelopment.jpg"
import WebDevelopment from "../../Assets/webDevelopment.jpg"
import WifiInstallation from "../../Assets/wifi.jpg"
import CCTV from "../../Assets/cctv.jpeg"

const Services = () => {
  return (
    <div className='service_offered'>

      <div >
      <h2> DIGITAL MARKETING </h2>
      </div>

      <div>
        <img className='image' src={Graphicdesign}></img>
        <p>Let us make your product or service known by the public in a digital</p>
        <p>and presentable way to see that it will not only advertise you but also attract customers to you in abundance.</p>
      </div>

      <div >
      <h2 > APP DEVELOPMENT </h2>
      </div>

      <div>
        <img className='image' src={AppDevelopment}></img>
        <p>Get to have a custom software running on any device of your choice</p>
        <p>for the good of your business at an affordable price</p>
      </div>
      
      <div >
      <h2 > WEB DEVELOPMENT </h2>
      </div>

      <div>
        <img className='image' src={WebDevelopment}></img>
        <p>Get to have a website designed as per your requirements at an affordable price</p>
      </div>

      <div >
      <h2 > NETWORK INSTALLATION AND MAINTENANCE </h2>
      </div>

      <div>
        <img className='image' src={WifiInstallation}></img>
        <p>Achieve active network connection and maintenance at affordable rates.</p>
      </div>
      
      <div >
      <h2 > SECURITY ACCESS AND CONTROL </h2>
      </div>

      <div>
        <img className='image' src={CCTV}></img>
        <p>Secure your area and belongings via our security services to see that</p>
        <p>you will have full-time surveillance over your property.</p>
      </div>

    
    </div>

    
  )
}

export default Services