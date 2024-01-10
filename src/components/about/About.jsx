import { useState } from 'react'
import {motion} from 'framer-motion'
import {IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoSass} from 'react-icons/io5'
import { SiExpress, SiHackerrank, SiMongodb, SiUdemy } from 'react-icons/si'
import "./about.css"
import Details from '../details/Details'

const About = () => {
  const [active, setActive] = useState('about')

  const activeHandler = (name) => {
    setActive(name)
  }

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
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    closed: {
      scale: 0,
      opacity: 0
    }
  }

  return (
    <div className='about'>
      <nav>
        <h2 className="logo">arun</h2>
        <div className="link">
          <button className={active === 'about' ? 'active' : ''} onClick={() => activeHandler('about')}>About</button>
          <button className={active === 'experience' ? 'active' : ''} onClick={() => activeHandler('experience')}>Experience</button>
        </div>
        .
      </nav>
      {active === 'about' ? (<div className="about-container">
        <h1 className="heading">ABOUT ME</h1>
        <p>Hey, I am Arunkumar Subburaj, A self taught Full stack developer(MERN) 💻 based in Chennai, Tamilnadu, India.</p>
        <p>Since, I was a kid, I have been fascinated by computers and enjoyed the process of creating things. 🛠️</p>
        <p>As a result, I left my job as a line leader in ZF India, Chennai and started pursuing a career in software development.</p>
        <br />
        <p>Here are few thing I am good at,</p>
        <motion.div className="skill-container" variants={variants} initial='closed' whileInView='open'>
          <motion.div className='skill-icon js' variants={itemVariants} href="" aria-describedby='js'>
            <div id="js" className="skill-desc">JavaScript</div>
            <IoLogoJavascript alt='Javascript' /></motion.div>
          <motion.div className='skill-icon html' variants={itemVariants} href="" aria-describedby='html'>
            <div id="html" className="skill-desc">HTML5</div>
            <IoLogoHtml5 alt='html' /></motion.div>
          <motion.div className='skill-icon css' variants={itemVariants} href="" aria-describedby='css'>
            <div id="css" className="skill-desc">CSS3</div>
            <IoLogoCss3 alt='css' /></motion.div>
          <motion.div className='skill-icon react' variants={itemVariants} href="" aria-describedby='react'>
            <div id="react" className="skill-desc">React</div>
            <IoLogoReact alt='react' /></motion.div>
          <motion.div className='skill-icon node' variants={itemVariants} href="" aria-describedby='node'>
            <div id="node" className="skill-desc">Nodejs</div>
            <IoLogoNodejs alt='node js' /></motion.div>
          <motion.div className='skill-icon mongo' variants={itemVariants} href="" aria-describedby='mongo'>
            <div id="mongo" className="skill-desc">MongoDB</div>
            <SiMongodb alt='MongoDB' /></motion.div>
          <motion.div className='skill-icon express' variants={itemVariants} href="" aria-describedby='express'>
            <div id="express" className="skill-desc">Expressjs</div>
            <SiExpress alt='Expressjs' /></motion.div>
          <motion.div className='skill-icon sass' variants={itemVariants} href="" aria-describedby='sass'>
            <div id="sass" className="skill-desc">SASS</div>
            <IoLogoSass alt='sass' /></motion.div>
        </motion.div>
        <p className='made'>Made with ❤️ using React.</p>
      </div>) : (
        <div className='experience-container'>
        <div className="details-container"><Details /></div>
        <div className="experience-section">
          <h1>Experience</h1>
          <br />
          <h2>ZF India</h2>
          <h4>Line Leader</h4>
          <p><em>2020 - 2022</em></p>
          <br />
          <ul className='work-desc'>
            <li>Supervised and led a team of mechanical engineers and technicians working on the production line.</li>
            <li>Planning and Organizing daily work shedules to meet the production target.</li>
            <li>Trained and Motivate team members to improve their skills and overall efficiency.</li>
            <li>Worked with cross functional teams to ensure smooth and efficient run of the line.</li>
          </ul>
          <h1>Internship</h1>
          <br />
          <h2>CodeClause</h2>
          <h4>Web Developer Intern</h4>
          <p><em>Jan 2024</em></p>
          <br />
          <ul className='work-desc'>
            <li>Built an Todo list app using HTML, CSS, JavaScript.</li>
            <li>Built an basic Online Resume.</li>
          </ul>
          <h1>Education</h1>
          <br />
          <h2>AMET University, Chennai</h2>
          <h4>Bachelor's in Mechanical Engineering</h4>
          <p><em>2016 - 2020</em></p>
          <p><em>7 CGPA</em></p>
          <br />
          <h2>Jaigopal Garodia Vivekananda Vidyalaya, Avadi</h2>
          <h4>Higher Secondary - Tamilnadu State board</h4>
          <p><em>2014 - 2016</em></p>
          <br />
          <h2>Jaigopal Garodia Vivekananda Vidyalaya, Avadi</h2>
          <h4>Secondary Education(SSC) - CBSE</h4>
          <p><em>2014</em></p>
          <h1>Certifications</h1>
          <br />
          <ul className='work-desc'>
            <li>
              <a href="https://www.udemy.com/certificate/UC-237ebce3-c848-4f77-81b4-7136a5f19e5c/">
              The complete Nodejs developer course - <SiUdemy /> Udemy
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/certificate/UC-e2a3e5e9-5d5a-4b06-83c2-abb7717e5d3e/">
              React - The Complete Guide - <SiUdemy /> Udemy
              </a>
            </li>
            <li>
              <a href="https://learn.mongodb.com/c/Xdkz_F6CTMiVm6NadCqN2A">
              MongoDB Node.js Developer path - <SiMongodb /> MongoDB University
              </a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/certificates/163b96b1cdd9">
              CSS Certificate - <SiHackerrank /> HackerRank
              </a>
            </li>
          </ul>
        </div>
        </div>
      )}
      
    </div>
  )
}

export default About