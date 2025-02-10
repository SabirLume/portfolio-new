import sun from '../assets/mynaui--sun.svg'
import moon from '../assets/solar--moon-outline.svg'
import aLogo from '../assets/a_bold.svg'
const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className={"flex-nav-bar"}>
      <a>
        <img src={aLogo} alt="light mode toggle" className={"a-icon"} />
      </a>
      <div>
        <nav className={"flex-nav-controls"}>
          {isDarkMode ?
            <a onClick={toggleDarkMode}>
              <img src={sun} alt="light mode toggle" className={"nav-icon"} />
            </a>
            :
            <span onClick={toggleDarkMode}>
              <img src={moon} alt="dark mode toggle" className={"nav-icon moon"} />
            </span>
          }
        </nav>
      </div>
    </div>
  )
}

export default Header
