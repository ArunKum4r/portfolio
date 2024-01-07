import React from 'react'
import { SiAboutdotme } from "react-icons/si";
import { FaFolderOpen, FaBrain, FaDownload, FaHome } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import './option.css'

const Option = () => {
  return (
    <div className='option'>
      <div className="items">
        <div className="wrapper">
          <a href='/#home' className="item item1">
            <div className="hover-content">Home</div>
            <FaHome />
          </a>
        </div>
        <div className="wrapper">
          <a href='/#about' className="item item2">
            <div className="hover-content">About</div>
            <SiAboutdotme />
          </a>
        </div>
        <div className="wrapper">
          <a href='/#projects' className="item item3">
            <div className="hover-content">Projects</div>
            <FaFolderOpen />
          </a>
        </div>
        <div className="wrapper">
          <a href='/#skills' className="item item4">
            <div className="hover-content">Skills</div>
            <FaBrain />
          </a>
        </div>
        <div className="wrapper">
          <a href='/#contact' className="item item5">
            <div className="hover-content">Contact</div>
            <RiContactsBook2Fill />
          </a>
        </div>
        <div className="wrapper">
          <a href="https://drive.google.com/file/d/1A9bJj-2rv_KvjMh29hRDaPA2hqtKmPzP/view?usp=sharing" className="item item6">
            <div className="hover-content">Resume</div>
            <FaDownload />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Option;
