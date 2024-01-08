import { useState } from 'react'
import {IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoSass} from 'react-icons/io5'
import {FaLinkedin, FaLocationDot} from 'react-icons/fa6'
import {FaFileAlt, FaGithubSquare} from 'react-icons/fa'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import "./about.css"

const About = () => {
  const [active, setActive] = useState('about')

  const activeHandler = (name) => {
    setActive(name)
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
        <div className="skill-container">
          <a className='skill-icon js' href="" aria-describedby='js'>
            <div id="js" className="skill-desc">JavaScript</div>
            <IoLogoJavascript alt='Javascript' /></a>
          <a className='skill-icon html' href="" aria-describedby='html'>
            <div id="html" className="skill-desc">HTML5</div>
            <IoLogoHtml5 alt='html' /></a>
          <a className='skill-icon css' href="" aria-describedby='css'>
            <div id="css" className="skill-desc">CSS3</div>
            <IoLogoCss3 alt='css' /></a>
          <a className='skill-icon react' href="" aria-describedby='react'>
            <div id="react" className="skill-desc">React</div>
            <IoLogoReact alt='react' /></a>
          <a className='skill-icon node' href="" aria-describedby='node'>
            <div id="node" className="skill-desc">Nodejs</div>
            <IoLogoNodejs alt='node js' /></a>
          <a className='skill-icon mongo' href="" aria-describedby='mongo'>
            <div id="mongo" className="skill-desc">MongoDB</div>
            <SiMongodb alt='MongoDB' /></a>
          <a className='skill-icon express' href="" aria-describedby='express'>
            <div id="express" className="skill-desc">Expressjs</div>
            <SiExpress alt='Expressjs' /></a>
          <a className='skill-icon sass' href="" aria-describedby='sass'>
            <div id="sass" className="skill-desc">SASS</div>
            <IoLogoSass alt='sass' /></a>
        </div>
        <p className='made'>Made with ❤️ using React.</p>
      </div>) : (
        <div className='experience-container'>
        <div className="details-bar">
          <div className="details">
            <h3>Arunkumar Subburaj</h3>
            <p>Full Stack Developer</p>
            <br />
            <a href='tel:+919677162792'><MdOutlinePhoneIphone /> +91 9677162792</a>
            <br />
            <a href='mailto:arunvjr107@gmail.com'><MdEmail />  arunvjr107@gmail.com</a>
            <br />
            <a href='https://maps.app.goo.gl/DGESuz1k5zRMawR68'><FaLocationDot /> Avadi, Chennai, India</a>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/arunkumar-subburaj/"><FaLinkedin />LinkedIn</a>
            <a href=""><FaGithubSquare />Github</a>
            <a href="https://drive.google.com/file/d/1A9bJj-2rv_KvjMh29hRDaPA2hqtKmPzP/view"><FaFileAlt />Resume</a>
          </div>
        </div>
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
          <br />
        </div>
        </div>
      )}
    </div>
  )
}

export default About