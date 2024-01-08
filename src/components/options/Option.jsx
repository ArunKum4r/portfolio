import React, { useState } from 'react'
import { SiAboutdotme } from "react-icons/si";
import { FaFolderOpen, FaDownload, FaHome } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from '../sidebar/Sidebar'
import './option.css'

const Option = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  const handleMenu = () => {
    setOpen(!open)
  }

  const handleActive = (itemName) => {
    setActive(itemName)
  }

  return (
    <div className='option'>
      <div className='menu' onClick={handleMenu}><GiHamburgerMenu /></div>
      {open && <Sidebar />}
      <div className="items">
        <div className="wrapper">
          <a href='/#home' className={`item ${active === 'home' ? 'active' : ''}`} onClick={() => handleActive('home')}>
            <div className="hover-content">Home</div>
            <FaHome />
          </a>
        </div>
        <div className="wrapper">
          <a href='/#about' className={`item ${active === 'about' ? 'active' : ''}`} onClick={() => handleActive('about')}>
            <div className="hover-content">About</div>
            <SiAboutdotme />
          </a>
        </div>
        <div className="wrapper">
          <a href='/#projects' className={`item ${active === 'projects' ? 'active' : ''}`} onClick={() => handleActive('projects')}>
            <div className="hover-content">Projects</div>
            <FaFolderOpen />
          </a>
        </div>
        <div className="wrapper">
          <a href='/#contact' className={`item ${active === 'contact' ? 'active' : ''}`} onClick={() => handleActive('contact')}>
            <div className="hover-content">Contact</div>
            <RiContactsBook2Fill />
          </a>
        </div>
        <div className="wrapper">
          <a href="https://drive.google.com/file/d/1A9bJj-2rv_KvjMh29hRDaPA2hqtKmPzP/view?usp=sharing" className="item">
            <div className="hover-content">Resume</div>
            <FaDownload />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Option;
