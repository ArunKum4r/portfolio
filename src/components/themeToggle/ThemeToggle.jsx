import './themeToggle.css'
import sun from '../../images/sun.png'
import moon from '../../images/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const ThemeToggle = () => {
  const {theme, toggle} = useContext(ThemeContext)

  return (
    <div className='toggle-container' onClick={toggle}>
        <img src={moon} alt="moon/dark" />
        <div className="ball" style={theme === 'dark' ? {left: 2} : {right: 2}}></div>
        <img src={sun} alt="sun/light" />
    </div>
  )
}

export default ThemeToggle