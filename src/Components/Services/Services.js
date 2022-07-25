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
      <h2> GRAPHIC DESIGN </h2>
      </div>

      <div>
        <img className='image' src={Graphicdesign}></img>
      </div>

      <div >
      <h2 > APP DEVELOPMENT </h2>
      </div>

      <div>
        <img className='image' src={AppDevelopment}></img>
      </div>
      
      <div >
      <h2 > WEB DEVELOPMENT </h2>
      </div>

      <div>
        <img className='image' src={WebDevelopment}></img>
      </div>

      <div >
      <h2 > WI-FI INSTALLATION AND MAINTENANCE </h2>
      </div>

      <div>
        <img className='image' src={WifiInstallation}></img>
      </div>
      
      <div >
      <h2 > CCT-V INSTALLATION AND MAINTENANCE </h2>
      </div>

      <div>
        <img className='image' src={CCTV}></img>
      </div>

    
    </div>

    
  )
}

export default Services