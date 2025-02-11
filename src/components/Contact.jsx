import linkedIn from '../assets/linkedIn.svg'
import gitHub from '../assets/github.svg'
const Contact = ({ colorTheme }) => {
  return (
    <>
      <h2 className={"title"}>Contact</h2>
      <div className={`contact ${colorTheme}`}>
        <div>
          <span>
            <img src={gitHub} />
          </span>
          <span>
            <a href="https://github.com/SabirLume" target="_blank" rel="noopener noreferrer"> GitHub </a>
          </span>
        </div>
        <div>
          <span>
            <img src={linkedIn} />
          </span>
          <span>
            <a href="https://www.linkedin.com/in/anwarsabir/" target="_blank" rel="noopener noreferrer" >LinkedIn </a>
          </span>
        </div>
      </div >
    </>
  )
}
export default Contact
