import { FaFolderOpen, FaHome, FaDownload } from 'react-icons/fa'
import {motion} from 'framer-motion'
import './sidebar.css'
import { SiAboutdotme } from 'react-icons/si'
import { RiContactsBook2Fill } from 'react-icons/ri'

const Sidebar = () => {
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

  return (
    <motion.div className='sidebar' variants={variants} initial='closed' animate='open'>
        <motion.div className="sidebar-item" variants={itemVariants}>
            <FaHome className='link-icons' />
            <a className='links' href="/#home">Home</a>
        </motion.div>
        <motion.div className="sidebar-item" variants={itemVariants}>
            <SiAboutdotme className='link-icons' />
            <a className='links' href="/#about">About</a>
        </motion.div>
        <motion.div className="sidebar-item" variants={itemVariants}>
            <FaFolderOpen className='link-icons' />
            <a className='links' href="/#projects">Projects</a>
        </motion.div>
        <motion.div className="sidebar-item" variants={itemVariants}>
            <RiContactsBook2Fill className='link-icons' />
            <a className='links' href="/#contact">Contact</a>
        </motion.div>
        <motion.div className="sidebar-item" variants={itemVariants}>
            <FaDownload className='link-icons' />
            <a className='links' href="https://drive.google.com/file/d/1A9bJj-2rv_KvjMh29hRDaPA2hqtKmPzP/view?usp=sharing" target='_blank'>Resume</a>
        </motion.div>
    </motion.div>
  )
}

export default Sidebar