import { useState } from 'react'
import './index.css'
import Blurb from './components/Blurb'
import Header from './components/Header'
import Contact from './components/Contact'
import Experiences from './components/Experiences'
import Technologies from './components/Technologies'

function App() {

  const [isDarkMode, setDarkMode] = useState(true);

  const mode = isDarkMode ? "dark-mode" : "light-mode";

  const toggleDarkMode = () => {
    console.log("checking logs")
    setDarkMode(n => {
      return !n;
    })
  }
  return (
    <div className={`container ${mode}`}>
      <div className={"component-container"}>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Blurb />
        <Experiences colorTheme={mode} />
        <Technologies />
        <Contact />
      </div>
    </div>
  )
}

export default App
