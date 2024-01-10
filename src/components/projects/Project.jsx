import React from 'react'
import {motion} from 'framer-motion'
import './project.css'
import { FaGithubSquare } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import anonchat from '../../images/anonchat.png'
import portfolio from '../../images/portfolio.png'
import rto from '../../images/rto.png'
import todo from '../../images/todo.png'
import weather from '../../images/weather.png'

const Project = () => {
    const variants = {
        open: {
          transition: {
            staggerChildren: 0.1,
            delay: 1,
            duration: 2
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
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5
          }
        },
        closed: {
          x: 500,
          opacity: 0
        }
      }

  return (
    <div className='projects'>
        <h1>Projects</h1>
        <motion.div class="projects-container" variants={variants} initial='closed' whileInView='open'>
            <motion.div class="tile tile2" variants={itemVariants}>
                <img src={anonchat} alt="anonchat" />
                <h2>AnonChat</h2>
                <p><strong>Room based conversations</strong> Join an existing room or create your own.</p>
                <p><strong>Personalize your presence</strong> Enter a profile name to personalize you presence and start engaging with others.</p>
                <p><strong>Location sharing</strong> Share your current location.</p>
                <p><strong>Respectful environment</strong> Our robust filtering system ensures that chat room remains respectful.</p>
                <br />
                <br />
                <div className="tech">
                    <h6>Nodejs - Socket.io - CSS</h6>
                    <div className="takeme">
                        <a href="https://github.com/ArunKum4r/AnonChat" target='_blank'><FaGithubSquare /></a>
                        <a href="https://anonchat-qf0d.onrender.com/" target='_blank'><PiLinkSimpleBold /></a>
                    </div>
                </div>
            </motion.div>
            <motion.div class="tile tile4" variants={itemVariants}>
                <img src={weather} alt="weather app" />
                <h2>Weather App</h2>
                <p><strong>Precise location tagging</strong> Type in your location and let Mapbox's geotagging API find its coordinates.</p>
                <p><strong>Comprehensive weather data</strong> WeatherApp fetches realtime weather data from WeatherStack API. Provides you with basic info like temperature, wind speed, weather and humidity.</p>
                <div className="tech">
                    <h6>Nodejs - APIs - CSS</h6>
                    <div className="takeme">
                        <a href="https://github.com/ArunKum4r/node-weather" target='_blank'><FaGithubSquare /></a>
                        <a href="https://arun-weather-app.onrender.com/" target='_blank'><PiLinkSimpleBold /></a>
                    </div>
                </div>motion.
            </motion.div>
            <motion.div class="tile tile3" variants={itemVariants}>
                <img src={rto} alt="rto" />
                <h2>TN RTO Finder</h2>
                <p>A Simple Web Application to find Tamilnadu RTO data like location and district.</p>
                <p><strong>Rapid District and Location Identification</strong> Enter the first four characters of a vehicle registration number, and the Tamil Nadu RTO Finder swiftly identifies the district and location linked to that registration.</p>
                <p><strong>Simplified User Interface</strong> The app boasts a user-friendly interface, ensuring that users can effortlessly access the district information they need without unnecessary complexity.</p>
                <div className="tech">
                    <h6>JavaScript - HTML - CSS</h6>
                    <div className="takeme">
                        <a href="https://github.com/ArunKum4r/TN-RTO-Finder" target='_blank'><FaGithubSquare /></a>
                        <a href="https://arunkum4r.github.io/TN-RTO-Finder/" target='_blank'><PiLinkSimpleBold /></a>
                    </div>
                </div>
            </motion.div>
            <motion.div class="tile tile1" variants={itemVariants}>
                <img src={todo} alt="todo app" />
                <h2>Task Manager</h2>
                <p><strong>Task Creation</strong> Enter your task into the app. The system automatically assigns a timestamp to record when the task was created.</p>
                <p><strong>Task Editing</strong> Modify task details or delete it when it is no longer relevant. Keep your todo list tailored to your current priorities.</p>
                <p><strong>Mark as completed</strong> Click on a task to mark it as completed.</p>
                <p><strong>Filter Your Tasks</strong> Use the filtering options to streamline your view. Choose to display all tasks, only pending tasks, or exclusively completed tasks based on your current focus.</p>
                <div className="tech">
                    <h6>JavaScript - HTML - CSS</h6>
                    <div className="takeme">
                        <a href="https://github.com/ArunKum4r/todo-app" target='_blank'><FaGithubSquare /></a>
                        <a href="https://arunkum4r.github.io/todo-app/" target='_blank'><PiLinkSimpleBold /></a>
                    </div>
                </div>
            </motion.div>
            <motion.div class="tile tile5" variants={itemVariants}>
                <img src={portfolio} alt="portfolio" />
                <h2>Portfolio</h2>
                <p>Get a glimpse of who I am and what I bring to the table. Discover my passion for technology and innovation.</p>
                <p>Dive into my story! Learn about my background, journey into the world of tech, and the skills I've cultivated along the way.</p>
                <p>Embark on a journey through my professional endeavors. From leadership roles to impactful internships, every experience has shaped my skills and approach.</p>
                <div className="tech">
                    <h6>React - CSS</h6>
                    <div className="takeme">
                        <a href="https://github.com/ArunKum4r/portfolio" target='_blank'><FaGithubSquare /></a>
                        <a href="/" target='_blank'><PiLinkSimpleBold /></a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Project