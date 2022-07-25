import React from 'react'
import './Footer.css'
import Logo from "../../../Assets/logo.jpeg"
import {MdOutlineMail} from 'react-icons/md'
import {BsFacebook, BsFillTelephoneFill, BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'
import {AiOutlineCopyright} from 'react-icons/ai'
const Footer = () => {
  return (
    <div id='contacts' className='customFooter'>
      
      <div>
        <img className='ourLogo' src={Logo}></img>
      </div>
      
      <div> 
        <h3 className='talk_description'>Get to talk to us on: </h3>
      </div>
      <div>

        <ul className='mail'>
          <li><a href="" target="blank"><MdOutlineMail/></a></li>
          <li> haki1solutions@gmail.com </li>
        </ul>

        <ul className='mobile'>
          <li><a href="" target="blank"><BsFillTelephoneFill/></a></li>
          <li> +254 712 311 209 </li>
        </ul>

        <ul className='twitter'>
          <li><a href="" target="blank"><BsTwitter/></a></li>
          <li> @Haki-Solutions </li>
        </ul>

        <ul className='facebook'>
          <li><a href="" target="blank"><BsFacebook/></a></li>
          <li> Haki-Solutions </li>
        </ul>

        <ul className='linkedin'>
          <li><a href="" target="blank"><BsLinkedin/></a></li>
          <li> Haki-Solutions </li>
        </ul>

        <ul className='github'>
          <li><a href="" target="blank"><BsGithub/></a></li>
          <li> www.github.com/Haki-Solutions </li>
        </ul>
      </div>

      <div className='copyright'>
        <p>Copyright <a href=''><AiOutlineCopyright/></a> Haki Solutions 2022. All rights reserved</p>
      </div>

      </div>
  )
}

export default Footer