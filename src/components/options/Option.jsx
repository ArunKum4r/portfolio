import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { SiAboutdotme } from "react-icons/si";
import { FaFolderOpen, FaDownload, FaHome } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from '../sidebar/Sidebar'
import './option.css'
import ThemeToggle from '../themeToggle/ThemeToggle';

const Option = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delay: 1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }
  
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1
    },
    closed: {
      y: 50,
      opacity: 0
    }
  }

  const handleMenu = () => {
    setOpen(!open)
  }

  const handleActive = (itemName) => {
    setActive(itemName)
  }

  return (
    <div className='option'>
      <div className="toggle"><ThemeToggle/></div>
      <div className='menu' onClick={handleMenu}><GiHamburgerMenu /></div>
      {open && <Sidebar />}
      <motion.div className="items" variants={variants} initial='closed' animate='open'>
        <div className="wrapper">
          <motion.a href='/#home' className={`item ${active === 'home' ? 'active' : ''}`} variants={itemVariants} onClick={() => handleActive('home')}>
            <div className="hover-content">Home</div>
            <FaHome />
          </motion.a>
        </div>
        <div className="wrapper">
          <motion.a href='/#about' className={`item ${active === 'about' ? 'active' : ''}`} variants={itemVariants} onClick={() => handleActive('about')}>
            <div className="hover-content">About</div>
            <SiAboutdotme />
          </motion.a>
        </div>
        <div className="wrapper">
          <motion.a href='/#projects' className={`item ${active === 'projects' ? 'active' : ''}`} variants={itemVariants} onClick={() => handleActive('projects')}>
            <div className="hover-content">Projects</div>
            <FaFolderOpen />
          </motion.a>
        </div>
        <div className="wrapper">
          <motion.a href='/#contact' className={`item ${active === 'contact' ? 'active' : ''}`} variants={itemVariants} onClick={() => handleActive('contact')}>
            <div className="hover-content">Contact</div>
            <RiContactsBook2Fill />
          </motion.a>
        </div>
        <div className="wrapper">
          <motion.a href="https://drive.google.com/file/d/1A9bJj-2rv_KvjMh29hRDaPA2hqtKmPzP/view?usp=sharing" variants={itemVariants} target='_blank' className="item">
            <div className="hover-content">Resume</div>
            <FaDownload />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default Option;
