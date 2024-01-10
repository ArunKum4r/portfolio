import React from 'react'
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import {FaLinkedin, FaLocationDot} from 'react-icons/fa6'
import {FaFileAlt, FaGithubSquare} from 'react-icons/fa'
import './details.css'

const Details = () => {
  return (
    <div className="details-bar">
        <div className="details">
            <h3>Arunkumar Subburaj</h3>
            <p>Full Stack Developer</p>
            <br />
            <a href='tel:+919677162792' target='_blank'><MdOutlinePhoneIphone /> +91 9677162792</a>
            <br />
            <a href='mailto:arunvjr107@gmail.com' target='_blank'><MdEmail />  arunvjr107@gmail.com</a>
            <br />
            <a href='https://maps.app.goo.gl/DGESuz1k5zRMawR68' target='_blank'><FaLocationDot /> Avadi, Chennai, India</a>
        </div>
        <div className="social">
            <a href="https://www.linkedin.com/in/arunkumar-subburaj/" target='_blank'><FaLinkedin />LinkedIn</a>
            <a href="https://github.com/ArunKum4r" target='_blank'><FaGithubSquare />Github</a>
            <a href="https://drive.google.com/file/d/1A9bJj-2rv_KvjMh29hRDaPA2hqtKmPzP/view" target='_blank'><FaFileAlt />Resume</a>
        </div>
    </div>
  )
}

export default Details