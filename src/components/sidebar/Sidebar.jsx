import { FaFolderOpen, FaHome, FaDownload } from 'react-icons/fa'
import './sidebar.css'
import { SiAboutdotme } from 'react-icons/si'
import { RiContactsBook2Fill } from 'react-icons/ri'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-item">
            <FaHome className='link-icons' />
            <a className='links' href="/#home">Home</a>
        </div>
        <div className="sidebar-item">
            <SiAboutdotme className='link-icons' />
            <a className='links' href="/#about">About</a>
        </div>
        <div className="sidebar-item">
            <FaFolderOpen className='link-icons' />
            <a className='links' href="/#projects">Projects</a>
        </div>
        <div className="sidebar-item">
            <RiContactsBook2Fill className='link-icons' />
            <a className='links' href="/#contact">Contact</a>
        </div>
        <div className="sidebar-item">
            <FaDownload className='link-icons' />
            <a className='links' href="https://drive.google.com/file/d/1A9bJj-2rv_KvjMh29hRDaPA2hqtKmPzP/view?usp=sharing">
             Resume
            </a>
        </div>
    </div>
  )
}

export default Sidebar