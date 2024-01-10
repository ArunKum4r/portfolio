import { useState } from "react"
import {motion} from 'framer-motion'
import "./home.css"

const Home = () => {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

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
        duration: 0.8
      }
    },
    closed: {
      scale: 50,
      opacity: 0
    }
  }
  
  return (
    <motion.div className='home' variants={variants} initial='closed' animate='open'>
      <motion.p className="greet" variants={itemVariants}>Hey there!! How ya doin?</motion.p>
      <motion.div className='name' variants={itemVariants}><p>It's</p><h1>arun</h1><p>here. </p></motion.div>
      <motion.div className="type-container" variants={itemVariants}>
        <p>I am a web developer !</p>
      </motion.div>
      <div className="cursor"
           style={{
            left: cursorX + 'px',
            top: cursorY + 'px'
           }}>
      </div>
    </motion.div>
  )
}

export default Home